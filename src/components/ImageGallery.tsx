import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/ImageGallery.scss";

import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";

const images: string[] = [mock01, mock02, mock03];

const ImageGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const autoCloseTimer = useRef<number | null>(null);

  const closeOverlay = () => {
    setSelectedIndex(null);

    // Clear timer whenever overlay closes
    if (autoCloseTimer.current) {
      clearTimeout(autoCloseTimer.current);
      autoCloseTimer.current = null;
    }
  };

  // Escape key closes overlay
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Auto-close overlay after 5 seconds
  useEffect(() => {
    if (selectedIndex !== null) {
      autoCloseTimer.current = window.setTimeout(() => {
        closeOverlay();
      }, 60000); // ⏱ change auto close duration here
    }

    return () => {
      if (autoCloseTimer.current) {
        clearTimeout(autoCloseTimer.current);
      }
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="gallery-container">
        <div className="thumbnail-row">
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