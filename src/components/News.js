import React, { Component } from "react";
import FetchAPI from "./FetchData/fetchAPI";

class News extends Component {
  render() {
    return (
      <div className="container p-2">
        <h1 className="font-weight-light text-center">News</h1>
        <FetchAPI />
      </div>
    );
  }
}
export default News;
