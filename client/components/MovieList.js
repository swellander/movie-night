import React, { Component } from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import { _loadMovies } from '../reducers/movies';

class MovieList extends Component {
  componentDidMount() {
    this.props.init();
  }

  render() {
    const styles = {
      marginTop: '10vh'
    }
    return (
      <div style={styles}>
        {this.props.movies.map(movie => {
          return <Movie movie={movie} />
        })}
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

