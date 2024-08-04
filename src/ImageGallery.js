import React from 'react';
import './ImageGallery.css';


    function ImageGallery({ images }) {
    return (
        <div className="image-gallery">
        {images.map((image, index) => (
            <div key={index} className="image-item">
            <img src={image.url} alt={`Image ${index + 1}`} />
            <p>{image.description}</p>
            </div>
        ))}
        </div>
    );
    }

export default ImageGallery;
