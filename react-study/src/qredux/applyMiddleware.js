import createStore from "./createStore";
import store from "../store";

export default function applyMiddleware(...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer)
    let dispatch = store.dispatch



    //返回store,同时把dispatch加强
    return {
      ...store,
      //返回加强版的dispatch
      dispatch
    }
  }
}