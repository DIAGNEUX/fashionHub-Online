import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/Fashion">Fashion</Link></li>
        <li><Link to="/Tendances">Tendances</Link></li>
        <li><Link to="/Boutique">Boutique</Link></li>
        <li><Link to="/Apropos">À Propos</Link></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
