import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./pages/Navbar.jsx";


import Goals from "./components/Goals/Goals.jsx";
import TopNavbar from "./components/Topnavbar/Topnavbar.jsx";
import Trends from "./components/Trends/Trends.jsx";
import Subscription from "./components/Subscription/Subscription.jsx";
import Review from "./components/Review/Review.jsx";
import TrendingNow from "./components/Trendsnow/TrendingNow.jsx";
import Story from "./components/Story/Story.jsx";
import AppFooter from "./components/AppFooter/AppFooter.jsx";

import CourseTabs from "./components/Courses/course.jsx";
import CourseList from "./components/Courselist/Courselist.jsx";
import CourseSlider from "./components/Swiper/Swiper.jsx";
import CommunityStats from "./components/Communitystatus/communitystatus.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TopNavbar />
    <div className="center-container">
      <CourseTabs />
      <CourseList />
    </div>

    <Goals />
    <Subscription />
    <Review />
    <Trends />
    <TrendingNow />
    <Story />
    <AppFooter />

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
  </StrictMode>
);


