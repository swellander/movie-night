import React, { Component } from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import { _loadMovies } from '../reducers/movies';
import Grid from '@material-ui/core/Grid';

class MovieList extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const styles = {
      marginTop: '10vh',
      flexGrow: 1
    }
    return (
      <div style={styles}>
        <Grid container spacing={24}>
          {this.props.movies.map(movie => {
            return (
              <Grid item justify="space-between" lg={3} md={6} xs={12}>
                <Movie movie={movie} />
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = ({ movies }) => {
  return {
    movies: movies.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    init: () => dispatch(_loadMovies())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

