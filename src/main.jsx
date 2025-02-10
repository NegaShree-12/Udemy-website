import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import TopNavbar from "./components/Topnavbar/Topnavbar.jsx";
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
import ContactForm from "./components/contact/contact.jsx";
import About from "./components/About/About.jsx";
import Aboutcontent from "./components/About/Aboutcontent.jsx";
import TrendingOnEdX from "./components/edxcard/edxcard.jsx";
import Team from "./components/About/Team.jsx";
import ScrollTop from "./components/Scrolltop/ScrollTop.jsx";
import Account from "./components/AccountCreater/Account.jsx";
import Tutorial from "./components/Tutorial/Tutorial.jsx";
import Login from "./components/Login/Login.jsx";

const MainPage = () => (
  <>
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
    <Journey />
    <Subscription />
    <Review />
    <Trends />
    <TrendingNow />
    <Story />
    <AppFooter />
    <AppFooter1 />
    <ScrollTop />
  </>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route
          path="/about"
          element={
            <>
              <TopNavbar />
              <About />
              <Aboutcontent />
              <Team />
              <AppFooter />
              <AppFooter1 />
            </>
          }
        />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Account />} />
      </Routes>
    </Router>
  </StrictMode>
);
