// AppFooter.jsx

import React from "react";
import "./AppFooter.css";

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="footer-top">
        <p>
          Top companies choose <strong>Udemy Business</strong> to build in-demand
          career skills.
        </p>
        <div className="companies-logo">
          <img src="/nasdaq-logo.png" alt="Nasdaq" />
          <img src="/volkswagen-logo.png" alt="Volkswagen" />
          <img src="/box-logo.png" alt="Box" />
          <img src="/netapp-logo.png" alt="NetApp" />
          <img src="/eventbrite-logo.png" alt="Eventbrite" />
        </div>
      </div>

      <hr />

      
      <div className="footer-content">
        <div className="footer-column">
          <h3>Certifications by Issuer</h3>
          <ul>
            <li>Amazon Web Services (AWS) Certifications</li>
            <li>Six Sigma Certifications</li>
            <li>Microsoft Certifications</li>
            <li>Cisco Certifications</li>
            <li>Tableau Certifications</li>
            <li>See all Certifications</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Web Development</h3>
          <ul>
            <li>Web Development</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Angular</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>IT Certifications</h3>
          <ul>
            <li>Amazon AWS</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>AZ-900: Microsoft Azure Fundamentals</li>
            <li>AWS Certified Solutions Architect - Associate</li>
            <li>Kubernetes</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Leadership</h3>
          <ul>
            <li>Leadership</li>
            <li>Management Skills</li>
            <li>Project Management</li>
            <li>Personal Productivity</li>
            <li>Emotional Intelligence</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Certifications by Skill</h3>
          <ul>
            <li>Cybersecurity Certification</li>
            <li>Project Management Certification</li>
            <li>Cloud Certification</li>
            <li>Data Analytics Certification</li>
            <li>HR Management Certification</li>
            <li>See all Certifications</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Data Science</h3>
          <ul>
            <li>Data Science</li>
            <li>Python</li>
            <li>Machine Learning</li>
            <li>ChatGPT</li>
            <li>Deep Learning</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Communication</h3>
          <ul>
            <li>Communication Skills</li>
            <li>Presentation Skills</li>
            <li>Public Speaking</li>
            <li>Writing</li>
            <li>PowerPoint</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Business Analytics & Intelligence</h3>
          <ul>
            <li>Microsoft Excel</li>
            <li>SQL</li>
            <li>Microsoft Power BI</li>
            <li>Data Analysis</li>
            <li>Business Analysis</li>
          </ul>
          <div class="center-line"></div>
        </div>
      </div>
    
    <div className="line">
    <hr>
   
    </hr>
    </div>
   </footer>

   


  );

  

};

export default AppFooter;
