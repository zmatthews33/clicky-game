import React from "react";
//import "./style.css";

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
        <img
          src={
            "https://images.launchbox-app.com/60cc0ee9-c961-4f00-b597-99f6429ecf6f.png"
          }
          alt="logo"
          className="logo img-responsive"
        />
        <p className="lead">
          Click any character to begin. Try to use your memory and avoid
          clicking the same image twice.
        </p>
      </div>
    </header>
  );
}
