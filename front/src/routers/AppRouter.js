import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';

import { HomeRouter } from './HomeRouter';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => {

  return (
    <Router>
      <Switch>
        <PublicRoute path="/" component={HomeRouter} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
