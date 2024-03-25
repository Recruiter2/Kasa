import React from 'react';
import './hostinfo.css';

function HostInfo({ name, picture }) {
  const [firstName, lastName] = name.split(' ');

  return (
    <figure className='host-figure'>
      
        <figcaption className='host-name'>{firstName} <br/> {lastName}</figcaption>
      
      <img src={picture} alt={name} className='host' />
    </figure>
  );
};

export default HostInfo;