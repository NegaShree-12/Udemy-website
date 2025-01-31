import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import TopNavbar from "./components/Topnavbar/Topnavbar.jsx";
import About from "./components/About/About.jsx";
import CourseSlider from "./components/Swiper/Swiper.jsx";  
import CommunityStats from "./components/Communitystatus/communitystatus.jsx";
import Goals from "./components/Goals/Goals.jsx";
import Journey from "./components/Journey/Journey.jsx";
import Subscription from "./components/Subscription/Subscription.jsx";
import Review from "./components/Review/Review.jsx";
import Trends from "./components/Trends/Trends.jsx";
import TrendingNow from "./components/Trendsnow/TrendingNow.jsx";
import Story from "./components/Story/Story.jsx";
import AppFooter from "./components/AppFooter/AppFooter.jsx";
import AppFooter1 from "./components/AppFooter1/AppFooter1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      {/* Top Navbar */}
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
      <Goals />
      <Journey />
      <Subscription />
      <Review />
      <Trends />
      <TrendingNow />
      <Story />
     
    

     

      <AppFooter />
      <AppFooter1 />
    </Router>
  </StrictMode>
);
