import React, { Component } from 'react'
import { RouterContext } from './Context'
import LifeCycle from './LifeCycle'

export default class Redirect extends Component {
  render() {
    return <RouterContext.Consumer>
      {context => {
        const {to,push = false} = this.props

        return (
          <LifeCycle onMount={
            () => {
              push ? context.history.push(to) : context.history.replace(to)
            }
          } />
        )
      }}
    </RouterContext.Consumer>
  }
}
