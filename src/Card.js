import React from "react";

import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} alt="" />
        <div className="about">
          <h2 className="cardTitle">{props.title}</h2>
          <p className="cardDescription">{props.description}</p>
        </div>
        <button>see the details</button>
      </div>
    </div>
  );
}

export default Card;
