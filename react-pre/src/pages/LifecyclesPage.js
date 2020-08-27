import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class LifecyclesPage extends Component {
  static defaultProps = {
    msg : 'randy'
  }
  static propTypes = {
    msg: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    console.log('constructor')
  }
  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps')
    return state.count > 5 ? state.count = 0 : null
  }
  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount');
  // }
  componentDidMount(){
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true
  }
  
  // UNSAFE_componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('getSnapshotBeforeUpdate', prevState.count)
    return this.props.msg;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', snapshot);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>LifecyclesPage</h3>
        <button onClick={this.setCount}>button</button>
        <Child  count={this.state.count}/>
         {/* {this.state.count != 100 && <Child />}  */}
      </div>
    )
  }
}


class Child extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('componentWillUnmount', nextProps.count)
  // }
  render() { 
    return (
      <div>
        {this.props.count}
        children
      </div>
      );
  }
}
 