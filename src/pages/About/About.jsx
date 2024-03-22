import React from 'react'
import './about.css';
import Banner from '../../components/Banner/Banner';
import imgbanner from '../../assets/images/mountain-forests.png';
 import Collapse from '../../components/Collapse/Collapse';
 import data from '../../assets/about.json';
 
const About = () => {

  return (
    <main>
      < Banner src={imgbanner}  alt="Une image vue sur les sapins et les montagnes"  />

      <ul className='about-collapse'>
      {data.map((about) => (
        <Collapse  title={about.title} content={about.content} />
      ))}
      </ul>

    </main>
  )
}

export default About;