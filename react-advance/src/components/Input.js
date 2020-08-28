import React, {Component} from "react";

class CustomizeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {value = "", ...otherProps} = this.props;
    return (
      <div style={{padding: 10}}>
        <Input style={{outline: "none"}} value={value} {...otherProps} />
      </div>
    );
  }
}


function Input(props) {
  return (
    <input {...props} />
  )
}


export default CustomizeInput;