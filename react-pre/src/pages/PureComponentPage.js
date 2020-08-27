import React, {  PureComponent } from 'react'
export default class PureComponentPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  setCount = () => {
    this.setState({
      count: 100
    })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.count !== this.state.count
  // }
  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div>
        <h3>PureComponentPage</h3>
        <button onClick={this.setCount}>{count}</button>
      </div>
    )
  }
}
