import React from 'react';
import styled from 'styled-components';

import Footer from '../Footer';
import Menu from '../Menu';

const Main = styled.main`
  flex: 1;
  background-color: var(--black);
  color: var(--white);
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
