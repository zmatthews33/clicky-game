import React from "react";
//import "./style.css";

function Card(simpsons) {
  return (
    <div className="card">
      <div className="img-container">
        <img className="img-fluid" alt={simpsons.name} src={simpsons.image} />
      </div>
      <span
        onClick={() => simpsons.removeSimpson(simpsons.id)}
        className="remove"
      >
        {" "}
      </span>
    </div>
  );
}

export default Card;
