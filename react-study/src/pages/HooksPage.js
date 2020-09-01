import React, { useReducer } from 'react'

const counterReducer = (state = 0, {type, preloay = 1}) => {
  switch (type) {
    case 'ADD':
      return state + preloay  
    case 'MINUS':
      return state - preloay   
    default:
      return state
  }
}


export default function HooksPage() {
 const [state, dispatch] = useReducer(counterReducer, 0)
  return (
    <div>
      <h3>HooksPage</h3>
      <p>{state}</p>
      <button onClick={() => dispatch({type: 'ADD', preloay: 100})}>add</button>
    </div>
  )
}

