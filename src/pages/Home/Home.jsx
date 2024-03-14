import  { useState, useEffect } from 'react';
import './home.css';
import logements from '../../assets/logements.json';
import Banner from '../../components/Banner/Banner';
import seasideCliffs from '../../assets/images/seaside-cliffs.png';
import Card from '../../components/Card/Card';

function Home() {


  
  return (
    <main>
          {/* need to add nav inside the banner but the issue is that ig it's better to add it in Banner components this way it's easier  */}
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