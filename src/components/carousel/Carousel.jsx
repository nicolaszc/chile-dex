import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './carousel.css'

function Carousel({ children }) {
    var settings = {
      dots: true,
      arrows:false,
      infinite: true,
      speed: 500,
      centerMode:true,
      centerPadding:30,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {children}
      </Slider>
    );
  }
  export default Carousel