import axios from 'axios';

const initialState = {
  list: []
}

const LOAD_MOVIES = 'LOAD_MOVIES';

const loadMovies = movies => ({ type: LOAD_MOVIES, movies });

export const _loadMovies = () => dispatch => {
  axios.get('/api/movies')
    .then(response => response.data)
    .then(movies => {
      const action = loadMovies(movies);
      dispatch(action);
    })
    .catch(err => {
      console.log('whoops', err);
    });
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return { ...state, movies: action.movies }
    default:
      return state;
  }
}

export default movieReducer;