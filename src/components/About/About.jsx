import React from "react";
import "./About.css";
import aboutImage from "../../assets/about-image.jpg"; 

const About = () => {
  return (
    <>
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-subtitle">
        Empowering learners with the best online education, making knowledge accessible, engaging, and career-focused.
      </p>
      <div className="about-content">
        <div className="about-text">
          <h3>
            We’re here to make <span>learning</span> accessible for everyone.
          </h3>
          <p>
            Not just for students, but for professionals and lifelong learners. Our platform provides a structured,
            interactive, and engaging approach to learning.
          </p>
          <p>
            We believe learning should be fun, flexible, and career-oriented. With our project-based courses and expert-led
            mentorship, we ensure that knowledge is practical and applicable in real-world scenarios.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="E-learning Community" />
        </div>
      </div>
    </div>
{/* study cycle */}


    <div className="elearning-container">
      <div className="elearning-image">
        <img
          src="study.png" 
          alt="Students Studying"
          className="elearning-img"
        />
      </div>
      <div className="elearning-text">
        <h2>
          More than just learning, it's <span className="elearning-highlight">growth</span>.
        </h2>
        <p>
  Our e-learning platform provides a structured approach to acquiring
  knowledge. With interactive courses, real-world projects, and expert
  guidance, we help learners master skills in programming, design,
  business, and more.
</p>
<p>
  Learning is a journey, and our platform ensures that every step is
  engaging, practical, and aligned with your goals. Start with the
  fundamentals and build expertise at your own pace.
</p>
<p>
  We believe that education should be accessible to everyone. Whether
  you're a beginner or an advanced learner, our platform offers courses
  tailored to your needs, helping you grow both personally and
  professionally.
</p>



      </div>
    </div>
</>
  );
};

export default About;
