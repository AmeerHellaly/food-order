import React from "react";
import Slider from "react-slick";
import "../../../styles/slider.css";
import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          tempore reprehenderit fugiat aliquid asperiores assumenda sed
          explicabo voluptatibus quidem. Voluptas sunt facilis optio tempore
          quasi asperiores labore iure a provident.
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>John Deo</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          tempore reprehenderit fugiat aliquid asperiores assumenda sed
          explicabo voluptatibus quidem. Voluptas sunt facilis optio tempore
          quasi asperiores labore iure a provident.
        </p>
        <div className="slider__content  d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className="rounded" />
          <h6>Mitchel Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          tempore reprehenderit fugiat aliquid asperiores assumenda sed
          explicabo voluptatibus quidem. Voluptas sunt facilis optio tempore
          quasi asperiores labore iure a provident.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar " className=" rounded" />
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};
export default TestimonialSlider;
