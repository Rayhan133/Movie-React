import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SliderCard from "./SliderCard";
import "./style.css";

// import required modules
export default function MovieSliderCard({ title, data }) {
  const previousSlider = () => {
    const prev = document.querySelector(".swiper-button-prev");
    prev.click();
  };
  const nextSlider = () => {
    const next = document.querySelector(".swiper-button-next");
    next.click();
  };

  return (
    <div className="LatestMovies container text-white ">
      <div className="d-flex justify-content-between LatestMoviesTitleSection">
        <h1 className="LatestMoviesTitle">{title}</h1>
        <div className="mt-2 d-flex">
          <div className="box" onClick={previousSlider}>
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="box" onClick={nextSlider}>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-3">
        <Swiper
          navigation={true}
          autoplay={true}
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          loop={true}
          autoplaySpeed={1000}
          className="mySwiper"
        >
          {data.map((item) => {
            return (
              <div key={item.id}>
                <SwiperSlide>
                  <SliderCard item={item} />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
