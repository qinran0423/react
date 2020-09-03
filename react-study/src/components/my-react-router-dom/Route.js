import React, { Component, Children } from "react";
import { RouterContext } from "./Context";
import matchPath from "./matchPath";

export default class Route extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { path, component, children, render } = this.props;
          const match = this.props.computedMatch
            ? this.props.computedMatch
            : path
            ? matchPath(context.location.pathname, this.props)
            : context.match;

          const props = {
            ...context,
            match,
          };
          return <RouterContext.Provider value={props}>
            {
              match
              ? children
                ? typeof children === "function"
                  ? children(props)
                  : children
                : component
                ? React.createElement(component, props)
                : render
                ? render(props)
                : null
              : typeof children === "function"
              ? children(props)
              : null
            }
          </RouterContext.Provider>
        }}
      </RouterContext.Consumer>
    );
  }
}
