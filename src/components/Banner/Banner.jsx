import React from 'react';
import './banner.css';

function Banner({ src, alt, content="" }) {
  return (
        /* here we can add the nav bar if that makees sense */
    <header className='banner'>
      <img src={src} alt={alt} />
      <p>{content}</p>
    </header>
  );
}

export default Banner;