import React from 'react';
import styled, { css } from 'styled-components';

import Footer from '../Footer';
import Menu from '../Menu';

interface Props {
  isDashboard?: boolean;
}

const Main = styled.main<Props>`
  flex: 1;
  background-color: var(--black);
  color: var(--white);
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({ isDashboard }) =>
    isDashboard &&
    css`
      padding: 0;
      background: #141414;
    `}
`;

const PageDefault: React.FC<Props> = ({ children, isDashboard }) => {
  return (
    <>
      <Menu />
      <Main isDashboard={isDashboard}>{children}</Main>
      <Footer />
    </>
  );
};

export default PageDefault;
