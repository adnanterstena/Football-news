import React, { Component } from "react";
import PremierL from "./images/premieL.png";
import LaLiga from "./images/LaLiga.png";
import SerieA from "./images/serieA.png";
import Bundesliga from "./images/Bundeslig.png";
import Ligue1 from "./images/Ligue1.png";

import TblBundesliga from "./ClubsStatisticsTbl/Bundesliga";
import TblFranceLiga1 from "./ClubsStatisticsTbl/FranceLiga1";
import TblLaLiga from "./ClubsStatisticsTbl/LaLiga";
import TblPremierLigue from "./ClubsStatisticsTbl/PremierLigue";
import TblSeriaA from "./ClubsStatisticsTbl/SeriaA";

class Clubs extends Component {
  constructor() {
    super();
    this.state = {
      ShowStatistics: true,

      Bundesliga: false,
      FranceLiga1: false,
      LaLiga: false,
      PremierLigue: false,
      SeriaA: false,
    };
  }

  //For Premier Ligue Event and Table
  TblPremierLigueEvent = () => {
    this.setState({
      PremierLigue: !this.state.PremierLigue,
      ShowStatistics: !this.state.ShowStatistics,
    });
  };
  showTblPremierLigue = () => {
    return <TblPremierLigue TblPremierLigueEvent={this.TblPremierLigueEvent} />;
  };
  //--------------

  //For LaLiga Event and Table
  TblLaLigaEvent = () => {
    this.setState({
      LaLiga: !this.state.LaLiga,
      ShowStatistics: !this.state.ShowStatistics,
    });
  };
  showTblLaLiga = () => {
    return <TblLaLiga TblLaLigaEvent={this.TblLaLigaEvent} />;
  };
  //--------------

  //For Bundesliga Event and Table
  TblBundesligaEvent = () => {
    this.setState({
      Bundesliga: !this.state.Bundesliga,
      ShowStatistics: !this.state.ShowStatistics,
    });
  };
  showTblBundesliga = () => {
    return <TblBundesliga TblBundesligaEvent={this.TblBundesligaEvent} />;
  };
  //--------------

  //For TblFranceLiga1 Event and Table
  TblFranceLiga1Event = () => {
    this.setState({
      FranceLiga1: !this.state.FranceLiga1,
      ShowStatistics: !this.state.ShowStatistics,
    });
  };
  showTblFranceLiga1 = () => {
    return <TblFranceLiga1 TblFranceLiga1Event={this.TblFranceLiga1Event} />;
  };
  //--------------

  //For TblSeriaA Event and Table
  TblSeriaAEvent = () => {
    this.setState({
      SeriaA: !this.state.SeriaA,
      ShowStatistics: !this.state.ShowStatistics,
    });
  };
  showTblSeriaA = () => {
    return <TblSeriaA TblSeriaAEvent={this.TblSeriaAEvent} />;
  };
  //--------------

  selectClubs = () => {
    return (
      <div>
        <div className="row p-4">
          <img
            className="col-md-4 btn-outline-warning"
            src={PremierL}
            alt="Premier Ligue"
            width="250px"
            height="250px"
            onClick={this.TblPremierLigueEvent}
          />
          <img
            className="col-md-4 btn-outline-warning"
            src={LaLiga}
            alt="La Liga"
            width="250px"
            height="250px"
            onClick={this.TblLaLigaEvent}
          />
          <img
            className="col-md-4 btn-outline-warning"
            src={SerieA}
            alt="Serie A"
            width="250px"
            height="250px"
            onClick={this.TblSeriaAEvent}
          />
        </div>
        <div className="row">
          <img
            className="col-md-4 btn-outline-warning"
            src={Bundesliga}
            alt="Bundesliga"
            width="250px"
            height="250px"
            onClick={this.TblBundesligaEvent}
          />
          <div className="col-md-4">
            <br />
            <br />
            <center>
              <h3 className="text-info">
                Choose League to see their 5 best clubs. Until <u>09.05.2020</u>
              </h3>
            </center>
          </div>
          <img
            className="col-md-4 btn-outline-warning"
            src={Ligue1}
            alt="France ligue 1"
            width="250px"
            height="250px"
            onClick={this.TblFranceLiga1Event}
          />
        </div>
        <br />
        <hr />
      </div>
    );
  };

  render() {
    const Content = this.state.ShowStatistics ? this.selectClubs() : "";

    let PremierLi = this.state.PremierLigue ? this.showTblPremierLigue() : "";
    let LaLigaLi = this.state.LaLiga ? this.showTblLaLiga() : "";
    let BundesligaLi = this.state.Bundesliga ? this.showTblBundesliga() : "";
    let SeriaALi = this.state.SeriaA ? this.showTblSeriaA() : "";
    let FranceLiga1Li = this.state.FranceLiga1 ? this.showTblFranceLiga1() : "";
    return (
      <div className="container p-2">
        <h1 className="font-weight-light text-center">Clubs</h1>
        <hr />
        {Content}
        {PremierLi}
        {LaLigaLi}
        {BundesligaLi}
        {SeriaALi}
        {FranceLiga1Li}
      </div>
    );
  }
}

export default Clubs;
