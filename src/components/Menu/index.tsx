import React from 'react';

import ButtonLink from './ButtonLink';

import './styles.css';

import { Logo, MenuContainer } from './styles';

import logo from '../../assets/LogoMain.png';

const Menu: React.FC = () => {
  return (
    <>
      <MenuContainer className="Menu">
        <a href="/">
          <Logo className="Logo" src={logo} alt="AluraFlix logo" />
        </a>

        <ButtonLink href="/link">Novo Video</ButtonLink>
      </MenuContainer>
    </>
  );
};

export default Menu;
