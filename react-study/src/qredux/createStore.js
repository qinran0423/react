
// createStore(counterReducer, applyMiddleware(thunk, logger))
export default function createStore(reducer, enhancer) {
  
  if(enhancer) {
    console.log(enhancer)
    // 增强createStore的dispatch
    return enhancer(createStore)(reducer)
  }

  let currentState;
  let currentListeners = [];



  function getState() {
    return currentState;
  }

  function dispatch(action) {
    // 修改当前state
    currentState = reducer(currentState, action);
    currentListeners.forEach(listener => listener())
    return action;
  }

  function subscribe(listener) {
    currentListeners.push(listener)

    return () => {
      currentListeners = currentListeners.filter( key => key !== listener)
    }
  }

  dispatch({type: 'randy'})
  return {
    getState,
    dispatch,
    subscribe
  }
}