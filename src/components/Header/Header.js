import React from "react";
import "./style.css";

const Header = () => (
  <header>
    <nav className="navbar purple darken-3 text-success sticky-top">
      <ul className="container">
        <li className="nav-link">Simpsons Clicky Game</li>
        <li className="nav-link">Score: 0 | Top Score: 0</li>
      </ul>
    </nav>

    <div className="jumbotron-fluid text-center p-2 clearfix">
      <h1 className="display-3"> Simpsons Clicky Game</h1>
      <p className="lead">
        Click any character to begin. Try to use your memory and avoid clicking
        the same image twice.
      </p>
    </div>
  </header>
);

export default Header;
