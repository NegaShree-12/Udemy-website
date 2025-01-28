import React, { useState } from "react";
import "./Story.css";
import { FaChevronRight,FaChevronLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    logo: "capital.jpeg",
    title: "Capital One Accelerates Transformational Learning through Udemy Business",
    stats: [
      { value: "95%", description: "of learners rated Udemy as 'very helpful' to their success" },
      { value: "65%", description: "increase in retention for in-demand tech roles" },
    ],
    image: "/Story1.png",
  },
  {
    id: 2,
    logo: "event.png",
    title: "Eventbrite Navigates Change Through Skill-Building and Leadership Development",
    stats: [
      { value: "4,800+", description: "increase in employee enrollments for professional development courses" },
      { value: "65%", description: "revenue growth supported by a business model backed by learning" },
    ],
    image: "/Story2.png",
  },
  {
    id: 3,
    logo: "toyato1.jpeg",
    title: "Another Transformational Story Here",
    stats: [
      { value: "90%", description: "of learners gained new skills" },
      { value: "50%", description: "reduction in skill gaps across teams" },
    ],
    image: "/Story3.png",
  },
];

const Story = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <div className="slide-content">
            <img src={slide.logo} alt="Company Logo" className="logo" />
            <h2 className="title">{slide.title}</h2>
            <div className="stats">
              {slide.stats.map((stat, idx) => (
                <div key={idx} className="stat">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-desc">{stat.description}</p>
                </div>
              ))}
            </div>
            <button className="read-more">
      Read full story <FaArrowRight />
    </button>
          </div>
          <div className="slide-image">
            <img src={slide.image} alt="Story visual" />
          </div>
        </div>
      ))}
      <div className="navigation">
        <button className="nav-btn" onClick={handlePrev}><FaChevronLeft /></button>
        <div className="dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={idx === currentSlide ? "dot active" : "dot"}
              onClick={() => setCurrentSlide(idx)}
            />
          ))}
        </div>
        <button className="nav-btn" onClick={handleNext}> <FaChevronRight /></button>
      </div>
    </div>
  );
};

export default Story;
