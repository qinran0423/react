import React, { Component } from 'react'

const foo = Cmp => props => {
  return (
    <div className="border">
      <Cmp {...props}/>
    </div>
  )
}


function Child(props) {
  return <div>child - {props.name}</div>
}

const Foo = foo(foo(Child))

export default class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Foo name="baby"/>
        <ClassChild name="Foo2" />
      </div>
    )
  }
}
@foo
@foo
class ClassChild  extends Component {
  render() {
    return <div>child- {this.props.name}</div>;
  }
}
 
