import React, { Component } from "react";
import "./SelectService.css";
import { InfoButton } from "./InfoButton";

export class SelectService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }

  static renderitems(items) {
    let list = [];
    return (
      <div>
        {items.map((item) => (
          <div>
            <label>
              <input
                type="checkbox"
                name={item}
                checked={this.checked}
                onChange={this.handleChange}
              ></input>
              &nbsp; {item}
            </label>
          </div>
        ))}
      </div>
    );
  }
  render() {
    let contents = SelectService.renderitems(this.props.items);
    return (
      <div className="selectservice-info">
        <h2 className="">
          Select Service
          <InfoButton info=" Services available. There are many, click a button to learn more" />
        </h2>
        <div className="selector">{contents}</div>
        <div className="grid-container">
          <button className="ssbtn">Hide All</button>
          <button className="ssbtn">Show All</button>
        </div>
      </div>
    );
  }
}

export default SelectService;
