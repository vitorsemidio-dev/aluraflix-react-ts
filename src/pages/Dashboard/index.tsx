import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import api from '../../services/api';

interface Video {
  titulo: string;
  url: string;
}

interface LinkExtra {
  text: string;
  url: string;
}
interface Category {
  titulo: string;
  cor: string;
  link?: string;
  link_extra?: LinkExtra;
  videos: Video[];
}

const Dashboard: React.FC = () => {
  const [dadosIniciais, setDadosIniciais] = useState<Category[]>([]);
  useEffect(() => {
    api.get<Category[]>('/categorias?_embed=videos').then((response) => {
      console.log(response.data);
      setDadosIniciais(response.data);
    });
  }, [setDadosIniciais]);
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      {dadosIniciais.length > 0 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
          />

          <Carousel ignoreFirstVideo category={dadosIniciais[0]} />

          {/* <Carousel category={dadosIniciais[1]} />

        <Carousel category={dadosIniciais[2]} />

        <Carousel category={dadosIniciais[3]} />

        <Carousel category={dadosIniciais[4]} />

        <Carousel category={dadosIniciais[5]} /> */}
        </>
      )}

      <Footer />
    </div>
  );
};

export default Dashboard;
