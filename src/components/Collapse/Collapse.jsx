import React, { useState } from 'react';
import './collapse.css';
import Arrow from '../../assets/images/arrow_left.png';

function Collapse({ title, content = '' }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (

    <li>
      <button onClick={toggleCollapse} className="collapse-button">
        <img src={Arrow} alt="Toggle" style={{ }} />{title}
      </button>
      {isCollapsed && <div className="content-expanded">{content}</div>}

      {/*isCollapsed ? null : <div className="content-expanded"  >{content}</div>*/}
      {/*condition ? valeur_si_vrai : valeur_si_faux.
      null est une mauvaise pratique car null est indefinit peut poser problèmes dans certains cas*/}
    </li>

  );
};

export default Collapse;