import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/ImageGallery.scss";

import mock01 from "../assets/team/01.jpg";
import mock02 from "../assets/team/02.jpeg";
import mock03 from "../assets/team/03.jpeg";
import mock04 from "../assets/team/04.jpeg";


const images: string[] = [mock01, mock02, mock03, mock04];

const ImageGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const autoCloseTimer = useRef<number | null>(null);

  const closeOverlay = () => {
    setSelectedIndex(null);
    if (autoCloseTimer.current) {
      clearTimeout(autoCloseTimer.current);
      autoCloseTimer.current = null;
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      autoCloseTimer.current = window.setTimeout(() => {
        closeOverlay();
      }, 60000);
    }
    return () => {
      if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="gallery-container">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="thumbnail"
            onClick={() => setSelectedIndex(index)}
            alt={`thumb-${index}`}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="overlay" onClick={closeOverlay}>
          <img
            src={images[selectedIndex]}
            className="full-image"
            alt="expanded"
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;