import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';



const Card = ({ title, subtitle,people, price,pricedescription, details, buttonText, icon, color }) => {
  return (
    <div className="card" style={{ borderTop: `5px solid ${color}` }}>
        <div className="top">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p id="people">
      <FontAwesomeIcon icon={icon} size="1x"  id="icon"/>
        {people}

      </p>
      </div>

      <div className="price_card">
      {price && <p className="price">{price}</p>}
      <p id="price-description">{pricedescription}</p>
      </div>
      

      
      <button>
        {buttonText} <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
