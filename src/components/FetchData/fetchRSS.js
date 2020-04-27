import React, { Component } from "react";

class FetchDataFromRSSFeed extends Component {
  constructor() {
    super();
    this.state = {
      dataFootball: [],
      recentBlogPost: {
        id: "",
        title: "",
        Date: "",
        url: "",
        thumbnail: "",
      },
    };
  }

  FetchDataFromRssFeed() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        var myObj = JSON.parse(request.responseText);

        //this.setState({ dataFootball: myObj });
        //console.log(this.state.dataFootball);

        // 5 news
        for (var i = 0; i < 10; i++) {
          if (myObj.items[i].thumbnail === "") {
            myObj.items[i].thumbnail =
              "https://about.fb.com/wp-content/uploads/2019/11/FB_Newsroom_Social.png?fit=1200%2C628";
          }

          this.setState({
            recentBlogPost: {
              id: myObj.items[i].guid,
              title: myObj.items[i].title,
              Date: myObj.items[i].pubDate,
              url: myObj.items[i].link,
              thumbnail: myObj.items[i].thumbnail,
            },
          });

          this.state.dataFootball.push(this.state.recentBlogPost);
          //console.log(myObj);
          //console.log(this.state.dataFootball);
        }
      }
    };
    request.open(
      "GET",
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.app%2Ffeeds%2FtiPmuDh3IgAS65O0.xml&count=10", // converted to json www.rss2json.com
      true
    );

    request.send();
  }

  componentDidMount() {
    this.FetchDataFromRssFeed();
  }

  render() {
    return (
      <React.Fragment>
        <hr />
        {this.state.dataFootball.map((item) => (
          <div key={item.id}>
            <div className="row">
              <div className="row col-md-7 form-row">
                <h4 className="col-md-12">
                  <u>{item.title} </u>
                </h4>
                <br />
                <br />
                <br />
                <br />
                <br />
                <a className="col-md-4 btn-info " href={item.url}>
                  Link
                </a>
              </div>

              <a className="col-md-3" href={item.url}>
                <img
                  alt="img"
                  className="figure-img col-md-12"
                  src={item.thumbnail}
                  height="150px"
                />
              </a>

              <p className="col-md-2">{item.Date}</p>
            </div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-10"></div>
            </div>
            <hr />
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default FetchDataFromRSSFeed;
