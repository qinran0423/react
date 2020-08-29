import React, { Component } from 'react'
import FieldContext from './FieldContext';

export default class Field extends Component {
  static contextType = FieldContext

  componentDidMount() {
    const {registerField} = this.context
    this.unregisterField = registerField(this)
  }
  

  componentWillUnmount() {
    if(this.unregisterField) {
      this.unregisterField()
    }
  }
  // store变化，执行这个刷新方法
  onStoreChange = () => {
    this.forceUpdate()
  }

  getControlled = () => {
    const {name} = this.props
    console.log(this.context)
    const {getFieldValue, setFieldsValue} = this.context
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newval = e.target.value;
        console.log(newval)
        setFieldsValue({[name]: newval })
      }
    }
  }
  render() {
    const {children} = this.props
    const returnChilNode = React.cloneElement(children, this.getControlled())
    return returnChilNode
  }
}
