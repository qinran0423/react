import React, { Component } from 'react'
import Input from '../components/Input'
import createForm from '../components/my-rc-form/index'

@createForm()
class MyRCForm extends Component {
  constructor(props) {
    super(props)
    // 弊端：需要自己定义state, input 需要自己定义onchange事件
    this.state = {
      username: '',
      password: ''
    }
  }
  submit = () => {
    console.log('submit', this.state)
  }
  render() {
    return (
      <div>
        <h3>MyRCForm</h3>
        {/* <Input placeholder="Username" value={username} onChange={ e => this.setState({username: e.target.value})}/>
        <Input placeholder="Password" value={password} onChange={ e => this.setState({password: e.target.value})}/> */}
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}

export default MyRCForm;
