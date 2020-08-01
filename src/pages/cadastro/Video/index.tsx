import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import api from '../../../services/api';

interface Video {
  titulo: string;
  url: string;
  categoria?: string;
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
      setCategoriesTitle([...titles]);
      console.log(titles);
    });
  }, []);

  function handleSubmit(eventSubmit: React.FormEvent<HTMLFormElement>) {
    eventSubmit.preventDefault();

    console.log(values);
    api
      .post('/videos', {
        titulo: values.titulo,
        url: values.url,
        categoriaId: 1,
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

        {/* <datalist id="datalist">
          {categories.map((categoryItem) => (
            <option key={categoryItem.id} value={categoryItem.id}>
              {categoryItem.titulo}
            </option>
          ))}
        </datalist> */}

        <button type="submit">Cadastrar</button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default Video;
