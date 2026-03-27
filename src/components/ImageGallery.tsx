import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/ImageGallery.scss";

import mock02 from "../assets/team/02.jpeg";
import mock03 from "../assets/team/03.jpeg";
import mock04 from "../assets/team/04.jpeg";
const mock01 = "https://m.media-amazon.com/images/I/71GqMTCFWtL._UF1000,1000_QL80_.jpg";

interface ImageItem {
  src: string;
  caption: string;
  description: string;
}

const images: ImageItem[] = [
  {
    src: mock01,
    caption: "FlightDynamics Team",
    description: "Our core team working on lunar lander GNC simulations.",
  },
  {
    src: mock02,
    caption: "Mission Simulation Session",
    description: "Simulating mission scenarios for Earth observation and lunar missions.",
  },
  {
    src: mock03,
    caption: "Satellite Testing Day",
    description: "Testing satellite subsystems including AOCS, Payload, and Propulsion.",
  },
  {
    src: mock04,
    caption: "Team Brainstorming",
    description: "Collaborating on system architecture, risk management, and mission design.",
  },
];

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

  // Escape key closes overlay
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeOverlay();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Auto-close overlay after 60s
  useEffect(() => {
    if (selectedIndex !== null) {
      autoCloseTimer.current = window.setTimeout(closeOverlay, 60000);
    }
    return () => {
      if (autoCloseTimer.current) clearTimeout(autoCloseTimer.current);
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="thumbnail-wrapper"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={image.src}
              className="thumbnail"
              alt={`thumb-${index}`}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="overlay" onClick={closeOverlay}>
          {/* Caption at top */}
          <div className="overlay-caption">
            {images[selectedIndex].caption}
          </div>

          {/* Full image + description */}
          <div className="full-image-wrapper">
            <img
              src={images[selectedIndex].src}
              className="full-image"
              alt="expanded"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="overlay-description">
              {images[selectedIndex].description}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;