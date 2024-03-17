import React from "react";
import "../slick-slider-css/slick.min.css";
import "../slick-slider-css/slick-theme.min.css";
import Slider from "react-slick";
import { OrangeBtn } from "./Button";
import styled from "styled-components";

const fadeSlide = () => {

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const SliderSection = styled.section`
    position: relative;
    .slide-box {
      position: relative;
      img {
        max-width: 100%;
      }
    }
    .signup-button-frame{
      position: absolute;
      max-width: 470px;
      padding: 0 0 0 4.8rem;
      z-index: 2;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      
      .header-frame{
        align-self: stretch;
        align-items: flex-start;
        gap: 16px 0;
      }

      .make-nature-your-business-container{    
        margin: 0;
        align-self: stretch;
        position: relative;
        font-size: 48px;
        line-height: 58px;
        font-weight: 600;
        color: ${({theme}) => theme.colors.white}
      }
      .we-help-organisations{
        font-size: 18px;
        color: ${({theme}) => theme.colors.white};
        font-weight: normal;
        line-height:160%;
      }
    }
  `

  return (
    <SliderSection>
      <div className="slider-container">
        {/* slider content */}
        <div class="signup-button-frame">
          <div class="header-frame flex flex-col justify-start">
            <h1 class="make-nature-your-business-container">
              Make Nature<br/>your business
            </h1>
            <div class="we-help-organisations">
              We help organisations measure, reduce, and transform their
              environmental impact. This enables us to work with
              communities and other land managers to protect and restore
              their landscapes. Together, we regenerate Nature and
              climate.
            </div>
            <OrangeBtn class="button1">
              <b class="sign-up1">Sign up</b>
            </OrangeBtn>
            
          </div>
        </div>
        {/* slider content end */}
        <Slider {...settings}>
          <div className="slide-box">
            <img src="./images/sliders/slider-image.png" />
          </div>
          <div className="slide-box">
            <img src="./images/sliders/slider-image.png" />
          </div>
        </Slider>
      </div>
    </SliderSection>
  );
};

export default fadeSlide;
