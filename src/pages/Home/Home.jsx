import  { useState, useEffect } from 'react';
import './home.css';
import logements from '../../assets/logements.json';
import Card from '../../components/Card/Card';

function Home() {


  return (
    <main>
      <h1>Kasa</h1>
      {/* Display something */}
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