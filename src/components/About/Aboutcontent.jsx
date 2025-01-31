import React from "react";
import  "./Aboutcontent.css";
const Aboutcontent=()=>{
    return(
        <>
        <div className="story-container">
        <div className="story">

        <div className="about-text2">
             <h2>Our Story</h2>
             <h1>Delivering world-class learning outcomes at scale</h1>
             <p>Guided by our founding mission to eliminate the back row in higher education,
                2U has spent over 15 years advancing the technology and innovation to deliver world-class
                learning outcomes at scale. In 2021, 2U acquired edX to create a global online learning platform
                that has delivered life-changing learning experiences to millions of people worldwide.
                Today, under the leadership of 2U CEO Paul Lalljie and Founder and 2U Chief Academic Officer Anant Agarwal,
                connects millions of people with affordable, career-relevant learning opportunities.</p>
                 <button className="leaders-btn">Meet our leaders</button>
        </div>
        <div className="about-image2">
            <img src="success.jpeg" alt="story" />

        </div>
        </div>
        </div>

        <div className="record">
               <div>
                <h1 className="count">86M+</h1>
                <p>Learner Network</p>
               </div>
               <div>
                <h1 className="count">4600+</h1>
                <p>Online Programs</p>
               </div>
               <div>
                <h1 className="count">260+</h1>
                <p>Content Partners</p>
               </div>

        </div>
        </>

    );

}
export default Aboutcontent;