/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'
import createForm from "../components/my-rc-form/";
import Input from '../components/Input'

// 暗号：贝宁
const nameRules = {required: true, message: "请输入姓名！"};
const passworRules = {required: true, message: "请输入密码！"};

// 高阶组件
@createForm
class MyRCForm extends Component {
  constructor(props) {
    super(props)
  }
  submit = () => {
    // 获取getvalue ,和校验的方法
    const {getFieldsValue, validateFields} = this.props.form
    console.log('submit', getFieldsValue())
    // 校验
    validateFields((err, val) => {
      if (err) {
        console.log("err", err);
      } else {
        console.log("校验成功", val); 
      }
    });
  }
  componentDidMount() {
    // 设置初始值
    this.props.form.setFieldsValue({username: 'aaa'})
  }
  render() {
    console.log("props", this.props)
    // 获取存储数据方法
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <h3>MyRCForm</h3>
        {/* <Input placeholder="Username" value={username} onChange={ e => this.setState({username: e.target.value})}/>
        <Input placeholder="Password" value={password} onChange={ e => this.setState({password: e.target.value})}/> */}
        {
          getFieldDecorator('username', {rules: [nameRules]})(<Input placeholder="Username" />)
        }
        {
          getFieldDecorator('password', {rules: [passworRules]})(<Input placeholder="Password" />)
        }
        <button onClick={this.submit}>submit</button>
      </div>
    )
  }
}

export default MyRCForm;
