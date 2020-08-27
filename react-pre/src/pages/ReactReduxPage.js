import React, { Component } from 'react'
import { connect} from 'react-redux'

export default connect(
  // mapStateToProps 把state映射到props
  state => ({num: state}),
  // mapDispatchToProps 把state映射到props
  {
    add: () => ({type: 'ADD'})
  }
)(class ReactReduxPage extends Component {
  
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <h4>{this.props.num}</h4>
        <button onClick={this.props.add}>button</button>
      </div>
    )
  }
})
