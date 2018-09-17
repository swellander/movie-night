import React, { Fragment } from 'react';
import MessageList from './MessageList';
import Nav from './Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import NewMessageBar from './NewMessageBar';

export default () => {
  return (
    <Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Nav />
        </Grid>
      </Grid>
      <CssBaseline />
      <MessageList />
      <NewMessageBar />
    </Fragment>
  )
};