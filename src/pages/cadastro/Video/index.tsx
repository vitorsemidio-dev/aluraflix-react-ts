import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

const Video: React.FC = () => {
  return (
    <PageDefault>
      <div>
        <h1>Cadastro Video</h1>

        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
      </div>
    </PageDefault>
  );
};

export default Video;
