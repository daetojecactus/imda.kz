import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "./TeamSlider.scss";
import "swiper/css/navigation";

export const TeamSlider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      speed={400}
      navigation
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="employee">
            <img
              src={slide.image}
              alt={slide.name}
              className="employee__image"
            />
            <div className="employee__info">
              <h3 className="employee__name">{slide.name}</h3>
              <p className="employee__descr">{slide.quote}</p>
              <p className="employee__position">{slide.position}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
