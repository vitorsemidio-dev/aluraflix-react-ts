import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

const Categoria: React.FC = () => {
  return (
    <PageDefault>
      <div>
        <h1>Cadastro Categoria</h1>

        <Link to="/">Ir para home</Link>
      </div>
    </PageDefault>
  );
};

export default Categoria;
