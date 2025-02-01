import React from "react";
import "./Journey.css";
import { FaCertificate, FaClipboardList, FaSeedling, FaComments } from "react-icons/fa";

const Journey = () => {
  const steps = [
    {
      icon: <FaCertificate />,
      title: "28 Years of Experience",
      description:
        "Udemy is backed by 28 years of experience in delivering high-quality education and training solutions.",
    },
    {
      icon: <FaClipboardList />,
      title: "Organization Aimed at Excellence",
      description:
        "We are an organization dedicated to curating training programs that cater to the evolving needs of industries worldwide.",
    },
    {
      icon: <FaSeedling />,
      title: "Building a Thriving Ecosystem",
      description:
        "Over the next 7 years, we aim to establish a comprehensive ecosystem that nurtures learning, collaboration, and career growth.",
    },
    {
      icon: <FaComments />,
      title: "Emphasizing Effective Communication",
      description:
        "At Udemy, we believe that effective communication is a crucial skill in today's professional landscape. ",
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
