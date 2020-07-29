import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

const Categoria: React.FC = () => {
  const [novaCategoria, setNovaCategoria] = useState('');
  const [listaCategorias, setListaCategorias] = useState<string[]>([]);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newCategoria = event.target.value;
    setNovaCategoria(newCategoria);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setListaCategorias([...listaCategorias, novaCategoria]);
    setNovaCategoria('');
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="categoria">
          Nome da Categoria:
          <input
            id="categoria"
            type="text"
            value={novaCategoria}
            onChange={handleInput}
          />
        </label>

        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {listaCategorias.map((categoria) => (
          <li key={categoria}>{categoria}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
};

export default Categoria;
