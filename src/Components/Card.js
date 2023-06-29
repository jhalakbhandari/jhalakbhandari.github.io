import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ title, description, imageUrl, projectLink }) => {
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
          <Link>
            <button>
              <p className="view">View More</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Card;
