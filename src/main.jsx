import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./index.css";

import Goals from "./components/Goals/Goals.jsx";
import TopNavbar from "./components/Topnavbar/Topnavbar.jsx";
import Trends from "./components/Trends/Trends.jsx";
import Subscription from "./components/Subscription/Subscription.jsx";
import Review from "./components/Review/Review.jsx";
import TrendingNow from "./components/Trendsnow/TrendingNow.jsx";
import Story from "./components/Story/Story.jsx";
import AppFooter from "./components/AppFooter/AppFooter.jsx";
import AppFooter1 from "./components/AppFooter1/AppFooter1.jsx";
import App from "./App.jsx";
import CourseTabs from "./components/Courses/course.jsx";
import CourseList from "./components/Courselist/Courselist.jsx";
import CourseSlider from "./components/Swiper/Swiper.jsx";
import CommunityStats from "./components/Communitystatus/communitystatus.jsx";
import Journey from "./components/Journey/Journey.jsx";
import About from "./components/About/About.jsx";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
   
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        background: "linear-gradient(to bottom, #3b6035 50%, #FFFFFF 50%)",
      }}
    >
      <TopNavbar />
    </div>

    <CourseSlider />
    <CommunityStats />
    <div className="center-container">
      <CourseTabs />
      <CourseList />
    </div>
    <div className="center-container"></div>
    <Goals />
    <Journey/>
    <Subscription />
   <About/>
    <Review />
    <Trends />
    <TrendingNow />
    <Story />
    <AppFooter />
    <AppFooter1/>


    <Routes>
        <Route path="/about" element={<About />} />
        
      </Routes>
    </Router>
  </StrictMode>
 
);


