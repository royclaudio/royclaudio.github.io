import React, { Component } from "react";
import "./Counter.css";

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
  }
  arduino() {
    return (
      <div className="counter-primary">
        <div className="description">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://cec.aps.edu/cec-cse#robot"
            className="c-title"
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
        <div>
          <img className="show-img" src="robot.gif"></img>
          <img className="show-img" src="robot1.gif"></img>
        </div>
      </div>
    );
  }
  CollegeSource() {
    return (
      <div className="counter-primary">
        <div className="description">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://appcontest.unm.edu/"
            className="c-title"
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
      <div className="counter-primary">
        <div className="description">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/royclaudio"
            className="c-title"
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
      <div className="counter-primary">
        <div className="description">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/royclaudio"
            className="c-title"
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
      <div className="counter-primary">
        <div className="description">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/royclaudio"
            className="c-title"
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
  certs() {
    var cert = [];
    return (
      <div className="counter-primary">
        <div className="description">
          <p className="c-title"> Certifications</p>
          <li>
            <lu>
              React & Django Full Stack: web app, backend API, mobile apps
            </lu>
          </li>
          <li>
            <lu>The Advanced SQL Course</lu>
          </li>
          <li>
            <lu>MS SQL Server: Learn MS SQL Server from Scratch</lu>
          </li>
          <li>
            <lu>Advanced Database Design For a Relational DB w/ MySQL</lu>
          </li>
          <li>
            <lu>Advanced SQL: MySQL Data Analysis & Business Intelligence</lu>
          </li>
          <li>
            <lu>SQL Server : The complete course about BACKUP and RESTORE.</lu>
          </li>
          <li>
            <lu>Complete ASP.NET Core and Entity Framework Development</lu>
          </li>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1 className="c-title">Personal Projects</h1>
        <div className="c-grid-home">
          <this.arduino />
          <this.CollegeSource />
          <this.Homeless1 />
          <this.Homeless2 />
          <this.MobileApp />
          <this.certs />
        </div>
      </div>
    );
  }
}
