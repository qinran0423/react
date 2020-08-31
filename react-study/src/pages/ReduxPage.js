import React, { Component } from 'react'
import store from '../store/index'

export default class ReduxPage extends Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  add = () => {
    store.dispatch({type: 'ADD'})
  }

  asyadd = () => {
    store.dispatch((dispatch, getState) => {
      console.log('aaa'); //sy-log
      setTimeout(() => {
        console.log('getState', getState()); //sy-log
        dispatch({type: "ADD"});
      }, 1000);
    });
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState().count}</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.asyadd}>asyadd</button>
      </div>
    )
  }
}
