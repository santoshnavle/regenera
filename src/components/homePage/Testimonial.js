import React from "react";
import SlideReview from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {DarkGreenBtn, LightGreenBtn} from "../Button";

const Testimonials = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      
        responsive: [
        {
            breakpoint: 1023,
            settings: {
            className: "center",
            centerMode: true,
            centerPadding: "60px",
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            arrows:false,
            }
        },
    ]
        
    };

    const Testimonials = styled.section`
        background: rgba(221, 237, 208, 0.16);
        padding: 125px 4.8rem 93px;
        text-align:center;

        .two-cols{
            max-width: 100%;
            flex: 1;
            gap: 120px;
            .testimonal-slider{
                box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05);
                border-radius: 8px;
                width: 100%;
                max-width: 480px;
                .slide-box{
                    border-radius: 8px;
                    background-color:white;
                    padding: 40px 66px 66px;
                    box-sizing: border-box;
                    border-radius: 8px;
                    
                    .profile-info-parent{
                        gap: 18px;
                        .profile-img{
                            max-width: 120px;
                            text-align: center;
                            img{
                                border-radius: 50%;
                                max-width: 100%;    
                            }
                        }
                        .profile-info-quote{
                            font-size: 19px;
                            line-height: 1.3;
                            color: ${({ theme }) => theme.colors.title_green};
                            font-weight: 600;
                            gap: 5px;
                            .profile-name{
                                font-size: 16px;
                                font-weight: 400;
                                color:  ${({ theme }) => theme.colors.grey};;
                            }
                        }

                    }
                }
            }
            .testimonal-information{
                gap: 12px 0;
                text-align: left;
                max-width: 446px;
                .parent-info{
                    gap: 32px;
                    .testimonial-text{
                        line-height: 180%;
                        color: ${({theme}) => theme.colors.title_green};
                    }
                    .group-buttons-info{
                        gap: 12px 0;
                        .group-btns{
                            gap: 0 12px;
                            .action-btn{
                                padding: 0 35px;
                                width: 100%;
                                display: block;
                                text-wrap: nowrap;
                            }
                        }
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 24px 20px 60px;
            .two-cols{
                flex-wrap: wrap;
                gap: 40px;
                .testimonal-slider{
                    order: 1;
                    .slide-box{
                        padding: 20px 16px 20px;
                    }
                    background-color: white;
                }
                .testimonal-information{
                    order: 0;
                    .parent-info{
                        gap: 24px;
                        .group-buttons-info{
                            .group-btns{
                                flex-direction: column;
                                gap: 8px
                            }
                        }
                    }
                }
            }
        }
    `

    return(
        <Testimonials>
            <div className="two-cols flex justify-center items-center">
                <div className="testimonal-slider">
                    <SlideReview {...settings}>
                        {/* slider one */}
                        <div className="slide-box">
                           <div className="profile-info-parent flex flex-col">
                                <div className="profile-img mx-auto">
                                    <img alt="profile img" src="../images/Martin.png"/>
                                </div>
                                <div className="profile-info-quote flex flex-col">
                                    <div className="profile-quote">
                                        “It is important for us to be Regenera members because we firmly believe that the nature-based solutions it offers are the best solution for our business and the planet.”
                                    </div>
                                    <div className="profile-name">
                                        <strong>Martin Romero</strong> - General manager Explorandes
                                    </div>
                                </div>
                           </div>
                        </div>

                        <div className="slide-box">
                           <div className="profile-info-parent flex flex-col">
                                <div className="profile-img mx-auto">
                                    <img src="../images/Martin.png" alt="profile img"/>
                                </div>
                                <div className="profile-info-quote flex flex-col">
                                    <div className="profile-quote">
                                        “It is important for us to be Regenera members because we firmly believe that the nature-based solutions it offers are the best solution for our business and the planet.”
                                    </div>
                                    <div className="profile-name">
                                        <strong>Martin Romero</strong> - General manager Explorandes
                                    </div>
                                </div>
                           </div>
                        </div>
                    </SlideReview>
                </div>
                <div className="testimonal-information flex flex-col items-start">
                    <h3> Regenerating Nature is about teamwork </h3>
                    <div className="parent-info flex flex-col">
                        <div className="testimonial-text">
                            There has never been a more critical time for organisations to do the right thing. Becoming a Nature and climate-positive organisation does not happen overnight. It is a journey.  We're here to show you the way.
                        </div>
                        <div className="group-buttons-info flex flex-col">
                            <div className="group-btns flex justify-space-between">
                                <DarkGreenBtn className="action-btn">
                                    <Link to="#">Become a Partner</Link>
                                </DarkGreenBtn>
                                <LightGreenBtn className="action-btn">
                                    <Link to="#">Schedule a call</Link>
                                </LightGreenBtn>
                            </div>
                            <div className="button-info">Not a business or other organisation? Join as a <strong>person</strong> or as a <strong>land manager</strong>!</div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
           
        </Testimonials>
    );    
}

export default Testimonials;