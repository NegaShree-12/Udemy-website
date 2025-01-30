import React from "react";
import "./Journey.css";
import { FaCertificate, FaClipboardList, FaSeedling, FaComments } from "react-icons/fa";

const Journey = () => {
  const steps = [
    {
      icon: <FaCertificate />,
      title: "28 years of experienced",
      description: "Udemy is backed by 28 years of experienced...",
    },
    {
      icon: <FaClipboardList />,
      title: "Organization aimed",
      description: "An organization aimed to curate trainings which cater...",
    },
    {
      icon: <FaSeedling />,
      title: "Eco system",
      description: "Over the next 7 years we aim to curate an eco system...",
    },
    {
      icon: <FaComments />,
      title: "Good communication",
      description: "At Udemy  we believe that good communication helps...",
    },
  ];

  return (
    <div className="journey">
      <h2 className="journey-title">Steps of Udemy</h2>
      <h3 className="journey-subtitle">The journey of Udemy</h3>
      <div className="journey-steps-container">
        <div className="journey-steps">
          {steps.map((step, index) => (
            <div className="journey-step" key={index}>
              <div className="journey-icon">{step.icon}</div>
              <div className="journey-box">
                <div id="content">
                <h4 className="journey-step-title">{step.title}</h4>
                <p className="journey-step-description">{step.description}</p>
                </div>
                <a href="#" className="journey-step-link">
                  View more
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="journey-connector"></div>
      </div>
    </div>
  );
};

export default Journey;
