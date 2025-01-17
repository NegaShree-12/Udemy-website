import React, { useState } from "react";

const CourseTabs = () => {
  const [activeTab, setActiveTab] = useState("Data Science");

  const courses = [
    "Data Science",
    "IT Certifications",
    "Leadership",
    "Web Development",
    "Communication",
    "Business Analytics & Intelligence",
  ];

  return (
    <div
      style={{
        textAlign: "left",
        marginTop: "50px",
        marginRight: "280px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h1 style={{ fontFamily: "Kanit, sans-serif" }}>
        All the skills you need in one place
      </h1>

      <p>
        From critical skills to technical topics, Udemy supports your
        professional development.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        {courses.map((course) => (
          <div
            key={course}
            onClick={() => setActiveTab(course)}
            style={{
              cursor: "pointer",
              color: activeTab === course ? "black" : "#555",
              borderBottom: activeTab === course ? "3px solid black" : "none",
              paddingBottom: "5px",
            }}
          >
            {course}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTabs;
