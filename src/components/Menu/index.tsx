import React from 'react';

import './styles.css';

import logo from '../../assets/LogoMain.png';

const Menu: React.FC = () => {
  return (
    <>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={logo} alt="AluraFlix logo" />
        </a>

        <a className="ButtonLink" href="/">
          Novo Video
        </a>
      </nav>
    </>
  );
};

export default Menu;
