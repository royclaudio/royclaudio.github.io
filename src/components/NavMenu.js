import React, { Component } from "react";
import { InfoButton } from "./InfoButton";
import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  render() {
    return (
      <header className="primary">
        <div className="primary-header">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="primary-header__title"
            href="https://www.linkedin.com/in/royclaudio/"
          >
            Roy Claudio
          </a>
        </div>
        <nav className="navMenu">
          <a target="_blank" href="/">
            Home
          </a>
          <a target="_blank" href="/web-scrape">
            Web Scraping
          </a>
          <a target="_blank" href="/counter">
            Past Projects
          </a>

          <div className="links">
            <a>Resources</a>
            <span className="popuptext">
              <a
                target="_blank"
                href="https://www.cabq.gov/family/services/homeless-services"
              >
                NM |&nbsp; Resources{" "}
              </a>
              <a target="_blank" href="https://www.rentassistance.us">
                {" "}
                US |&nbsp; Rent Assistance
              </a>
              <a target="_blank" href="https://www.publichousing.com">
                {" "}
                US |&nbsp;Public Housing
              </a>
            </span>
          </div>
        </nav>
      </header>
    );
  }
}
