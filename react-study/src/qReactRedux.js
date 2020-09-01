import React from 'react'

const Context = React.createContext()

export function Provider({store, children}) {
  console.log('store', store, children, Context); //sy-log
  return <Context.Provider value={store}>{children}</Context.Provider>;
}


function bindActionCreator(creator, dispatch) {
  console.log(creator())

  // dispatch({type: 'ADD'})
  return (...args) => dispatch(creator(...args))
}


export function bindActionCreators(creators, dispatch) {
  let obj = {}

  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }

  console.log(obj)
  return obj
}