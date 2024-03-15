import { useParams } from 'react-router-dom';
import logements from '../../assets/logements.json';
import './card.css';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../Rating/Rating.jsx';
import HostInfo from '../../components/HostInfo/HostInfo';
import Tags from '../../components/Tags/Tags';
import Slideshow from '../../components/Slideshow/Slideshow';
import Error from '../Error/Error'

function FullCard() {
  const { id } = useParams();
  const card = logements.find((card) => card.id === id);
  
  if (!card) {
    return <Error />
  }; 

  return (
    <main>
      <Slideshow images={card.pictures} />
      <section className="infos-card">
        <section className="titles-tags">
          <h1>{card.title}</h1>
          <h2>{card.location}</h2>
          <Tags host={card.host} tags={card.tags} location={card.location} />
        </section>
        <section className="rating-host">
          <Rating rating={card.rating} />
          <HostInfo name={card.host.name} picture={card.host.picture} />
        </section>
      </section>
      <ul className="collapse-container">
      <Collapse title="Description" content={card.description} />
      <Collapse title="Equipements" content={<ul>{card.equipments.map((equipement, index) => <li key={index}>{equipement}</li>)}</ul>} />
      </ul>
    </main>
  );
}

export default FullCard;
/* import React from 'react';
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
 */