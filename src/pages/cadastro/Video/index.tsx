import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import api from '../../../services/api';

interface Video {
  titulo: string;
  url: string;
  categoria?: string | number | undefined;
}

interface LinkExtra {
  text: string;
  url: string;
}
interface Category {
  id?: string;
  titulo: string;
  cor: string;
  link?: string;
  link_extra?: LinkExtra;
  videos: Video[];
}

const Video: React.FC = () => {
  const history = useHistory();

  const [categories, setCategories] = useState<Category[]>([]);
  const [categoriesTitle, setCategoriesTitle] = useState<string[]>([]);

  const { clearForm, values, handleChange } = useForm<Video>({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=aRVXYDYNv1Y',
    categoria: 'Front end',
  });

  useEffect(() => {
    api.get<Category[]>('/categorias').then((response) => {
      const { data } = response;
      console.log(data);
      const titles = data.map((categoryItem) => categoryItem.titulo);
      setCategories(data);
      setCategoriesTitle([...titles]);
      console.log(titles);
    });
  }, []);

  function handleSubmit(eventSubmit: React.FormEvent<HTMLFormElement>) {
    eventSubmit.preventDefault();

    const categorySelect = categories.find(
      (categoryItem) => categoryItem.titulo === values.categoria,
    );

    const categoriaId = categorySelect ? categorySelect.id : 1;

    api
      .post<Video>('/videos', {
        titulo: values.titulo,
        url: values.url,
        categoriaId,
      })
      .then(() => {
        history.push('/');
      });
  }
  return (
    <PageDefault>
      <h1>Cadastro Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          fieldId="video"
          label="Título do Vídeo"
          name="titulo"
          type="input"
          value={values.titulo}
          handleChange={handleChange}
        />

        <FormField
          fieldId="url"
          type="input"
          name="url"
          value={values.url}
          label="URL do Vídeo"
          handleChange={handleChange}
        />

        <FormField
          fieldId="categoria"
          type="input"
          name="categoria"
          value={values.categoria}
          label="Nome da Categoria"
          handleChange={handleChange}
          suggestions={categoriesTitle}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default Video;
