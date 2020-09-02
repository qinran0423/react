import React from 'react'

const Context = React.createContext()

export const connect = (mapStateToProps = state => state, mapDispatchToProps) => WrappedComponent => props => {
  const store = React.useContext(Context);
  const { dispatch, getState } = store;
  const stateProps = mapStateToProps(getState())
  let dispatchProps = {
    dispatch
  } 


  if(typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
  } else if (typeof mapDispatchToProps === 'function') {
    dispatchProps  = mapDispatchToProps(dispatch)
  }


  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);

  React.useLayoutEffect(() => {
    const unsubscribe = store.subscribe(() => {
      // 执行组件更新 forceUpdate
      forceUpdate();
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [store])
  
  return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
}

export function Provider({store, children}) {
  return <Context.Provider value={store}>{children}</Context.Provider>
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

  return obj
}



export function useSelector(selector) {
  const store = useStore()
  const { getState } = store;
  const state = selector(getState())
  const [ignored, forceUpdate] = React.useReducer(x => x + 1, 0);

  React.useLayoutEffect(() => {
    const unsubscribe = store.subscribe(() => {
      // 执行组件更新 forceUpdate
      forceUpdate();
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [store])
  return state
}


function useStore () {
  return React.useContext(Context)
}

export function useDispatch () {
  const {dispatch} = useStore()

  return dispatch
}