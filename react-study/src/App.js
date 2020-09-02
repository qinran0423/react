import React from 'react';
import './App.css'
// import ContextPage from './pages/ContextPage';
// import HocPage from './pages/HocPage';
// import AntdFormPage from './pages/AntdFormPage';
// import MyRCFieldForm from './pages/MyRCFieldForm';
// import MyRCForm from './pages/MyRCForm';
// import ReduxPage from './pages/ReduxPage';
// import HooksPage from './pages/HooksPage';
// import ReactReduxPage from './pages/ReactReduxPage';
// import ReactReduxHookPage from './pages/ReactReduxHookPage';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useHistory,
  useLocation,
  useParams,
  withRouter,
  Prompt
} from "react-router-dom";
import HomePage from './pages/routepages/HomePage';
import UserPage from './pages/routepages/UserPage';
import LoginPage from './pages/routepages/LoginPage';
import _404Page from './pages/routepages/_404Page';

function App() {
  return (
    <div className="App">
      {/* <ContextPage/> */}
      {/* <HocPage/> */}
      {/* <AntdFormPage/
      {/* <MyRCFieldForm/> */}
      {/* <MyRCForm/> */}
      {/* <ReduxPage/> */}
      {/* <ReactReduxPage/> */}
      {/* <HooksPage/> */}
      {/* <ReactReduxHookPage/> */}


      <Router>
        <Link to="/">首页</Link>
        <Link to="/user">用户中心</Link>
        <Link to="/login">登录</Link>
        {/* <Link to="/product/123">商品</Link> */}

        <Switch>
          <Route exact path="/" children={children} component={HomePage} />
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          {/* <Route path="/product" component={} /> */}
          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  );
}


function children(props) {
  return <div>children</div>
}

export default App;
