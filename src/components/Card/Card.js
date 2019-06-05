import React from "react";
import "./style.css";

export default function Card(props) {
  // console.log(props)
  return (
    <div className="card btn" onClick={props.handleClick}>
      <img
        id={`simpson-card${props.id}`}
        key={props.id}
        src={props.image}
        alt={props.name}
        className="img-fluid"
      />
    </div>
  );
}
