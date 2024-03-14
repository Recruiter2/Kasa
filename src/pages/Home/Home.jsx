import  { useState, useEffect } from 'react';
import './home.css';
import logements from '../../assets/logements.json';
import Banner from '../../components/Banner/Banner';
import seasideCliffs from '../../assets/images/seaside-cliffs.png';
import Card from '../../components/Card/Card';

function Home() {


  return (
    <main>
      <Banner src={seasideCliffs} alt="Bord de mer" content="Chez vous, partout et ailleurs" />      {/* Display something */}
      <ul>
        {logements.map((card) => (
          <li key={card.id}> 
            <Card card={card} /> 
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;