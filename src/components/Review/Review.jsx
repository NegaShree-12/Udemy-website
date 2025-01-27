import React from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";



const reviews = [
  {
    name: "Diksha S",
    profileInitials: "DS",
    feedback:
      "Because of this course I was able to clear my two interviews... Thanks for making such wonderful content.",
    course: "Business Intelligence (BI)",
    link: "#",
  },
  {
    name: "Chethan B",
    profileInitials: "CB",
    feedback:
      "This has helped me so much in my career...I joined as a frontend engineer and eventually transitioned to full stack engineer with the help of this course.",
    course: "View this Go (golang) course.",
    link: "#",
  },
  {
    name: "Batchu K",
    profileInitials: "BK",
    feedback:
      "Today, I am a software developer, and I credit a significant part of my success to the solid foundation laid by this course.",
    course: "View this Java course",
    link: "#",
  },
  {
    name: "Ankit K",
    profileInitials: "AK",
    feedback:
      "I would highly recommend this Web Development Bootcamp to anyone interested in pursuing a career in web development or looking to enhance their skills in this field.",
    course: "View this Web Development course",
    link: "#",
  },
];

const Review = () => {
  return (
    <div className="review-section">
      <h2>See what others are achieving through learning</h2>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-quote">“</div>
            <p className="review-feedback">{review.feedback}</p>
            <div className="review-author">
              <div className="review-avatar">{review.profileInitials}</div>
              <div className="review-name">{review.name}</div>
            </div>
            <a href={review.link} className="review-course-link">
              {review.course} →
            </a>
          </div>
        ))}
        <div className="review-navigation">
          <button className="review-nav-button">
          <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
