import React, { Component } from "react";
import "./Home.css";
import InfoContainer from "./InfoContainer";
import { SelectService } from "./SelectService";
import { InfoButton } from "./InfoButton";
import csv from "./Shelterinfo.csv";
import Papa from "papaparse";

export class WebScrape extends Component {
  static displayName = this.name;

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="">
          <h1 className="home_title">Web Scraping project</h1>
          <h1 className="home_title">
            Comming soon
            <InfoButton info=" This project will grab things from the internet websites." />
          </h1>
        </div>
        <div className="home-content">
          <img style={{ height: 390, width: "95%" }} src="whale.gif"></img>
          <p>In the meantime enjoy the whales.</p>
        </div>
      </div>
    );
  }
}
