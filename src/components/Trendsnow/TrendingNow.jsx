import React from "react";
import "./TrendingNow.css";

const TrendingNow = () => {
  const sections = [
    {
      title: "Development",
      skills: [
        { name: "Python", learners: "47,057,990 learners" },
        { name: "Web Development", learners: "13,887,119 learners" },
        { name: "Data Science", learners: "7,660,438 learners" },
      ],
    },
    {
      title: "Design",
      skills: [
        { name: "Blender", learners: "2,861,408 learners" },
        { name: "Graphic Design", learners: "4,434,751 learners" },
        { name: "Adobe Photoshop", learners: "12,602,697 learners" },
      ],
    },
    {
      title: "Business",
      skills: [
        { name: "PMI Project Management Professional (PMP)", learners: "2,490,915 learners" },
        { name: "Microsoft Power BI", learners: "4,497,658 learners" },
        { name: "Project Management", learners: "3,861,678 learners" },
      ],
    },
  ];

  return (
    <div className="trending-now-container">
      <h1 className="trending-now-title">Trending Now</h1>
      <div className="trending-now-grid">
        {/* Left Section */}
        <div className="trending-now-highlight">
          <h2 className="highlight-title">ChatGPT is a top skill</h2>
          <p className="highlight-link">
            See ChatGPT courses <span>&rarr;</span>
          </p>
          <p className="highlight-learners">4,055,521 learners</p>
          <button className="trending-now-button">Show all trending skills &rarr;</button>
        </div>
        {/* Right Section */}
        <div className="trending-now-sections">
          {sections.map((section, index) => (
            <div className="trending-now-section" key={index}>
              <h3 className="section-title">{section.title}</h3>
              <ul className="skills-list">
                {section.skills.map((skill, idx) => (
                  <li className="skill-item" key={idx}>
                    <span className="skill-name">{skill.name}</span>
                    <p className="skill-learners">{skill.learners}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
