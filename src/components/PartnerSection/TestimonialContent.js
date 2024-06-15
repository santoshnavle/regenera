import React from "react";
import SlideReview from "react-slick";
import VideoPlayer from "../Video";
import { OrangeBtn } from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";


const VidTestimonial = ({
    titleBeforeborder, 
    titleBorder, 
    titleAfterborder, 
    paraText, 
    btnLink, 
    btnText,
    data,}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      
        responsive: [
        {
            breakpoint: 1023,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            arrows: false,
            dots: true,
            speed: 300,
            centerPadding: '35px',
            infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            arrows: false,
            dots: true,
            speed: 300,
            centerPadding: '35px',
            infinite: true,
            adaptiveHeight: true,
            }
        }
    ]};

    const VidTestimonial = styled.section`
        background: #004532 url("../images/bg-texture-green.jpg") no-repeat center top;
        background-size: cover;
        padding: 90px 4.8rem 93px;
        text-align:center;
        
        .two-cols{
            max-width: 100%;
            flex: 1;
            gap: 80px;
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
                                border: 3px solid #6EA44C;  
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
            .video-section{
                video{
                    width: 100%;
                    max-width: 596px;
                    height: auto;
                    border-radius: 8px;
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
        @media (max-width: 1170px) {
            padding: 24px 20px 60px;
            .two-cols{
                flex-wrap: wrap;
                gap: 40px;
                .testimonal-slider{
                    max-width: none;
                    order: 1;
                    box-shadow: none;
                    .slick-slider{
                        margin-left: -20px;
                        margin-right: -20px;
                        .slick-dots{
                            bottom:-30px;
                        }
                    }
                    .slick-slide>div{
                        margin: 0 8px;
                    }
                    .slide-box{
                        box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05);
                        padding: 20px 16px 20px;
                        .profile-info-parent{
                            display: inline-block;
                            .profile-img{
                                margin-bottom: 8px;
                            }
                            .profile-info-quote{
                                display: inline-block;
                                .profile-quote{
                                    margin-bottom: 4px;
                                }
                            }
                        }
                    }
                    .slick-center{
                        .profile-name{
                            margin-top: 6px;
                        }
                    }
                }
                .video-section{
                    margin-top: -50px;
                    video{
                        width: 100%
                    }
                }
                .testimonal-information{
                    order: 0;
                    text-align: center;
                    gap: 8px;
                    .parent-info{
                        gap: 24px;
                        .group-buttons-info{
                            .group-btns{
                                flex-direction: column;
                                gap: 8px;
                                .action-btn{
                                    margin: 0 auto;
                                    &:first-child{
                                        max-width: 211px;
                                    }
                                    &:last-child{
                                        max-width: 197px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `

    return(
        <VidTestimonial>
            <div className="two-cols flex justify-center items-center">
                {!titleBeforeborder && (
                    <VideoPlayer
                        thumbnail = "../images/video-thumb.webp" 
                        path = "../images/naturaleza.mp4" 
                        videoClass = "video-section"
                    />
                )}
                {titleBeforeborder && (
                    <div className="testimonal-information flex flex-col items-start">
                        <h1>{titleBeforeborder}
                            <span class="border">{titleBorder}
                            <img src="../images/title-border-small.png" alt="border"/>
                            </span>{titleAfterborder}
                        </h1>
                        
                        <div className="parent-info flex flex-col">
                            <div className="testimonial-text">
                                {paraText}
                            </div>
                            <div className="button-box">
                                <OrangeBtn>
                                    <Link to={btnLink}>{btnText}</Link>
                                </OrangeBtn>
                            </div>
                        </div>
                    </div>
                )}
                
                <div className="testimonal-slider">
                    <SlideReview {...settings}>
                        {data.map((item) =>(
                            <div className="slide-box">
                                <div className="profile-info-parent flex flex-col">
                                    <div className="profile-img mx-auto">
                                        <img alt="profile img" src={item.profileImg}/>
                                    </div>
                                    <div className="profile-info-quote flex flex-col">
                                        <div className="profile-quote">
                                            {item.profileQuote}
                                        </div>
                                        <div className="profile-name">
                                            <strong>{item.profileName}</strong> - {item.profilePost}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </SlideReview>
                </div>
            </div>
        </VidTestimonial>
    );    
}

export default VidTestimonial;