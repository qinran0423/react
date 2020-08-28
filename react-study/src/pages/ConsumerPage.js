import React, { Component } from 'react'
import { ThemeConsumer } from '../Context'

export default class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <h3>ConsumerPage</h3>
        <ThemeConsumer>
          { context => <div className={context.themeColor}>omg</div> }
        </ThemeConsumer>
      </div>
    )
  }
}
