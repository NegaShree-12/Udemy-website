import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TopNavbar from "./components/Topnavbar/Topnavbar.jsx";
import Swiperslide from "./components/Swiper/Swiper.jsx";
import CourseTabs from "./components/Courses/course.jsx";
import CourseList from "./components/Courselist/Courselist.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TopNavbar />
    <div className="center-container">
      <Swiperslide />
      <CourseTabs />
    </div>
    <CourseList />
  </StrictMode>
);
