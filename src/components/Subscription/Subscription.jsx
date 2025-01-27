import React from "react";
import Card from "../Card/Card.jsx";
import "./Subscription.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';



const Subscription = () => {
  const plans = [
    {
      title: "Personal Plan",
      subtitle: "For you",
      people:"Individual",
      price: "Starting at ₹850 per month",
      pricedescription:"Billed monthly or annually. Cancel anytime.",
      details: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
      ],
      buttonText: "Start subscription  ",
      icon:faUser,
      color: "#6d28d9",
    
    },
    {
      title: "Team Plan",
      subtitle: "For your team",
      people:"2 to 20 people",
      price: "₹2,000 a month per user",
      pricedescription:"Billed annually. Cancel anytime.",
      details: [
        "Access to 12,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Analytics and adoption reports",
      ],
      buttonText: "Start subscription  ",
      icon:faUsers,
      color: "#9333ea",
    },
    {
      title: "Enterprise Plan",
      subtitle: "For your whole organization",
      people:"More than 20 people",
      price: "Contact sales for pricing",
      pricedescription:"Billed annually. Cancel anytime.",
      details: [
        "Access to 27,000+ top courses",
        "Certification prep",
        "Goal-focused recommendations",
        "AI-powered coding exercises",
        "Advanced analytics and insights",
        "Dedicated customer success team",
        "International course collection featuring 15 languages",
        "Customizable content",
       
      ],
      buttonText: "Request a demo  ",
      icon:faUsers,
      color: "#7c3aed",
      isContact: true,
    },
  ];

  return (
    <div className="subscription-container">
        <div className="subscription-text">
      <h1 id="Subscription-title">Accelerate growth – for you or your organization</h1>
      <p id="Subscription-description">
        Reach goals faster with one of our plans or programs. Try one free today
        or contact sales to learn more.
      </p>
      </div>

      <div className="plans">
        {plans.map((plan, index) => (
          <Card key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
