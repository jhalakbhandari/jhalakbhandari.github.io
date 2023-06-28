import React from "react";
import "./Card.css";
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{description}</p>
        </div>
        <div className="btn">
          <button>
            <p className="view">View More</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
