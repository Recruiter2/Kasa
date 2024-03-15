import './card.css';
import React from 'react';


function Card({ card }) {
  return (
    <figure className="card">
      <img src={card.cover} alt={card.title} />
      <figcaption>{card.title}</figcaption>
    </figure>
  );
}

export default Card
/* function Card({ card }) {
  return (
    <figure className="card shadow full-card">
      <img src={card.cover} alt={card.title} />
      <figcaption className="card-content full-content">{content}</figcaption>
    </figure>
  );
}

export default Card
 */