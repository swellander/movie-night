import React from 'react';
import { _deleteMovie } from '../reducers/movies';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

function Movie(props) {
  const { remove, movie, classes } = props;
  const { Title, Poster, Plot, id } = movie;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          height="140"
          image={Poster}
          title={Poster}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {Title}
          </Typography>
          <Typography component="p">
            {Plot}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Button onClick={() => remove(id)} size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(_deleteMovie(id))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(Movie));