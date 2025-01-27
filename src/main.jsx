import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Goals from "./components/Goals/Goals.jsx";
import TopNavbar from "./components/Topnavbar/Topnavbar.jsx";
import Swiperslide from "./components/Swiper/Swiper.jsx";
import Trends from "./components/Trends/Trends.jsx";
import Subscription from "./components/Subscription/Subscription.jsx";
import Review from "./components/Review/Review.jsx";
import CourseTabs from "./components/Courses/course.jsx";
import CourseList from "./components/Courselist/Courselist.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TopNavbar />
    <div className="center-container">
      <Swiperslide />
      
      <CourseTabs />
      <CourseList />
      <Goals/>
    <Subscription/>
    <Review />
    <Trends/>
    </div>
   
  

    
  </StrictMode>
);
