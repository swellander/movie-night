import socket from '../socket';
import axios from 'axios';

const initialState = {
  list: [],
  draft: ''
};

//Action types
const LOAD_MESSAGES = 'LOAD_MESSAGES';
const WRITE_MESSAGE = 'WRITE_MESSAGE';

//TODO: change "receive" to "add" so as to be consistent with movies reducer
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

//Action creators 
const loadMessages = messages => ({ type: LOAD_MESSAGES, messages });
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

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      return { ...state, list: action.messages }
    case WRITE_MESSAGE:
      return { ...state, draft: action.content }
    case RECEIVE_MESSAGE:
      return { ...state, list: [...state.list, action.message], draft: '' }
    default:
      return state;
  }
}

export default messageReducer;