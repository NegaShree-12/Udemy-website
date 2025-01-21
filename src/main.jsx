import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./pages/Navbar.jsx";
import Footer from "./Footer.jsx";
import Goals from "./components/Goals/Goals.jsx";
import TopNavbar from "./components/Topnavbar/Topnavbar.jsx";
import Swiperslide from "./components/Swiper/Swiper.jsx";
<<<<<<< HEAD
import Trends from "./components/Trends/Trends.jsx";
=======
import Subscription from "./components/Subscription/Subscription.jsx";
import Review from "./components/Review/Review.jsx";
>>>>>>> e1bece33ac2ee39248dc3e63fd753be418f085f3

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Navbar />
    <Footer /> */}
    <TopNavbar />
    <div className="center-container">
      <Swiperslide />
    </div>
<<<<<<< HEAD
    <Trends/>
=======
    <Goals/>
    <Subscription/>
    <Review />
    

>>>>>>> e1bece33ac2ee39248dc3e63fd753be418f085f3
  </StrictMode>
);
