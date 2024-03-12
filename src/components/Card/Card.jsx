import React from 'react';
import './card.css';

function Card({ card }) {
  return (
    <figure className="card">
      <img src={card.cover} alt={card.title} />
      <figcaption>{card.title}</figcaption>
    </figure>
  );
}

export default Card
