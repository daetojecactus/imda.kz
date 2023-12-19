import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "./PortfolioSlider.scss";
import "swiper/css/navigation";

export const PortfolioSlider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      loop={true}
      speed={400}
      centeredSlides={true}
      navigation
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="card">
            <img src={slide.image} alt={slide.title} className="card__image" />
            {/* <h4 className="card__title">{slide.title}</h4> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
