import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'

export default class Layout extends Component {
  componentDidMount() {
    const {title} = this.props
    document.title = title
  }
  render() {
    const {children, showTop, showBottom} = this.props;
    console.log(children)
    return (
      <div>
        {showTop && <TopBar/>}
        {children.context}
        {children.txt}
        <button onClick={children.onClick}>button</button>
        {showBottom && <BottomBar/>}
      </div>
    )
  }
}
