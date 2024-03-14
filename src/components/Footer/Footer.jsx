import logo from '../../assets/images/logo_f.png';
import './footer.css';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo KASA" />
      <h4> © 2020 Kasa. All rights reserved</h4>
    </footer>
  );
};

export default Footer;