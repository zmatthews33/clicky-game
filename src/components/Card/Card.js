import React from "react";

export default function Card(props) {
  // console.log(props)
  return (
    <div className="card btn" onClick={props.handleClick}>
      <img
        id={`simpson-card${props.id}`}
        key={props.id}
        src={props.img}
        alt={props.name}
        className="img-fluid"
      />
    </div>
  );
}
