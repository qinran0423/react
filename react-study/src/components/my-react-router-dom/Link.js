import React, { Component } from 'react'
import { RouterContext } from './Context'


export default class Link extends Component {
  static contextType = RouterContext
  handler = (e) => {
    e.preventDefault()
    this.context.history.push(this.props.to)
  }

  render() {
    const { children, to, ...resetProps } = this.props
    return (
      <a href={to} {...resetProps} onClick={this.handler} >{children}</a>
    )
  }
}
