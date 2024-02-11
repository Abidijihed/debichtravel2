import React, { useState } from 'react';
import './Carousel.css'; // Import your CSS file for styling
import SearchForm from './SearchForm';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="carousel-container" >
      <button className="carousel-arrow carousel-left" onClick={handlePrev}>&#9665;</button>
      <div className="carousel-image-container">
        <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} className="carousel-image" />
      </div>
    
    <button className="carousel-arrow carousel-right" onClick={handleNext}>&#9655;</button>
    {/* <SearchForm />/ */}
    </div>
  );
};

export default Carousel;
