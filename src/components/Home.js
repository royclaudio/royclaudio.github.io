import React, { Component } from "react";
import "./Home.css";
import InfoContainer from "./InfoContainer";
import { SelectService } from "./SelectService";
import { InfoButton } from "./InfoButton";
import csv from "./Shelterinfo.csv";
export class Home extends Component {
  static displayName = Home.name;
  // const [csvFile, setCsvFile] = useState();
  //   const [csvArray, setCsvArray] = useState([]);
  constructor(props) {
    super(props);
    this.state = { items: null, loading: true };
  }
  componentDidMount() {
    this.populateShelterData();
  }
  processCSV = (str, delim = ",") => {
    const headers = String(str)
      .slice(0, String(str).indexOf("\n"))
      .split(delim);
    const rows = String(str)
      .slice(String(str).indexOf("\n") + 1)
      .split("\n");

    const newArray = rows.map((row) => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {});
      return eachObject;
    });

    // setCsvArray(newArray);
    this.setState({ items: newArray, loading: false });
  };
  static renderitems(items) {
    return (
      <div className="grid-home">
        {items.map((item) => (
          <div className="grid-element">
            <InfoContainer
              title={item.Name}
              address={item.Address}
              info={item.Info}
              type={item.TypeofHousing}
            />
          </div>
        ))}
      </div>
    );
  }
  render() {
    let contents = this.state.loading ? (
      <img className="show-img1" src="whale.gif"></img>
    ) : (
      Home.renderitems(this.state.items)
    );
    return (
      <div className="home-content">
        <h1 className="title">
          Community Services
          <InfoButton info=" Services available. There are many, click a button to learn more" />
        </h1>
        <div className="sidebar">
          <SelectService />
        </div>
        <div className="content">{contents}</div>
      </div>
    );
  }
  async populateShelterData() {
    const response = await fetch(csv);
    const reader = response.body.getReader();
    const result = await reader.read();
    this.processCSV(result);
  }
}
// const response = await fetch("shelters");
// const data = await response.json();
// this.setState({ items: data, loading: false });
