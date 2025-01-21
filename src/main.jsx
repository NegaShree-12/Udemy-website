import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./Footer.jsx";
import Goals from "./components/Goals/Goals.jsx";
import TopNavbar from "./components/Topnavbar/Topnavbar.jsx";
import Swiperslide from "./components/Swiper/Swiper.jsx";
import Subscription from "./components/Subscription/Subscription.jsx";
import Review from "./components/Review/Review.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Navbar />
    <Footer /> */}
    <TopNavbar />
    <div className="center-container">
      <Swiperslide />
    </div>
    <Goals/>
    <Subscription/>
    <Review />
    

  </StrictMode>
);
