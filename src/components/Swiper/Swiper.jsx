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
            <div className="image-wrapper">
              <img src={Singlewomen} alt="Slide 1" className="slide-image" />
            </div>
            <div className="text-box">
              <h2 className="animated-text">Learning that gets you</h2>
              <p className="animated-text">
                Skills for your present (and your future). Get started with us.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <div className="image-wrapper">
              <img src={Bothworking} alt="Slide 2" className="slide-image" />
            </div>
            <div className="text-box">
              <h2 className="animated-text">Another inspiring message</h2>
              <p className="animated-text">
                Empower yourself with knowledge and skills for success.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlides;
