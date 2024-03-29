import './home.css';
import logements from '../../assets/logements.json';
import Banner from '../../components/Banner/Banner';
import seasideCliffs from '../../assets/images/seaside-cliffs.png';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

function Home() {


  
  return (
    <main>
         


      <Banner src={seasideCliffs} alt="Bord de mer" content="Chez vous,partout et ailleurs" />      
      
      <ul className='allcards'> 
      {logements.map((card) => (
        <li key={card.id}>
          <Link to={`/fullCard/${card.id}`}>
            <Card src={card.cover} alt={card.title} content={card.title} />
          </Link>
        </li>
  ))}
</ul>
      
      
    </main>

  );
}

export default Home;