import React from 'react'
import './about.css';
import Banner from '../../components/Banner/Banner';
import imgbanner from '../../assets/images/seaside-cliffs.png';
 import Collapse from '../../components/Collapse/Collapse';
const About = () => {

  const collapses = [
    { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîneraune exclusion de notre plateforme." },
    { title: "Service", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraîneraune exclusion de notre plateforme." },
    { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standarts sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
  ];

  return (
    <main>
      < Banner src={imgbanner}  alt="Une image vue sur les sapins et les montagnes"  />
      <Collapse items={collapses} />

    </main>
  )
}

export default About;