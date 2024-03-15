import React from 'react';
import './banner.css';


/*seems like everithing is wrong with the banner the navbar shouldn't be inside the banner*/
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