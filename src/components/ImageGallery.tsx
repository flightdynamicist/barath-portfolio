import React, { useState } from "react";
import "../assets/styles/ImageGallery.scss";

import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';

const images: string[] = [mock01, mock02, mock03];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="gallery-container">
        <div className="thumbnail-row">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              className="thumbnail"
              onClick={() => setSelectedImage(src)}
              alt={`thumb-${index}`}
            />
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="overlay" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            className="full-image"
            alt="expanded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ImageGallery;