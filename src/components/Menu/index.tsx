import React from 'react';

import ButtonLink from './ButtonLink';

import './styles.css';

import { ButtonLinkHome, Logo, MenuContainer } from './styles';

import logo from '../../assets/LogoMain.png';

const Menu: React.FC = () => {
  return (
    <>
      <MenuContainer className="Menu">
        <ButtonLinkHome to="/">
          <Logo className="Logo" src={logo} alt="AluraFlix logo" />
        </ButtonLinkHome>

        <ButtonLink to="/cadastro/video">Novo Video</ButtonLink>
      </MenuContainer>
    </>
  );
};

export default Menu;
