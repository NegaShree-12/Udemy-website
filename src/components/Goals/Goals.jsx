import React from "react";
import "./Goals.css";
import { FaArrowRight } from "react-icons/fa";

function Goals() {
  return (
    <>
    <section className="goal-container">
    <div className="goals-section">
      <div className="Goals-text">
      <p className="Goals-title">Learning focused on your goals</p>
      <div className="goal active">
        <h2>Hands-on training</h2>
        <p>Upskill effectively with AI-powered coding exercises, practice tests, and quizzes.</p>
      </div>
      <div className="goal">
        <h2>Certification prep</h2>
        <p>Prep for industry-recognized certifications by solving real-world challenges and earning badges along the way.</p>
        <a href="#">Explore courses <FaArrowRight /></a>
      </div>
      <div className="goal">
        <h2>
          Insights and analytics <span className="badge">Enterprise Plan</span>
        </h2>
        <p>
          Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.
        </p>
        <a href="#">Find out more <FaArrowRight /></a>
      </div>
      <div className="goal">
        <h2>
          Customizable content <span className="badge">Enterprise Plan</span>
        </h2>
        <p>
          Create tailored learning paths for team and organization goals and even host your own content and resources.
        </p>
        <a href="#">Find out more <FaArrowRight /></a>
      </div>
      </div>

      <div className="Goals-image">
        <img src="learning.avif" alt="score board" />
      </div>
      </div>
    </section>
    </>
  );
}

export default Goals;
