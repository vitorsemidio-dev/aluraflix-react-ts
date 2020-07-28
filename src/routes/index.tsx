import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import CadastroVideo from '../pages/cadastro/Video';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/cadastro/video" component={CadastroVideo} />
  </Switch>
);

export default Routes;
