import React, { Component } from 'react'
import store from '../store/index'

export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log('state改变了')
      this.forceUpdate()
    })
  }
  render() {
    return (
      <div>
        <h3>{store.getState()}</h3>
        <button onClick={() => store.dispatch({type: 'ADD'})}>button</button>
      </div>
    )
  }
}
