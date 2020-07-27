import React from 'react';

import ButtonLink from './ButtonLink';

import './styles.css';

import { Body, Logo, MenuContainer } from './styles';

import logo from '../../assets/LogoMain.png';

const Menu: React.FC = () => {
  return (
    <Body>
      <MenuContainer className="Menu">
        <a href="/">
          <Logo className="Logo" src={logo} alt="AluraFlix logo" />
        </a>

        <ButtonLink href="/link">Styled Components Button</ButtonLink>
      </MenuContainer>
    </Body>
  );
};

export default Menu;
