import logo from '../../assets/images/logo_h.png';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function Nav() {
  return (
    <nav className='header'>
      <img src={logo} alt="Logo KASA" />
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active" className='aboutlink'>À Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;