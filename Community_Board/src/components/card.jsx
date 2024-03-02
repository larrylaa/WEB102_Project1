import React from 'react';
import './card.css';

// Card component
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.imageAlt} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <a href={props.websiteLink} className="button">Website</a>
      </div>
    </div>
  );
};

export default Card;
