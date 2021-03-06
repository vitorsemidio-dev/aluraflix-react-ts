import React, { useEffect, useState } from 'react';

// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
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
    <PageDefault isDashboard>
      {dadosIniciais.map((categoryItem, index) => (
        <React.Fragment key={`${categoryItem.id}_${categoryItem.cor}`}>
          {index === 0 ? (
            <>
              <BannerMain
                textStrokeColor={categoryItem.cor}
                videoTitle={categoryItem.videos[0].titulo}
                url={categoryItem.videos[0].url}
                videoDescription={categoryItem.link_extra?.text || ''}
              />

              <Carousel ignoreFirstVideo category={categoryItem} />
            </>
          ) : (
            <>
              <Carousel category={categoryItem} />
            </>
          )}
        </React.Fragment>
      ))}
    </PageDefault>
  );
};

export default Dashboard;
