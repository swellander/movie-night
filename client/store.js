import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movies from './reducers/movies';
import messages from './reducers/messages';


const reducer = combineReducers({
  messages,
  movies
})

const store = createStore(reducer, applyMiddleware(thunk))
export default store;