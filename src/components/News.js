import React, { Component } from "react";
import FetchFCNews from "./FetchData/fetchFCNews";

class News extends Component {
  render() {
    return (
      <div className="container p-2">
        <h1 className="font-weight-light text-center">News</h1>
        <FetchFCNews />
      </div>
    );
  }
}
export default News;
