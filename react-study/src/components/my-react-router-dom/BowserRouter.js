import React, { Component } from "react";
import { createBrowserHistory } from "history";
import Router from "./Router";

export default class BowserRouter extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
    console.log(this.history);
  }

  render() {
    return <Router history={this.history}>{this.props.children}</Router>;
  }
}
