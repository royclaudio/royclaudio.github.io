import React, { Component } from "react";
import "./Home.css";
import InfoContainer from "./InfoContainer";
import { SelectService } from "./SelectService";
import { InfoButton } from "./InfoButton";
import csv from "./Shelterinfo.csv";
import Papa from "papaparse";

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.state = {
      items: null,
      loading: true,
      selections: null,
      value: null,
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCheck = (e) => {
    console.log("something " + e);
  };
  checked(event) {
    console.log(event);
  }
  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }
  componentDidMount() {
    const unique = [];
    Papa.parse(csv, {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: (results) => {
        results.data.map((item) => {
          if (unique.indexOf(item.Type) === -1) {
            unique.push(item.Type);
          }
        });
        unique.pop();
        this.setState({
          items: results.data,
          loading: false,
          selections: unique,
        });
      },
    });
    {
    }
  }

  static renderitems(items) {
    return (
      <div className="grid-home">
        {items.map((item, i) => (
          <div className="grid-element" key={i}>
            <InfoContainer
              title={item.Name}
              address={item.Address}
              info={item.Info}
              type={item.Type}
              typeofhousing={item.TypeofHousing}
            />
          </div>
        ))}
      </div>
    );
  }
  static renderservice(items) {
    return (
      <div>
        {items.map((item, i) => (
          <div key={i}>
            <label>
              <input
                type="checkbox"
                name={item}
                checked={this.checked}
                onChange={this.handleCheck}
              />
              {item}
            </label>
          </div>
        ))}
      </div>
    );
  }
  static SelectServicecomp(items) {
    let contents = Home.renderservice(items);
    return (
      <div className="selectservice-info">
        <h2 className="">
          Select Service
          <InfoButton info=" Services available. There are many, click a button to learn more" />
        </h2>
        <div className="selector">{contents}</div>
        <div className="grid-container">
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Hide All" className="ssbtn" />
          </form>
          <form onSubmit={this.handleSubmit}>
            <input type="submit" value="Show All" className="ssbtn" />
          </form>
        </div>
      </div>
    );
  }
  render() {
    let contents = this.state.loading ? (
      <img className="show-img1" src="whale.gif"></img>
    ) : (
      Home.renderitems(this.state.items)
    );
    let selectservice = this.state.loading ? (
      <img className="show-img1" src="whale.gif"></img>
    ) : (
      Home.SelectServicecomp(this.state.selections)
    );

    return (
      <div>
        <div className="title">
          <h1>
            Community Services
            <InfoButton info=" Services available. There are many, click a button to learn more" />
          </h1>
        </div>
        <div className="home-content">
          <div className="sidebar">{selectservice}</div>
          <div className="content">
            <p>X Result(s)</p>
            {contents}
          </div>
        </div>
      </div>
    );
  }
}
