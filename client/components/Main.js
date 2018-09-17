import React, { Fragment } from 'react';
import Nav from './Nav';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MovieList from './MovieList';
import Chat from './Chat';

export default () => {
  return (
    <Fragment>
      <Nav />
      <CssBaseline />
      <Switch>
        <Route path="/" component={MovieList} />
        <Route chat="/chat" component={Chat} />
      </Switch>
    </Fragment>
  )
};