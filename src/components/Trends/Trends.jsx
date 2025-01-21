import React from 'react';
import './Trends.css';

const Trends = () => {
  return (
    <div className="trends-container">
      <div className="trends-content">
        <h1>Top trends for the future of work</h1>
         <div className='text'>

         <p>Our 2025 Global Learning & 
          Skills Trends Report is out now! 
          Find outhow to build the skills to keep pace with change.</p>

         </div>
          
        
        <button className="trends-button">Get the report →</button>
      </div>
      <div className="trends-image">
        <img
          src="/trends-img.png"
          alt="2025 Global Learning & Skills Trends Report"
        />
      </div>
    </div>
  );
};

export default Trends;
