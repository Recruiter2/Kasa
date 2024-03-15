import  { useState, useEffect } from 'react';
import './home.css';
import logements from '../../assets/logements.json';
import Banner from '../../components/Banner/Banner';
import seasideCliffs from '../../assets/images/seaside-cliffs.png';
import Card from '../../components/Card/Card';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TestCard from '../../components/TestCard/TestCard';
import { Link } from 'react-router-dom';

function Home() {


  
  return (
    <main>
          {/* need to add nav inside the banner but the issue is that ig it's better to add it in Banner components this way it's easier  */}
          <Navbar />

      <Banner src={seasideCliffs} alt="Bord de mer" content="Chez vous, partout et ailleurs" />      {/* Display something */}
      
      <ul className='allcards'> 
      {logements.map((card) => (
        <li key={card.id}>
          <Link to={`/fullCard/${card.id}`}>
            <TestCard src={card.cover} alt={card.cover} content={card.title} />
          </Link>
        </li>
  ))}
</ul>
      
      {/* <ul>
        {logements.map((card) => (
          <li key={card.id}> 
            <Card card={card} /> 
          </li>
        ))}
      </ul> */}
      <Footer/>
    </main>

  );
}

export default Home;