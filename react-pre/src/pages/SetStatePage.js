import React, { Component } from 'react'

export default class SetStatePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    // this.changeValue(1)
  }
  changeValue = (v) => {
    // setState在合成事件和生命周期中是异步的，这里说的异步其实是批量更新，达到了优化性能的目的
    // this.setState({
    //   counter: this.state.counter + v
    // }, () => {
    //   // callback就是在state更新完之后执行
    //   console.log(this.state.counter)
    // })
    this.setState((state) => {
      return {
        counter: state.counter + v
      }
    })

    
  }
  setCounter = () => {
    // setState在setTimeout和原生事件中是同步的
    // setTimeout(() => {
      this.changeValue(1)
      this.changeValue(2)
    // }, 0)
  }
  render() {
    return (
      <div>
        <h3>setstatepage</h3>
        <button onClick={this.setCounter}>{this.state.counter}</button>
      </div>
    )
  }
}
