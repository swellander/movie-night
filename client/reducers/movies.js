import axios from 'axios';

const initialState = {
  list: [],
  draft: ''
}

const LOAD_MOVIES = 'LOAD_MOVIES';
const WRITE_MOVIE = 'WRITE_MOVIE';

const loadMovies = movies => ({ type: LOAD_MOVIES, movies });
export const writeMovie = draft => ({ type: WRITE_MOVIE, draft });

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
      return { ...state, list: action.movies }
    case WRITE_MOVIE:
      return { ...state, draft: action.draft }
    default:
      return state;
  }
}

export default movieReducer;