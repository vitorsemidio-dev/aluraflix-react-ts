import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import PageDefault from '../../components/PageDefault';

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
  id?: string;
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
      <PageDefault isDashboard>
        {dadosIniciais.map((categoryItem, index) => (
          <React.Fragment key={`${categoryItem.id}`}>
            {index === 0 ? (
              <>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
                />

                <Carousel ignoreFirstVideo category={categoryItem} />
              </>
            ) : (
              <Carousel category={categoryItem} />
            )}
          </React.Fragment>
        ))}
      </PageDefault>
    </div>
  );
};

export default Dashboard;
