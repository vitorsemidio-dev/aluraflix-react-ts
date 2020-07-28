import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CadastroCategoria from '../pages/cadastro/Categoria';
import CadastroVideo from '../pages/cadastro/Video';

import Dashboard from '../pages/Dashboard';

// TODO Pagina404
const PageNotFound: React.FC = () => (
  <div>TODO Página 404 com visual irado</div>
);

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
