import React from 'react';

import ButtonLink from './ButtonLink';

import './styles.css';

import logo from '../../assets/LogoMain.png';

const Menu: React.FC = () => {
  return (
    <>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={logo} alt="AluraFlix logo" />
        </a>

        <ButtonLink href="/link">Link Children dkldaslkj</ButtonLink>
      </nav>
    </>
  );
};

export default Menu;
