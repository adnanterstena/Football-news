import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const headerstyle = {
    color: "white",
    backgroundColor: "black",
    height: "150px",
    padding: "5px",
    paddingTop: "30px",
    margin: "0px",
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
  };
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "21px",
  };

  return (
    <header style={headerstyle} className="navbar-expand-lg">
      <h2> Football news</h2>
      <div className="collapse navbar-collapse p-2">
        <ul className="navbar-nav" style={{ margin: "auto" }}>
          <Link to="/" style={linkStyle}>
            <li className="nav-link">Home</li>
          </Link>

          <Link to="/news" style={linkStyle}>
            <li className="nav-link">News</li>
          </Link>

          <Link to="/clubs" style={linkStyle}>
            <li className="nav-link">Clubs</li>
          </Link>

          <Link to="/statistics" style={linkStyle}>
            <li className="nav-link">Statistics</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
export default Header;
