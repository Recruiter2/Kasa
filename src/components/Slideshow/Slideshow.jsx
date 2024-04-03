import React, { useState } from 'react';
import leftArrow from '../../assets/images/arrow_left.png';
import rightArrow from '../../assets/images/arrow_right.png';
import './slideshow.css';

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); //on met la variable currentImageIndex a 0 et setCurrentImageIndex sert au mettre à jour cette variable || useState est une fonction qui permet de creer une variable d'etat. variable d'etat car on a besoin de mettre à jour le composant

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <figure className="slideshow">
      <figcaption className='count'>{images.length > 1 && <p>{currentImageIndex + 1}/{images.length}</p>}</figcaption>
      <img src={images[currentImageIndex]} alt={`${currentImageIndex + 1}`} className='slideshow-image' />
      {images.length > 1 && (
        <div>
          <img src={leftArrow} alt="Left arrow" className='arrow-left' onClick={prevSlide} />
          <img src={rightArrow} alt="Right arrow" className='arrow-right' onClick={nextSlide} />
{/*           <span class="tablette" >{currentImageIndex + 1}/{images.length}</span>
 */}        </div>
        
      )}
    </figure>
  );
}

export default Slideshow;