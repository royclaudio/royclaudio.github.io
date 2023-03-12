import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import "./Layout.css";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="main-layout">
        <NavMenu />
        <div className="style-body" tag="main">
          {this.props.children}
        </div>
        <footer className="footer-style">
          © 2023 Built With React.js | By Roy
        </footer>
      </div>
    );
  }
}
