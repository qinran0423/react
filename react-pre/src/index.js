import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import style from './index.module.css';
import App from './App';
// import logo from './logo192.png';
// import * as serviceWorker from './serviceWorker';

// const name = "React"
// const obj = {
//   firstName: 'Randy',
//   lastName: 'Qin'
// }
// function formatName(name) {
//   return name.firstName + "" + name.lastName
// }

// const greet = <div>good</div>
// const show = true

// const a = [0,1,2]

// const jsx = (
//   <div className={style.app}>
//     <div>hello, {name}</div>
//     <div>{formatName(obj)}</div>
//     {greet}
//     {show ? greet : '登录'}
//     {show && greet}
//     <ul>
//       {a.map(item => <li key={item}>{item}</li>)}
//     </ul>
//     <img src={logo} className={style.logo} />
//   </div>
// )

import store from './store/index'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
