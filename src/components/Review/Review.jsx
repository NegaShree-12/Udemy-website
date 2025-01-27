import React, { useState } from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";



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
  {
    name: "Rajesh P",
    profileInitials: "RP",
    feedback:
      "This course has transformed my understanding of data structures and algorithms. It’s amazing!",
    course: "View this DSA course",
    link: "#",
  },
  {
    name: "Priya M",
    profileInitials: "PM",
    feedback:
      "The hands-on approach in this course helped me build confidence in tackling real-world projects.",
    course: "View this Full Stack course",
    link: "#",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="review-section">
      <h2>See what others are achieving through learning</h2>
      <div className="review-container">
        {reviews
          .slice(currentIndex, currentIndex + 4)
          .concat(
            reviews.slice(0, Math.max(0, currentIndex + 4 - reviews.length))
          )
          .map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-quote">“</div>
              <p className="review-feedback">{review.feedback}</p>
              <div className="review-author">
                <div className="review-avatar">{review.profileInitials}</div>
                <div className="review-name">{review.name}</div>
              </div>
              <a href={review.link} className="review-course-link">
                {review.course}
              </a>
            </div>
          ))}
      </div>
      <div className="review-navigation">
        <button className="review-nav-button"  id="review-nav-lbutton" onClick={prevReview}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="review-nav-button"  id="review-nav-rbutton" onClick={nextReview}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Review;
