import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./Footer.jsx";
import TopNavbar from "./components/Topnavbar/Topnavbar.jsx";
import Swiperslide from "./components/Swiper/Swiper.jsx";
import CourseTabs from "./components/Courses/course.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Navbar />
    <Footer /> */}
    <TopNavbar />
    <div className="center-container">
      <Swiperslide />
      <CourseTabs />
    </div>
  </StrictMode>
);
