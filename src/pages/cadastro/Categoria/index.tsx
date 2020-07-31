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

interface IHookForm<T> {
  // handleSubmit: (eventSubmit: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  // setCategories: React.Dispatch<React.SetStateAction<T[]>>;
  clearForm: () => void;
  values: T;
}

function useForm<T>(initialValues: T): IHookForm<T> {
  const [values, setValues] = useState<T>(initialValues);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const key = event.target.getAttribute('name') || '';
    const { value } = event.target;
    setValues({
      ...values,
      [key]: value,
    });
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    // handleSubmit,
    handleChange,
    values,
    clearForm,
  };
}

const Categoria: React.FC = () => {
  const initialsValues = {
    name: '',
    color: '#000000',
    description: '',
  };
  const { values: category, handleChange, clearForm } = useForm<Category>(
    initialsValues,
  );

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get<Category[]>('/categorias').then((response) => {
      const { data } = response;
      console.log(response.data);
      setCategories((oldValues) => [...oldValues, ...data]);
    });
  }, [setCategories]);

  function handleSubmit(eventSubmit: React.FormEvent<HTMLFormElement>) {
    eventSubmit.preventDefault();
    setCategories([...categories, category]);
    clearForm();
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
