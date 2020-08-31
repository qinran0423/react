import createStore from "./createStore";
import store from "../store";

export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer)
    console.log('store', store); //sy-log
    let dispatch = store.dispatch
    console.log('dispatch', dispatch); //sy-log

    const midApi = {getState: store.getState, dispatch: (action) => dispatch(action)}
    console.log('midApi', midApi); //sy-log
    //todo 加强dispatch
    const middlewareChain = middlewares.map(middleware => middleware(midApi))
    console.log('middlewareChain', middlewareChain); //sy-log
    dispatch = compose(...middlewareChain)(store.dispatch)

    //返回store,同时把dispatch加强
    return {
      ...store,
      //返回加强版的dispatch
      dispatch
    }
  }
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}