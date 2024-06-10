import React from "react";
import HeroSection from "../components/HeroSection";
import IconWithText from "../components/iconWithText";
import VidTestimonial from "../components/PartnerSection/TestimonialContent";
import ImageWithText from "../components/ImageWithText";
import StepSlider from "react-slick";
import CompanyLogos from "../components/CompanyLogos";
import ToJoin from "../components/aboutUs/ReadytoJoin";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Partner = () => {

    const paras = [
        "Our team enables your organisation to have a positive impact on nature, climate, and communities. This is achieved through our partnerships with local land managers who receive technical assistance and monthly financial support to protect and restore natural landscapes.",
    ];
    const pragraph = paras.map((para) => <p>{para}</p>)
    // testimonial slider data
    const testimonialData = [
        {id:1, profileImg : 'https://www.shareicon.net/data/2016/07/05/791221_man_512x512.png', profileQuote: '"With Regenera I support the partnership of Andean and Amazonian forests in Peru, by compensating my footprint and supporting the people that live in those landscapes."', profileName: 'Martin Romero', profilePost: 'General manager Explorandes'},
        {id:2, profileImg : 'https://www.shareicon.net/data/2016/07/05/791221_man_512x512.png', profileQuote: '"With Regenera I support the partnership of Andean and Amazonian forests in Peru, by compensating my footprint and supporting the people that live in those landscapes."', profileName: 'Martin Romero', profilePost: 'General manager Explorandes'},
        {id:3, profileImg : 'https://www.shareicon.net/data/2016/07/05/791221_man_512x512.png', profileQuote: '"With Regenera I support the partnership of Andean and Amazonian forests in Peru, by compensating my footprint and supporting the people that live in those landscapes."', profileName: 'Martin Romero', profilePost: 'General manager Explorandes'},
    ];

    // steps data ul li
    const listingdata = [
        {textintro: 'Choose your role and multiply your impact as a:'},
        {strongText: 'Product partner:', textinfo: 'incorporate Regenera into your products to deliver greater value to your clients.'},
        {strongText: 'Impact partner:', textinfo: 'develop public goods and commons in collaboration with Regenera'},
        {strongText: 'Landscape partner:', textinfo: 'implement  incentives for Regenera land managers to protect and restore nature.'}
    ]

    const lastStepData = listingdata.map((list) => {

        return(
            <>  
                {list.textintro && (<p>{list.textintro}</p>)}
                <div className="li-list"><strong>{list.strongText}</strong> {list.textinfo}</div>
            </>  
        )
    })

    // step slider setting
    const stepSettings = {
        responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1023,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            speed: 300,
            infinite: false,
            adaptiveHeight: true,
            }
        },]
    };

    

    // company logos
    const sliderDataOne = [
        { id: 1, img: '../images/company-logo/image 43.png' },
        { id: 2, img: '../images/company-logo/image 44.png' },
        { id: 3, img: '../images/company-logo/image 21.png' },
        { id: 4, img: '../images/company-logo/image 39.png' },
        { id: 5, img: '../images/company-logo/image 37.png' },
        { id: 6, img: '../images/company-logo/image 25.png' },
        { id: 7, img: '../images/company-logo/image 43.png' },
        { id: 8, img: '../images/company-logo/image 44.png' },
        { id: 9, img: '../images/company-logo/image 21.png' },
        { id: 10, img: '../images/company-logo/image 39.png' },
    ];

    const sliderDataTwo = [
        { id: 1, img: '../images/company-logo/image 22.png' },
        { id: 2, img: '../images/company-logo/image 23.png' },
        { id: 3, img: '../images/company-logo/image 24.png' },
        { id: 4, img: '../images/company-logo/image 16.png' },
        { id: 5, img: '../images/company-logo/image 42.png' },
        { id: 6, img: '../images/company-logo/image 38.png' },
        { id: 7, img: '../images/company-logo/image 22.png' },
        { id: 8, img: '../images/company-logo/image 23.png' },
        { id: 9, img: '../images/company-logo/image 24.png' },
        { id: 10, img: '../images/company-logo/image 38.png' },
    ];

    const slidersetting = {
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: true,
        cssEase: 'linear',
        arrows: false,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                }
            },
        ]
    };
    const slidersetting2 = {
        ...slidersetting,
        speed: 10000,
    };
    

    // styled

    const PartnerSection = styled.section`
        .green-bg{
            background: #004532 url("../images/bg-texture-green.jpg") no-repeat center top;
            background-size: cover;
            margin-bottom: -4px;
            .text-white, .text-white p{ 
                color: white;
            }
            .right-section{
                margin-bottom: -4px;
            }
            .cta{
                margin-top: 10px;
            }
        }
        .company-group{
            gap: 35px !important;
            .company-logo-container{
                .co-logo{
                    height: 80px !important;
                    padding: 0 40px !important;
                    display: flex !important;
                    align-items: center !important;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .green-bg{
                margin-bottom: 0;
                padding-bottom: 0;
                gap: 0;
                .cta{
                    margin-top: 25px;
                    position: relative;
                    z-index: 999;
                }
                .right-section{
                    padding-left: 0;
                    margin-bottom: -5px;
                    margin-top: -20px;
                }
            }
        }
    `
    const WhyJoinMission =  styled.section`
        padding: 70px 4.8rem 110px;
        text-align:center;
        .take-action-group{
            max-width: 1200px;
            width: 100%;
            flex: 1;
            gap: 50px 0;

            .title-box{
                max-width: 630px;
                margin: 0 auto;
            }
            .icon-text-container{
                align-self: stretch;
                gap: 20px;
                .iconFrame-box{
                    &:after{
                        content: none;
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 56px 20px 42px;
            .take-action-group{
                gap: 32px;
                .icon-text-container{
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 40px;
                }
            }
        }
    `
    const HowitsWork =  styled.section`
        padding: 110px 4.8rem 100px;
        background-color: #f8fbf6;
        .title-box{
            .arrow-img{
               margin: 5px 0;
            }
        }
        .steps-how{
            max-width: 1065px;
            .regular{
                display: flex;
                flex-direction: column;
                gap: 100px;
            }
            .img-text{
                align-items: flex-start;
                 .picture-box{
                    flex: 1 0 auto;
                    img{
                        border-radius: 8px;
                    }
                }
            }
            .text-section{
                color: ${({ theme }) => theme.colors.text_color};
                line-height: 180%;
                margin-top: 16px;
                .li-list{
                    position: relative;
                    padding-left: 20px;
                    &:first-child{
                        display: none;
                    }
                    &::before{
                        content: "•";
                        position: absolute;
                        left: 0;
                        top: -2px;
                        font-size: 30px;
                    }
                }
            }
        }
        
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 33px 20px 35px;
            .steps-how{
                .step-row{
                    padding: 16px;
                    background-color: #fff;
                    margin-top: 20px;
                    .img-text{
                        .picture-box{
                            align-self: center;
                        }
                    }
                }
                .slick-next, .slick-prev{
                    width: auto;
                    height: 45px;
                    border-radius: 30px;
                    color: #fff;
                    padding: 8px 39px;
                    font-size: 16px;
                    font-weight: 600;
                    background: #6EA44C;
                    bottom: 0;
                    top: auto;
                    z-index: 99;
                    transform: translate(0);
                }
                .slick-next{
                    right: 0;
                    &::before{
                        content: none;
                    }
                }
                .slick-prev{
                    left: 0;
                    &::before{
                        content: none;
                    }
                }
                .slick-disabled{
                    background: #CECECE;
                }
            }
           
        }
    `

    return (
        <PartnerSection>
            <HeroSection
                title="We can't regenerate Nature without your"
                titleline="support"
                titleclass="text-white"
                paratext = {pragraph}
                paraclass = "text-white"
                heroBg = "green-bg"
                heroImgM = "../images/partners-hero-m.png"
                heroImgD = "../images/partners-hero-d.png"
                alttxt = "Partners"
                orangeBtn
                btnText = "Sign up" 
                btnLink = "#"
            />
            <WhyJoinMission>
                <div className="take-action-group flex justify-start flex-col mx-auto">
                    <div className="title-box">
                        <h2>Reasons why companies like yours joined our mission</h2>
                    </div>
                    <div className="icon-text-container flex justify-space-between flex-row items-start">
                        <IconWithText
                            icon = {"../images/icons/hand-plant-icon.svg"}  
                            title="Become part of the solution by truly making an impact"
                            text= "Become part of a community that empowers us all to care for the places and Nature we love."
                        />
                        <IconWithText
                            icon = {"../images/icons/plan-choose-icon.svg"}  
                            title="Receive practical expert advice on your path to Net Zero"
                            text= "Our experts share their knowledge and help you craft your way to reducing your company's footprint."
                        />
                        <IconWithText
                            icon = {"../images/icons/lead_icon.svg"}  
                            title="Lead for greater impact"
                            text= "Become a leader of the future by sharing your progress and setting an example for others."
                        />
                    </div>
                </div>
            </WhyJoinMission>
            <VidTestimonial
                data = {testimonialData}
            />
            <HowitsWork>
                <div className="title-box text-center">
                    <h2>How it works</h2>
                    <img src="../images/down-arrow.svg" className="hide-mobile arrow-img" alt="arrow"/>
                </div>
                <div className="steps-how mx-auto relative">
                    <StepSlider {...stepSettings}>
                        <ImageWithText
                            section = "step-row"
                            Image = "../images/step1.png" 
                            imgWithClass = "img-text"
                            contentBox = "text-section"
                            imgBoxClass="picture-box"
                            smallTitle = "Step 1"
                            firstTitle = "Choose your regenerative Plan and the Landscape you wish to support"
                            text = "It's time to measure your footprint. If you do not yet know your carbon or environmental footprint, or would like it updated, use our Calculator or schedule a call with one of our Expert advisors."
                        />
                        <ImageWithText
                            section = "step-row"
                            Image = "../images/step2.png" 
                            imgWithClass = "img-text"
                            contentBox = "text-section"
                            imgBoxClass="picture-box"
                            smallTitle = "Step 2"
                            firstTitle = "Improve your operational performance & reduce your footprint"
                            text = "It's time to measure your footprint. If you do not yet know your carbon or environmental footprint, or would like it updated, use our Calculator or schedule a call with one of our Expert advisors."
                        />
                        <ImageWithText
                            section = "step-row"
                            Image = "../images/step3.png" 
                            imgWithClass = "img-text"
                            contentBox = "text-section"
                            imgBoxClass="picture-box"
                            smallTitle = "Step 3"
                            firstTitle = "Lead the way towards Nature & Climate positive action"
                            text = {lastStepData}
                        />
                    </StepSlider>
                    <div className="faq-link">Want to learn more? <Link to="#">Check our FAQ</Link></div>
                </div>
            </HowitsWork>
            
            <CompanyLogos 
                title = "Get to know the Regenera network!"
                settings = {slidersetting}
                settingsTwo = {slidersetting2}
                data = {sliderDataOne}
                datatwo = {sliderDataTwo}
            />
            <ToJoin/>
        </PartnerSection>
    )
}

export default Partner;