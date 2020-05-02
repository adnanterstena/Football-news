import React, { Component } from "react";
import BarcaLogo from "./images/83-830955_barcelona-drawing-on-fire-logo-png-images-logo.png";
import RealLogo from "./images/d7e59d2b72b055c2d07ec26006fc33ec.jpg";

//https://www.robinwieruch.de/react-state-array-add-update-remove

class Statisctics extends Component {
  constructor() {
    super();
    this.state = {
      fcBarca: {
        TotalTrophy: "",
        ChampionsLeague: "",
        UEFASuperCup: "",
        SpanishLeague: "",
        SpanishSuperCup: "",
      },
      fcReal: {
        TotalTrophy: "",
        ChampionsLeague: "",
        UEFASuperCup: "",
        SpanishLeague: "",
        SpanishSuperCup: "",
      },
      TotalTrophy: "96 - 94",
      ChampionsLeague: "5 - 13",
      UEFASuperCup: "5 - 4",
      SpanishLeague: "26 - 33",
      SpanishSuperCup: "16 - 11",
      Answers: false,
    };
  }
  handleChangefcBarca = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      fcBarca: {
        ...prevState.fcBarca,
        [name]: value,
      },
    }));
  };
  handleChangefcReal = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      fcReal: {
        ...prevState.fcReal,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ Answers: !this.state.Answers });
  };

  ResultOfStatistics() {
    if (this.state.Answers) {
      return (
        <div className="row justify-content-center">
          <div className="col-auto">
            <table className="table table-active table-responsive">
              <thead>
                <tr>
                  <th></th>
                  <th>FC Barcelona</th>
                  <th>FC Real Madrid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Trophy</td>
                  <td>96</td>
                  <td>94</td>
                </tr>
                <tr>
                  <td>Champions League</td>
                  <td>5</td>
                  <td>13</td>
                </tr>
                <tr>
                  <td>UEFA Super Cup</td>
                  <td>5</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Spanish League</td>
                  <td>26</td>
                  <td>33</td>
                </tr>
                <tr>
                  <td>Spanish Super Cup</td>
                  <td>16</td>
                  <td>11</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  checkAnswer = (variable, num) => {
    if (variable === num.toString()) {
      return <p style={{ color: "blue" }}>correct</p>;
    } else {
      return <p style={{ color: "red" }}>incorrect</p>;
    }
  };

  render() {
    return (
      <div className="container p-2">
        <h1 className="font-weight-light text-center">Statisctics</h1>
        <hr />
        <center>
          <p className="text-info">
            FC Barcelona vs Real Madrid - list of trophies!?
          </p>
          <h3 className="text-info">Find the correct answer...</h3>
        </center>
        <form className="row center" onSubmit={this.handleSubmit}>
          <div className="col-md-6 row p-2">
            <img
              className="col-md-3"
              src={BarcaLogo}
              alt="logo"
              height="100px"
            />
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input
                  className="form-control col-md-3"
                  type="text"
                  value={this.state.fcBarca.TotalTrophy}
                  name="TotalTrophy"
                  onChange={this.handleChangefcBarca}
                />
                <span className="input-group-text col-md-6">
                  <b>Total Trophy</b>
                </span>
                <div className="text-center col-md-4">
                  {this.state.Answers
                    ? this.checkAnswer(this.state.fcBarca.TotalTrophy, 96)
                    : ""}
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control col-md-3"
                  type="text"
                  value={this.state.fcBarca.ChampionsLeague}
                  name="ChampionsLeague"
                  onChange={this.handleChangefcBarca}
                />
                <span className="input-group-text col-md-6">Champions L.</span>
                <div className="text-center col-md-4">
                  {this.state.Answers
                    ? this.checkAnswer(this.state.fcBarca.ChampionsLeague, 5)
                    : ""}
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control col-md-3"
                  type="text"
                  value={this.state.fcBarca.UEFASuperCup}
                  name="UEFASuperCup"
                  onChange={this.handleChangefcBarca}
                />
                <span className="input-group-text col-md-6">
                  UEFA Super Cup
                </span>
                <div className="text-center col-md-4">
                  {this.state.Answers
                    ? this.checkAnswer(this.state.fcBarca.UEFASuperCup, 5)
                    : ""}
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control col-md-3"
                  type="text"
                  value={this.state.fcBarca.SpanishLeague}
                  name="SpanishLeague"
                  onChange={this.handleChangefcBarca}
                />
                <span className="input-group-text col-md-6">
                  Spanish League
                </span>
                <div className="text-center col-md-4">
                  {this.state.Answers
                    ? this.checkAnswer(this.state.fcBarca.SpanishLeague, 26)
                    : ""}
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control col-md-3"
                  type="text"
                  value={this.state.fcBarca.SpanishSuperCup}
                  name="SpanishSuperCup"
                  onChange={this.handleChangefcBarca}
                />
                <span className="input-group-text col-md-6">
                  Spanish S. Cup
                </span>
                <div className="text-center col-md-4">
                  {this.state.Answers
                    ? this.checkAnswer(this.state.fcBarca.SpanishSuperCup, 16)
                    : ""}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 row p-2">
            <img
              className="col-md-3"
              src={RealLogo}
              alt="logo"
              height="100px"
            />
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input
                  className="form-control col-md-3"
                  type="text"
                  value={this.state.fcReal.TotalTrophy}
                  name="TotalTrophy"
                  onChange={this.handleChangefcReal}
                />
                <span className="input-group-text col-md-6">
                  <b>Total Trophy</b>
                </span>
                <div className="text-center col-md-4">
                  {this.state.Answers
                    ? this.checkAnswer(this.state.fcReal.TotalTrophy, 94)
                    : ""}
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control col-md-3"
                  type="text"
                  value={this.state.fcReal.ChampionsLeague}
                  name="ChampionsLeague"
                  onChange={this.handleChangefcReal}
                />
                <span className="input-group-text col-md-6">Champions L.</span>
                <div className="text-center col-md-4">
                  {this.state.Answers
                    ? this.checkAnswer(this.state.fcReal.ChampionsLeague, 13)
                    : ""}
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control col-md-3"
                  type="text"
                  value={this.state.fcReal.UEFASuperCup}
                  name="UEFASuperCup"
                  onChange={this.handleChangefcReal}
                />
                <span className="input-group-text col-md-6">
                  UEFA Super Cup
                </span>
                <div className="text-center col-md-4">
                  {this.state.Answers
                    ? this.checkAnswer(this.state.fcReal.UEFASuperCup, 4)
                    : ""}
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control col-md-3"
                  type="text"
                  value={this.state.fcReal.SpanishLeague}
                  name="SpanishLeague"
                  onChange={this.handleChangefcReal}
                />
                <span className="input-group-text col-md-6">
                  Spanish League
                </span>
                <div className="text-center col-md-4">
                  {this.state.Answers
                    ? this.checkAnswer(this.state.fcReal.SpanishLeague, 33)
                    : ""}
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  className="form-control col-md-3"
                  type="text"
                  value={this.state.fcReal.SpanishSuperCup}
                  name="SpanishSuperCup"
                  onChange={this.handleChangefcReal}
                />
                <span className="input-group-text col-md-6">
                  Spanish S. Cup
                </span>
                <div className="text-center col-md-4">
                  {this.state.Answers
                    ? this.checkAnswer(this.state.fcReal.SpanishSuperCup, 11)
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary btn-lg btn-block">
            Submit and see result!
          </button>
        </form>
        <hr />
        {this.ResultOfStatistics()}
      </div>
    );
  }
}
export default Statisctics;
