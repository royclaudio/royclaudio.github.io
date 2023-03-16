import React, { Component } from "react";
import "./Home.css";
import InfoContainer from "./InfoContainer";
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
      checkedItems: new Set(),
      maincontent: null,
    };
    this.handleClick = this.handleClick.bind(this);
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
        results.data.pop();
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

  renderitems(items) {
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

  renderselections(items, handleClick) {
    return (
      <div className="selector">
        {items.map((item, i) => (
          <label key={i}>
            <input
              type="checkbox"
              id={item}
              name={item}
              onChange={() => handleClick(item)}
            />
            {item}
          </label>
        ))}
      </div>
    );
  }
  handleClick(item) {
    let checkedlist = this.state.checkedItems;
    let content = [];
    if (checkedlist.has(item)) {
      checkedlist.delete(item);
      this.setState({ checkedItems: checkedlist });
      this.state.items.forEach((element) => {
        if (checkedlist.has(element.Type)) {
          content.push(element);
        }
      });
    } else {
      checkedlist.add(item);
      this.setState({ checkedItems: checkedlist });
      this.state.items.forEach((element) => {
        if (checkedlist.has(element.Type)) {
          content.push(element);
        }
      });
    }

    this.count = content.length;
    this.currentcontent = content;
    this.setState({ maincontent: this.renderitems(this.currentcontent) });
  }
  btnpressed(item) {
    let checkedlist = this.state.checkedItems;
    let content = [];
    if (item == 1) {
      this.state.items.forEach((element) => {
        checkedlist.add(item.Type);
        content.push(element);
      });
    } else {
      this.state.items.forEach((element) => {
        content.pop(element);
      });
    }

    this.count = content.length;
    this.currentcontent = content;
    this.setState({ maincontent: this.renderitems(this.currentcontent) });
  }
  render() {
    let contents =
      (this.count == null) | (this.count == 0) ? (
        <div className="content">
          <p>Please select an option to continue.</p>
          <img style={{ height: 390, width: "95%" }} src="loading.gif"></img>
        </div>
      ) : (
        <div className="content">
          <p>Result(s): {this.count}</p>
          {this.state.maincontent}
        </div>
      );
    let selectservice = this.state.loading ? (
      <img className="show-img1" src="whale.gif"></img>
    ) : (
      this.renderselections(this.state.selections, this.handleClick)
    );

    return (
      <div>
        <div className="">
          <h1 className="home_title">
            Community Services
            <InfoButton info=" Services available. There are many, click a button to learn more" />
          </h1>
        </div>
        <div className="home-content">
          <div className="sidebar">
            <div className="selector-info">
              <h2 className="title">
                Select Service
                <InfoButton info=" Services available. There are many, click a button to learn more" />
              </h2>
              {selectservice}
              <button className="button" onClick={() => this.btnpressed(1)}>
                All
              </button>
              <button className="button" onClick={() => this.btnpressed(0)}>
                Nothing
              </button>
            </div>
          </div>
          {contents}
        </div>
      </div>
    );
  }
}
