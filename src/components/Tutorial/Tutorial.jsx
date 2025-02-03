import React from "react";
import "./Tutorial.css";
import ui from "../../assets/ui.jpeg";
import c from "../../assets/c.jpeg";
import python from "../../assets/python.jpeg";
import java from "../../assets/java.jpeg";
import ds from "../../assets/ds.png";
import aptitude from "../../assets/aptitude.jpeg";
import dbms from "../../assets/dbms.jpeg";
import solve from "../../assets/solve.jpeg";
import { faBook, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Tutorial = () => {
  const navigate = useNavigate();

  const courses = [
    { title: "UI UX", levels: 3, difficulty: "Beginner", image: ui },
    { title: "C Programming", levels: 7, difficulty: "Beginner", image: c },
    {
      title: "Programming Python",
      levels: 5,
      difficulty: "Beginner",
      image: python,
    },
    {
      title: "Programming Java",
      levels: 4,
      difficulty: "Beginner",
      image: java,
    },
    { title: "Aptitude", levels: 6, difficulty: "Beginner", image: aptitude },
    { title: "Data Structure", levels: 11, difficulty: "Beginner", image: ds },
    {
      title: "Database Programming",
      levels: 1,
      difficulty: "Beginner",
      image: dbms,
    },
    {
      title: "Problem Solving Skills",
      levels: 1,
      difficulty: "Beginner",
      image: solve,
    },
  ];

  const handleCourseClick = (courseTitle) => {
    const courseId = courseTitle.toLowerCase().replace(/\s+/g, "-");
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="tutorial-container">
      <h1>Courses Available</h1>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div
            className="course-card"
            key={index}
            onClick={() => handleCourseClick(course.title)}
          >
            <img src={course.image} alt={`${course.title} Thumbnail`} />
            <h2>{course.title}</h2>
            <div id="tutorial-detail">
              <p>
                <FontAwesomeIcon icon={faBook} /> Levels: {course.levels}
              </p>
              <p>
                <FontAwesomeIcon icon={faLayerGroup} />
                Difficulty: {course.difficulty}
              </p>
            </div>
            {/*  */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
