import React, { useState, useEffect } from 'react';

import api from '../../../services/api';
import useForm from '../../../hooks/useForm';

import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import ButtonLink from '../../../components/Menu/ButtonLink';
import ButtonSubmit from '../../../components/ButtonSubmit';

interface Category {
  id?: number | string | undefined;
  titulo: string;
  cor: string;
  description: string;
}

const Categoria: React.FC = () => {
  const initialsValues = {
    titulo: '',
    cor: '#000000',
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

      <form style={{ marginBottom: 16 }} onSubmit={handleSubmit}>
        <FormField
          fieldId="category"
          type="input"
          name="name"
          value={category.titulo}
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
          value={category.cor}
          label="Cor"
          handleChange={handleChange}
        />

        <ButtonSubmit type="submit">Cadastrar</ButtonSubmit>
      </form>

      <ButtonLink to="/">Ir para home</ButtonLink>
    </PageDefault>
  );
};

export default Categoria;
