import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Imagem ${index + 1}`} className="image-gallery-item" />
      ))}
    </div>
  );
};

export default ImageGallery;