import React, { Component } from 'react'


export default class CustomizeInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // 接收传入的属性
    const {value ='' , ...inputprops} = this.props
    return (
      <div style={{padding: 10}}>
        <Input value={value} {...inputprops}/>
      </div>
    )
  }
}

// 输入框
function Input(props) {
  return (
    <input {...props}/>
  )
}
