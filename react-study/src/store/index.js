import {createStore} from 'redux';

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

const store = createStore(counterReducer);

export default store;