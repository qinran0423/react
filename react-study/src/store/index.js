import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
// import combineReducers from '../qredux/combineReducers'

// import {createStore, applyMiddleware} from '../qredux/'

const counterReducer = (state = 0, {type, preloay = 1}) => {
  switch (type) {
    case 'ADD':
      return state + preloay  
    case 'MINUS':
      return state - preloay   
    default:
      return state
  }
}

const store = createStore(combineReducers({count: counterReducer}), applyMiddleware(thunk, logger));


export default store;