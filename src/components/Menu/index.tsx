import React from 'react';

import './styles.css';

import logo from '../../assets/LogoMain.png';

const Menu: React.FC = () => {
  return (
    <>
      <nav>Alura Flix Menu</nav>
      <img className="logo" src={logo} alt="AluraFlix logo" />
    </>
  );
};

export default Menu;
