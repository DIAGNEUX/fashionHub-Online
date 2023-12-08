import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import { Acceuil, Accueil } from '../Pages/Accueil';
import { Fashion } from '../Pages/Fashion';
import { Tendances } from '../Pages/Tendances';
import { Boutique } from '../Pages/Boutique';
import { Apropos } from '../Pages/Apropos';

const Routeur = () => {
  return (
    
      <div>
        <Routes>
          <Route exact path="/" element={<Acceuil />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Tendances" element={<Tendances />} />
          <Route path="/Boutique" element={<Boutique />} />
          <Route path="/Apropos" element={<Apropos />} />
          </Routes>
      </div>
  );
}

export default Routeur;
