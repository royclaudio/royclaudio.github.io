import React, { Component } from "react";
import { NavMenu } from "./NavMenu";
import "./Layout.css";
import { Home } from "./Home.js";
import { Counter } from "./Counter.js";
import { WebScrape } from "./WebScrape.js";
import { InfoButton } from "./InfoButton";
import { Game } from "./Game.js";
export class Layout extends Component {
  static displayName = Layout.name;
  constructor(props) {
    super(props);
    this.state = {
      content: <Home />,
    };
  }
  contentSet(pick) {
    if (pick === 1) {
      this.setState({ content: <Home /> });
    } else if (pick === 2) {
      this.setState({ content: <WebScrape /> });
    } else if (pick === 3) {
      this.setState({ content: <Counter /> });
    } else if (pick === 4) {
      this.setState({ content: <Game /> });
    }
  }
  render() {
    return (
      <div className="main-layout">
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
            <a onClick={() => this.contentSet(1)}>Home</a>
            <a onClick={() => this.contentSet(3)}>Past Projects</a>
            <a onClick={() => this.contentSet(4)}>Shooter Game</a>

            <div className="links">
              <a>Resource Links</a>
              <span className="popuptext">
                <a
                  target="_blank"
                  href="https://www.cabq.gov/family/services/homeless-services"
                >
                  NM |&nbsp; Resources
                </a>
                <a target="_blank" href="https://www.rentassistance.us">
                  US |&nbsp; Rent Assistance
                </a>
                <a target="_blank" href="https://www.publichousing.com">
                  US |&nbsp;Public Housing
                </a>
              </span>
            </div>
            <div className="dot"></div>
          </nav>
        </header>
        <div className="style-body" tag="main">
          {this.state.content}
        </div>
        <footer className="footer-style">
          © 2023 Built With React.js | By Roy Claudio
          <span>
            <InfoButton
              info=" 
          I moved to Albuqurque, New Mexico at the age of 2, and I was born in Ciudad Juárez.
          I graduated with a Computer Science degree from UNM.
          Everyday I strive to set a good example for my family."
            />
          </span>
        </footer>
      </div>
    );
  }
}
