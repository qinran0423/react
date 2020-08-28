import React, {Component}from 'react'

export default function createForm(Cmp) {
  return class extends Component {
    render() {
      return <Cmp/>
    }
  }
}
