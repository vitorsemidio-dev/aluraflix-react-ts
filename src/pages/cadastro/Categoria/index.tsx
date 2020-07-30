import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

interface Category {
  name: string;
  color: string;
  description: string;
}

const Categoria: React.FC = () => {
  const [category, setCategory] = useState<Category>({
    name: '',
    color: '#000000',
    description: '',
  });

  const [categories, setCategories] = useState<Category[]>([]);

  function handleSubmit(eventSubmit: React.FormEvent<HTMLFormElement>) {
    eventSubmit.preventDefault();
    setCategories([...categories, category]);
    setCategory({
      name: '',
      color: '#000000',
      description: '',
    });
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const key = event.target.getAttribute('name') || '';
    const { value } = event.target;
    setCategory({
      ...category,
      [key]: value,
    });
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {categories.map((categoryItem, index) => (
          <li key={String(index)}>
            <h3 style={{ color: categoryItem.color }}>
              {`${index + 1} - ${categoryItem.name}`}
            </h3>
            <p>Descrição: {categoryItem.description}</p>
          </li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
      <FormField
        fieldId="category"
        type="input"
        name="category"
        value={category.name}
        label="Nome da Categoria"
        handleChange={handleChange}
      />
      <FormField
        fieldId="description"
        type="textarea"
        name="category"
        value={category.name}
        label="Descrição"
        handleChange={handleChange}
      />
      <FormField
        fieldId="color"
        type="color"
        name="category"
        value={category.color}
        label="Cor"
        handleChange={handleChange}
      />
    </PageDefault>
  );
};

export default Categoria;
