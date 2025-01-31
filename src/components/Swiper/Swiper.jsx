import React, { useState, useEffect } from "react";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3 .jpg";
import image4 from "../../assets/imagee4.jpg";
import "./Swiper.css";

const CourseSlider = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const courses = [
    {
      src: image1,
      title: "Master Web Development",
      description:
        "Learn HTML, CSS, JavaScript, and React to build modern websites.",
    },
    {
      src: image2,
      title: "Data Science Bootcamp",
      description:
        "Become a data scientist with Python, SQL, and machine learning.",
    },
    {
      src: image3,
      title: "Graphic Design for Beginners",
      description: "Master Photoshop, Illustrator, and design fundamentals.",
    },
    {
      src: image4,
      title: "Digital Marketing Mastery",
      description:
        "Learn SEO, social media marketing, and Google Ads strategies.",
    },
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMainImageIndex((prevIndex) => (prevIndex + 1) % courses.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [courses.length]);

  return (
    <div className="image-wrapper">
      <img
        src={courses[mainImageIndex].src}
        alt={courses[mainImageIndex].title}
        className="main-image"
      />
      <div className="content-overlay">
        <h2 className="title">{courses[mainImageIndex].title}</h2>
        <p className="description">{courses[mainImageIndex].description}</p>
      </div>
      <div className="thumbnails">
        {courses.map((course, index) => (
          <img
            key={index}
            src={course.src}
            alt={course.title}
            className={`thumbnail ${
              mainImageIndex === index ? "active-thumbnail" : ""
            }`}
            onClick={() => setMainImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSlider;
