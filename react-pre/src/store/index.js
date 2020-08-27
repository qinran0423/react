import {createStore} from 'redux'

// 定义state初始化和修改规则
function counter(state = 0, action) {
  switch (action.type){
    case 'ADD': 
      return state + 1;
    case 'MINUS':
      return state - 1;
    default: 
      return state
  }
}

let store = createStore(counter)

export default store