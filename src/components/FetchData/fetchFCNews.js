import React, { Component } from "react";
import FCNews from "./FCNews";

class FetchDataFromFCNews extends Component {
  constructor() {
    super();
    this.state = {
      FootballNews: FCNews,
    };
  }

  News() {
    return this.state.FootballNews.map((item) => (
      <div key={item.id}>
        <h3 className="text text-info card-title">{item.title}</h3>
        <p className="text-body text-justify">{item.text}</p>
        <br />
        <hr />
      </div>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <br /> {this.News()}
      </React.Fragment>
    );
  }
}
export default FetchDataFromFCNews;
