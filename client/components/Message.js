import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    margin: theme.spacing.unit,
    display: 'inline-block'
  },
});

const Message = ({ message, classes }) => {
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography>
          {message.content}
        </Typography>
      </Paper>
    </div>
  )
}

export default withStyles(styles)(Message);