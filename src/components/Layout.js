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
      content: <Counter />,
    };
  }
  contentSet(pick) {
    if (pick === 1) {
      this.setState({ content: <Counter /> });
    } else if (pick === 2) {
      this.setState({ content: <Home /> });
    } else if (pick === 3) {
      this.setState({ content: <WebScrape /> });
    } else if (pick === 4) {
      this.setState({ content: <Game /> });
    }
  }
  render() {
    return (
      <div className="main-layout">
        <header className="newMenu">
          <nav>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="primary-header__title"
              href="https://www.linkedin.com/in/royclaudio/"
            >
              Roy Claudio
            </a>
            <a onClick={() => this.contentSet(1)}>Portfolio</a>
            <a onClick={() => this.contentSet(2)}>Community Project</a>
            <div className="links">
              <a>Continuous Projects </a>
              <span className="popuptext">
                <a onClick={() => this.contentSet(4)}>Game</a>
                <a onClick={() => this.contentSet(3)}>Other</a>
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
