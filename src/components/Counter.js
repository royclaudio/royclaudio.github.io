import React, { Component } from "react";
import "./Counter.css";

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
  }

  card(title, desc, img, img1) {
    return (
      <div className="counter-primary">
        <div>
          <img className="show-img" src={img}></img>
          <img className="show-img" src={img1}></img>
        </div>
        <div className="description">
          <h1 className="c-title">{title}</h1>
          <p>{desc}</p>
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
    let projects = [
      [
        "Arduino Robot",
        "This project was developed, during my time at Career Enrichment Center (CEC) in Albuquerque, New Mexico. We started the project by learning the fundamentals of C, and understanding how C connects with the machine code within the Arduino board. With this knowledge, we soldered and connected all of the wires and transistors needed to build the final product.",
        "robot.gif",
        "robot1.gif",
      ],
      [
        "College Source",
        "This project was developed, in a month for the UNM App Contest. once logged in, it webscrapped the entire Transcript page, to create a more user friendly user experience, summing the cost, gpa, and showed the percentage to completion of your college career.",
        "unm.jpg",
        "csapp.gif",
      ],
      [
        "Homeless Shelter V1",
        "This project was developed, The first version was developed with .net Framwork, and MSSQL database. This project was developed, in a month for the UNM App Contest. once logged in, it webscrapped the entire Transcript page, to create a more user friendly user experience, summing the cost, gpa, and showed the percentage to completion of your college career.",
        "homelessbanners.png",
        "homeless1.gif",
      ],
      [
        "Homeless Shelter V2",
        "This project was developed, the second was developed in .NET Entiity framework Core, and MSSQL database. This project was developed, in a month for the UNM App Contest. once logged in, it webscrapped the entire Transcript page, to create a more user friendly user experience, summing the cost, gpa, and showed the percentage to completion of your college career.",
        "net.png",
        "homeless2.gif",
      ],
      [
        "Film Finder",
        "This project is currently in developement. It provides a 10,000 movies, for users to select, and from their selection, using content based filtering AI, it will continue to generate a list of movies that cator to your preferences, using over 15 features, it will find you something to watch.",
        "ml.jpg",
        "unm.jpg",
      ],
    ];

    return (
      <div>
        <h1 className="c-title">Personal Projects</h1>
        <div className="c-grid-home">
          {projects.map((item) =>
            this.card(item[0], item[1], item[2], item[3])
          )}
          <this.certs />
        </div>
      </div>
    );
  }
}
