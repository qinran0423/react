import React from "react";
import "./App.css";
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

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   useRouteMatch,
//   useHistory,
//   useLocation,
//   useParams,
//   withRouter,
//   Prompt
// } from "./components/my-react-router-dom/index";
import HomePage from "./pages/routepages/HomePage";
import UserPage from "./pages/routepages/UserPage";
import LoginPage from "./pages/routepages/LoginPage";
import _404Page from "./pages/routepages/_404Page";

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
        <Link to="/product/123">商品</Link>

        <Switch>
          <Route
            exact
            path="/"
            component={HomePage}
            render={render}
          />
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/product/:id" component={Product} />
          <Route component={_404Page} />
        </Switch>
      </Router>
    </div>
  );
}


@withRouter
class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {confirm: true};
  }
  render() {
    const {params, url} = this.props.match;
    const {id} = params;
    console.log("props", this.props, url); //sy-log
    return (
      <div>
        <h3>Product</h3>
        <Prompt
          when={this.state.confirm}
          message="Are you sure you want to leave?"
          // message={location => {
          //   return "Are you sure you want to leave-fun";
          // }}
        />
      </div>
    );
  }
}

function Detail(props) {
  return (
    <div>
      <h1>商品详情页</h1>
    </div>
  );
}

function children(props) {
  console.log("children props", props); //sy-log
  return <div>children</div>;
}

function render(props) {
  console.log("render props", props); //sy-log
  return <div>render</div>;
}

export default App;
