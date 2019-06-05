import React from "react";
import "./style.css";

export default function Header(props) {
  return (
    <header>
      <nav className="navbar purple darken-3 text-success sticky-top">
        <ul className="container text-center">
          <li className="nav-link">{props.message}</li>
          <li className="nav-link">
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </nav>

      <div className="jumbotron-fluid text-center p-2 clearfix">
        <h1 className="display-3">Simpsons Memory Game</h1>
        <p className="lead">
          Click any character to begin. Try to use your memory and avoid
          clicking the same image twice.
        </p>
      </div>
    </header>
  );
}
