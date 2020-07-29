import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

interface Category {
  name: string;
  color: string;
  description: string;
}

const Categoria: React.FC = () => {
  const [category, setCategory] = useState<Category>({
    name: 'Inicio',
    color: '#ff44aa',
    description: 'Description Inicio',
  });
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

  function onChange(event: any) {
    const a = event.target.getAttribute('name');
    console.log(a);
    // const tmpCategory = {
    //   ...category,
    //   [chave]: value,
    // };
    // console.log(tmpCategory);
    // setCategory({
    //   ...category,
    //   [chave]: value,
    // });
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
              name="name"
              type="text"
              value={category.name}
              onChange={onChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Descrição:
            <textarea
              id="description"
              name="description"
              value={category.description}
              onChange={onChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="color">
            Cor:
            <input
              type="color"
              id="color"
              name="color"
              value={category.color}
              onChange={onChange}
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
