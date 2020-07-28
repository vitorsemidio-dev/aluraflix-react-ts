import React from 'react';

import Footer from '../Footer';
import Menu from '../Menu';

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Menu />

      {children}

      <Footer />
    </>
  );
};

export default PageDefault;
