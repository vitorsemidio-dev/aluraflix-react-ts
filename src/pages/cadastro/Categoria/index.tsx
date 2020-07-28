import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

const Categoria: React.FC = () => {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label htmlFor="categoria">
          Nome da Categoria:
          <input id="categoria" type="text" />
        </label>

        <button type="button">Cadastrar</button>
      </form>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default Categoria;
