import React, { Fragment } from 'react';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MovieList from './MovieList';
import Chat from './Chat';
import Test from './Test';

export default () => {
  return (
    <div>
      <Nav />
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/chat" component={Chat} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  )
};