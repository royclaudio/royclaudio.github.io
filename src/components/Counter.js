import React, { Component } from "react";
import "./Counter.css";

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
  }
  arduino() {
    return (
      <div className="primary-grid">
        <div className="description">
          <a
            target="_blank"
            href="https://cec.aps.edu/cec-cse#robot"
            className="display-name"
          >
            Arduino Robot
          </a>
          <p>
            This project was developed, during my time at Career Enrichment
            Center (CEC) in Albuquerque, New Mexico. We started the project by
            learning the fundamentals of C, and understanding how C connects
            with the machine code within the Arduino board. With this knowledge,
            we soldered and connected all of the wires and transistors needed to
            build the final product.
          </p>
        </div>
        <div className="gen-grid">
          <img className="show-img" src="robot.gif"></img>
          <img className="show-img" src="robot1.gif"></img>
        </div>
      </div>
    );
  }
  CollegeSource() {
    return (
      <div className="primary-grid">
        <div className="description">
          <a
            target="_blank"
            href="https://appcontest.unm.edu/"
            className="display-name"
          >
            College Source
          </a>
          <p>
            This project was developed, in a month for the UNM App Contest. once
            logged in, it webscrapped the entire Transcript page, to create a
            more user friendly user experience, summing the cost, gpa, and
            showed the percentage to completion of your college career.
          </p>
        </div>
        <div className="gen-grid">
          <img className="show-img" src="unm.jpg"></img>
          <img className="show-img" src="csapp.gif"></img>
        </div>
      </div>
    );
  }
  Homeless1() {
    return (
      <div className="primary-grid">
        <div className="description">
          <a
            target="_blank"
            href="https://github.com/royclaudio"
            className="display-name"
          >
            Homeless Shelter <span>V1</span>
          </a>
          <p>
            This project was developed, The first version was developed with
            .net Framwork, and MSSQL database. This project was developed, in a
            month for the UNM App Contest. once logged in, it webscrapped the
            entire Transcript page, to create a more user friendly user
            experience, summing the cost, gpa, and showed the percentage to
            completion of your college career.
          </p>
        </div>
        <div className="gen-grid">
          <img className="show-img" src="homelessbanners.png"></img>
          <img className="show-img" src="homeless1.gif"></img>
        </div>
      </div>
    );
  }
  Homeless2() {
    return (
      <div className="primary-grid">
        <div className="description">
          <a
            target="_blank"
            href="https://github.com/royclaudio"
            className="display-name"
          >
            Homeless Shelter <span>V2</span>
          </a>
          <p>
            This project was developed, the second was developed in .NET Entiity
            framework Core, and MSSQL database. This project was developed, in a
            month for the UNM App Contest. once logged in, it webscrapped the
            entire Transcript page, to create a more user friendly user
            experience, summing the cost, gpa, and showed the percentage to
            completion of your college career.
          </p>
        </div>
        <div className="gen-grid">
          <img className="show-img" src="net.png"></img>
          <img className="show-img" src="homeless2.gif"></img>
        </div>
      </div>
    );
  }
  MobileApp() {
    return (
      <div className="primary-grid">
        <div className="description">
          <a
            target="_blank"
            href="https://github.com/royclaudio"
            className="display-name"
          >
            Film Finder
          </a>
          <p>
            This project is currently in developement. It provides a 10,000
            movies, for users to select, and from their selection, using content
            based filtering AI, it will continue to generate a list of movies
            that cator to your preferences, using over 15 features, it will find
            you something to watch.
          </p>
        </div>
        <div className="gen-grid">
          <img className="show-img" src="ml.jpg"></img>
          <img className="show-img" src="csapp.gif"></img>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="home-primary">
        <h1 className="counter-header">Personal Projects</h1>
        <this.arduino />
        <this.CollegeSource />
        <this.Homeless1 />
        <this.Homeless2 />
        <this.MobileApp />
      </div>
    );
  }
}
