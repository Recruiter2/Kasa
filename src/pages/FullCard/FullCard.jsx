import { useParams } from 'react-router-dom';
import accomodations from '../../assets/logements.json';
import './fullcard.css';
import Collapse from '../../components/Collapse/Collapse';
import Rating from '../../components/Rating/Rating';
import HostInfo from '../../components/HostInfo/HostInfo';
import Tags from '../../components/Tags/Tags';
import Slideshow from '../../components/Slideshow/Slideshow';
import Error from   '../ErrorPage/ErrorPage'

function FullCard() {
  const { id } = useParams(); //ici on utilise useParams pour récupérer l'id depuis l'url hook
  const card = accomodations.find((card) => card.id === id); //on peut par la suite exploiter l'id pour verifier que l'id existe dans le json logements
  
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