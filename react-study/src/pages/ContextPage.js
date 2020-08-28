import React, { Component } from 'react'
import {ThemeProvider, UserProvider} from '../Context'
import ContextTypePage from './ContextTypePage'
import ConsumerPage from './ConsumerPage'
import UseContextPage from './UseContextPage'
export default class ContextPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: {
        themeColor: 'red'
      },
      user: {
        name: 'randy'
      }
    }
  }
  changeColor = () => {
    const {themeColor} = this.state.theme;
    this.setState({
      theme: {themeColor: themeColor === "red" ? "green" : "red"}
    }) 
  }
  render() {
    const {theme, user} = this.state;
    console.log(theme)
    return (
      <div>
        <h3>ContextPage</h3>
        <button onClick={this.changeColor}>change color</button>
        <ThemeProvider value={theme}>
          <ContextTypePage/>
          <ConsumerPage/>
          <UserProvider value={user}>
           <UseContextPage/>
          </UserProvider>
          
        </ThemeProvider>

      </div>
    )
  }
}
