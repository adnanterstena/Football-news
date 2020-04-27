import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import News from "./components/News";
import Clubs from "./components/Clubs";
import Statistics from "./components/Statistics";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/clubs" component={Clubs} />
            <Route path="/statistics" component={Statistics} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
