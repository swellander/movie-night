import axios from 'axios';

const initialState = {
  list: [],
  draft: ''
}

const LOAD_MOVIES = 'LOAD_MOVIES';
const WRITE_MOVIE = 'WRITE_MOVIE';
const ADD_MOVIE = 'ADD_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';

//action creators
const loadMovies = movies => ({ type: LOAD_MOVIES, movies });
const addMovie = movie => ({ type: ADD_MOVIE, movie });
const deleteMovie = id => ({ type: DELETE_MOVIE, id })
export const writeMovie = draft => ({ type: WRITE_MOVIE, draft });


//thunk creators
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

export const _addMovie = movieTitle => dispatch => {
  //movie title is used to make api call to movie database from backend
  axios.post('/api/movies', { movieTitle })
    .then(response => response.data)
    .then(movie => {
      //TODO: Add socket event emition
      const action = addMovie(movie);
      console.log(movie);
      dispatch(action);
    })
    .catch(err => {
      throw err;
    })
}

export const _deleteMovie = id => dispatch => {
  axios.delete(`/api/movies/${id}`)
    .then(() => {
      const action = deleteMovie(id);
      dispatch(action);
    })
    .catch(err => {
      throw err;
    });
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES:
      return { ...state, list: action.movies }
    case WRITE_MOVIE:
      return { ...state, draft: action.draft }
    case ADD_MOVIE:
      return { ...state, list: [...state.list, action.movie] }
    case DELETE_MOVIE:
      return { ...state, list: state.list.filter(movie => movie.id !== action.id) }
    default:
      return state;
  }
}

export default movieReducer;