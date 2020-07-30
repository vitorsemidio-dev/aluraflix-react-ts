import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../../services/api';

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

  useEffect(() => {
    api.get<Category[]>('/categorias').then((response) => {
      const { data } = response;
      console.log(response.data);
      setCategories((oldValues) => [...oldValues, ...data]);
    });
  }, []);

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
        <FormField
          fieldId="category"
          type="input"
          name="name"
          value={category.name}
          label="Nome da Categoria"
          handleChange={handleChange}
        />
        <FormField
          fieldId="description"
          type="textarea"
          name="description"
          value={category.description}
          label="Descrição"
          handleChange={handleChange}
        />
        <FormField
          fieldId="color"
          type="color"
          name="color"
          value={category.color}
          label="Cor"
          handleChange={handleChange}
        />

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
    </PageDefault>
  );
};

export default Categoria;
