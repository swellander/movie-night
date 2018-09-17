import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  messages: []
};

//Action types
const LOAD_MESSAGES = 'LOAD_MESSAGES';

//Action creators 
const loadMessages = messages => ({ type: LOAD_MESSAGES, messages });

//thunk creators
export const _loadMessages = () => dispatch => {
  axios.get('/api/messages')
    .then(response => response.data)
    .then(messages => {
      const action = loadMessages(messages);
      dispatch(action);
    })
    .catch(err => {
      console.log('whoops', err)
    })
}

//Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return { ...state, messages: action.messages }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store;