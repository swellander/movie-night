import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import socket from './socket';

function logging(store) {
  return function (next) {
    return function (action) {
      console.group();
      console.log('state:', store.getState());
      console.log('action:', action);
      console.groupEnd();
      next(action);
      console.log(store.getState());
    }
  }
}

const initialState = {
  messages: [],
  draft: '',
  movies: []
};

//Action types
const LOAD_MESSAGES = 'LOAD_MESSAGES';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
const LOAD_MOVIES = 'LOAD_MOVIES';

//Action creators 
const loadMessages = messages => ({ type: LOAD_MESSAGES, messages });
const loadMovies = movies => ({ type: LOAD_MOVIES, movies });
export const receiveMessage = message => ({ type: RECEIVE_MESSAGE, message });
export const writeMessage = content => ({ type: WRITE_MESSAGE, content });

//thunk creators. they all will be prefixed with and _underscore
export const _loadMessages = () => dispatch => {
  axios.get('/api/messages')
    .then(response => response.data)
    .then(messages => {
      const action = loadMessages(messages);
      dispatch(action);
    })
    .catch(err => {
      console.log('whoops', err);
    });
}
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
export const _sendMessage = message => dispatch => {
  axios.post('/api/messages', message)
    .then(response => response.data)
    .then(newMessage => {
      const action = receiveMessage(newMessage);
      dispatch(action);
      socket.emit('new-message', newMessage);
    })
    .catch(err => {
      console.log('whoops', err);
    });
}

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return { ...state, messages: action.messages }
    case WRITE_MESSAGE:
      return { ...state, draft: action.content }
    case RECEIVE_MESSAGE:
      return { ...state, messages: [...state.messages, action.message], draft: '' }
    case LOAD_MOVIES:
      return { ...state, movies: action.movies }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store;