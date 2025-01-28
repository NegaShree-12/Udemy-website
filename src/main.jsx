import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Goals from "./components/Goals/Goals.jsx";
import TopNavbar from "./components/Topnavbar/Topnavbar.jsx";
import Trends from "./components/Trends/Trends.jsx";
import Subscription from "./components/Subscription/Subscription.jsx";
import Review from "./components/Review/Review.jsx";
import CourseSlider from "./components/Swiper/Swiper.jsx";
import CommunityStats from "./components/Communitystatus/communitystatus.jsx";
import TrendingOnEdX from "./components/edxcard/edxcard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
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
    <TrendingOnEdX />
    <div className="center-container"></div>
    <Goals />
    <Subscription />
    <Review />
    <Trends />
  </StrictMode>
);
