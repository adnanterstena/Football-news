import React, { Component } from "react";

class Footer extends Component {
  render() {
    const foterStyle = {
      position: "auto",
      left: "0",
      bottom: "0",
      width: "100%",
      backgroundColor: "black",
      color: "white",
      textAlign: "center",
      padding: "2px",
    };
    return (
      <footer style={foterStyle}>
        <p className="m-1 font-weight-light">
          <span>&#169;</span> 2020 - football soccer news
        </p>
      </footer>
    );
  }
}
export default Footer;
