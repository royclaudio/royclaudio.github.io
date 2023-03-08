import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import "./Layout.css";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="main-layout">
        <NavMenu />
        <body className="style-body" tag="main">
          {this.props.children}
        </body>
        <footer className="footer-style">
          © 2023 Built With React.js & .NET | By Roy
        </footer>
      </div>
    );
  }
}
