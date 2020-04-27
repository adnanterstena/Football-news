import React, { Component } from "react";
import FetchDataFromRSSFeed from "./FetchData/fetchRSS";

class Home extends Component {
  render() {
    return (
      <div className="container p-2">
        <h1 className="font-weight-light text-center">Home</h1>
        <br />
        <FetchDataFromRSSFeed />
      </div>
    );
  }
}
export default Home;
