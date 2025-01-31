import React from "react";
import "./Team.css";

const teamMembers = [
  { image: "/victor.jpg", name: "Victor AbiJaoudi II", title: "Founder and CEO", color: "#008f57" },
  { image: "/jenna.jpg", name: "Jenna Ellis, PT", title: "Program Director", color: "#34b38a" },
  { image: "/jamie.jpg", name: "Jamie Ferrell", title: "Community Manager", color: "#4cb9a8" },
  { image: "/mont.jpg", name: "Monte Williams", title: "Chief Operations Officer", color: "#56c271" },
  { image: "/marc.jpg", name: "Dr. Marc H. Boff", title: "Wellness Advisor", color: "#28a745" },
  { image: "/sarah.jpg", name: "Sarah Enouen", title: "Trainer and Nutritionist", color: "#2ecf96" },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">Meet the minds behind the movement.</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-title" style={{ color: member.color }}>{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
