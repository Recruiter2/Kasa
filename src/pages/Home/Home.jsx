import './home.css';
import logements from '../../assets/logements.json';
import Banner from '../../components/Banner/Banner';
import seasideCliffs from '../../assets/images/seaside-cliffs.png';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';

function Home() {


  
  return (
    <main>
          {/* need to add nav inside the banner but the issue is that ig it's better to add it in Banner components this way it's easier  */}


      <Banner src={seasideCliffs} alt="Bord de mer" content="Chez vous,
       partout et ailleurs" />      {/* Display something */}
      
      <ul className='allcards'> 
      {logements.map((card) => (
        <li key={card.id}>
          <Link to={`/fullCard/${card.id}`}>
            <Card src={card.cover} alt={card.cover} content={card.title} />
          </Link>
        </li>
  ))}
</ul>
      
      
    </main>

  );
}

export default Home;