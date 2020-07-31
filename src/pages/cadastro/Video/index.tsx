import React from 'react';
import { Link } from 'react-router-dom';

import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';

interface Video {
  titulo: string;
}

const Video: React.FC = () => {
  const { clearForm, values, handleChange } = useForm<Video>({
    titulo: '',
  });
  return (
    <PageDefault>
      <h1>Cadastro Video</h1>

      <form>
        <FormField
          label="Título do Vídeo"
          name="titulo"
          type="input"
          value={values.titulo}
          onChange={handleChange}
        />
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
};

export default Video;
