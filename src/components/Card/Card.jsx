import React from "react";
import "./Card.css";

const Card = ({ title, subtitle,people, price,pricedescription, details, buttonText, isContact, color }) => {
  return (
    <div className="card" style={{ borderTop: `5px solid ${color}` }}>
        <div className="top">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p id="people">{people}</p>
      </div>
      {price && <p className="price">{price}</p>}
      <p id="price-description">{pricedescription}</p>


      {isContact && <p className="price">Contact sales for pricing</p>}
      <button>{buttonText}</button>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
