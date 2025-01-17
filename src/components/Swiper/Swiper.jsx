import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Singlewomen from "../../assets/singlewomen.avif";
import Bothworking from "../../assets/bothworking.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "./Swiper.css";

const SwiperSlides = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="slide">
            <img src={Singlewomen} alt="Slide 1" className="slide-image" />
            <div className="text-box">
              <h2>Learning that gets you</h2>
              <p>
                Skills for your present (and your future). Get started with us.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Bothworking} alt="Slide 2" className="slide-image" />
            <div className="text-box1">
              <h2>Another inspiring message</h2>
              <p>Empower yourself with knowledge and skills for success.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlides;
