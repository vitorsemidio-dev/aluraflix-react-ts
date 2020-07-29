import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

const Categoria: React.FC = () => {
  const [novaCategoria, setNovaCategoria] = useState('');
  const [cor, setCor] = useState('#000000');
  const [descricao, setDescricao] = useState('');
  const [listaCategorias, setListaCategorias] = useState<string[]>([]);

  function handleInputCategoriaChange(
    eventCategoria: React.ChangeEvent<HTMLInputElement>,
  ) {
    const newCategoria = eventCategoria.target.value;
    setNovaCategoria(newCategoria);
  }

  function handleSelectCor(eventCor: React.ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = eventCor;

    setCor(value);
  }

  function handleTextareaDescricaoChange(
    eventDescricao: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    const {
      target: { value },
    } = eventDescricao;

    setDescricao(value);
  }

  function handleSubmit(eventSubmit: React.FormEvent<HTMLFormElement>) {
    eventSubmit.preventDefault();
    setListaCategorias([...listaCategorias, novaCategoria]);
    const categoria = {
      novaCategoria,
      cor,
      descricao,
    };
    console.log(categoria);
    setNovaCategoria('');
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="categoria">
            Nome da Categoria:
            <input
              id="categoria"
              type="text"
              value={novaCategoria}
              onChange={handleInputCategoriaChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="descricao">
            Descrição:
            <textarea
              id="descricao"
              name="descricao"
              value={descricao}
              onChange={handleTextareaDescricaoChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="cor">
            Cor:
            <input
              type="color"
              id="cor"
              name="cor"
              value={cor}
              onChange={handleSelectCor}
            />
          </label>
        </div>

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
