import React from "react";
import HeroSection from "../components/HeroSection";
import StepSlider from "react-slick";
import ImageWithText from "../components/ImageWithText";
import RangeOption from "../components/RangeSlide";
import { OrangeBtn } from "../components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Guardians = () => {

    // steps data ul li
    const listingdata = [
        {textintro: "After receiving an approval via e-mail from Regenera, you'll need to provide:"},
        {textinfo: 'Your ownership and management documents, so that we can register your land.'},
        {textinfo: 'A signed agreement.'},
        {textinfo: 'Bank details in Stripe so we can recognize your good work results.'}
    ]

    const lastStepData = listingdata.map((list) => {
        return(
            <>  
                {list.textintro && (<p>{list.textintro}</p>)}
                <div className="li-list"><strong>{list.strongText}</strong> {list.textinfo}</div>
            </>  
        )
    });

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

    
    

    // styled

    const GuardianSection = styled.section`
        .green-bg{
            background: #004532 url("../images/partner-bg.webp") no-repeat center top;
            background-size: cover;
            min-height: 500px;
            .text-white, .text-white p{ 
                color: white;
            }
            .cta{
                margin-top: 10px;
            }
            padding-bottom: 20px;
            padding-top: 20px;
            .right-section{
                img{
                    display: none;
                }
            }
        }
        .business-nature{
            background: #004532 url('../images/bg-texture-green.jpg') no-repeat;
            background-size: cover;
            .nature-img{
                gap: 20px;
                overflow:hidden;
                .picture-box{
                    margin-bottom: -5px;
                }
            }
            .content{
                text-align: center;
                padding-right: 4.8rem;
                .title-box{
                    max-width: 522px;
                    margin: 0 auto;
                    .small-title{
                        display:none;
                    }
                    h3{
                        font-size: 48px;
                        line-height: 58px;
                        color: white;
                    }
                }
                .button-box{
                    margin-top: 30px;
                }
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
                padding: 25px 0 0;
                gap: 0;
                .cta{
                    margin-top: 25px;
                    position: relative;
                    z-index: 999;
                }
            }
            .business-nature{
                .nature-img{
                    flex-direction: row;
                }
                .content{
                    text-align: center;
                    padding-right: 30px;
                    .title-box{
                        h3{
                            font-size: 28px;
                            line-height: 38px;
                        }
                    }
                    .button-box{
                        margin-top: 30px;
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.mobile}) {
            .green-bg{
                background-image: none;
                .right-section{
                    padding-left: 0;
                    margin-top: -30px;
                    img{
                    display: block;
                    }
                }
            }
            .business-nature{
                .nature-img{
                    flex-direction: column;
                }
                .content{
                    padding: 55px 20px 55px;
                }
            }
        }
    `
    const ProtectLand =  styled.section`
        padding: 70px 4.8rem 100px;
        text-align:center;
        position: relative;
        .protect-land-box{
            max-width: 414px;
            padding: 0 10px;
            .title-box{
                margin-bottom: 14px;
            }
            .range-box{
                margin-bottom: 45px;
            }
            .base{
                font-weight: 300;
                line-height: 150%;
                color: #004D37;
                margin-bottom: 14px;
            }
            button{
                max-width: 260px;
            }
        }
        &::before{
            content: "";
            background: url('../images/left-leaf.webp');
            background-size: 100% auto;
            background-repeat: no-repeat;
            position: absolute;
            width: 168px;
            height: 351px;
            right: auto;
            left: 0;
            top: 0px;
            z-index: 2;
        }
        &::after{
            content: "";
            background: url('../images/right-leaf.webp');
            background-size: 100% auto;
            background-repeat: no-repeat;
            position: absolute;
            width: 168px;
            height: 351px;
            right: 0;
            top: -100px;
            z-index: 2;
        }
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
            &::before{
                content: none;
            }
            .take-action-group{
                gap: 32px;
                .icon-text-container{
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 40px;
                }
                padding-bottom: 24px;
            }
        }
    `
    const HowitsWork =  styled.section`
        padding: 110px 4.8rem 100px;
        background-color: #f8fbf6;
        .title-box{
            margin-bottom: 60px;
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
            padding: 33px 0px 35px;
            .steps-how{
                .step-row{
                    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.07);
                    padding: 16px;
                    background-color: #fff;
                    margin-top: 20px;
                    margin: 20px 20px 35px;
                    border-radius: 8px;
                    .img-text{
                        .picture-box{
                            align-self: center;
                        }
                    }
                }
                .slick-slider{
                    padding-bottom: 45px;
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
                    bottom: 0px;
                    top: auto;
                    z-index: 99;
                    transform: translate(0);
                }
                .slick-next{
                    right: 15px;
                    &::before{
                        content: none;
                    }
                }
                .slick-prev{
                    left: 15px;
                    &::before{
                        content: none;
                    }
                }
                .slick-disabled{
                    background: #CECECE;
                }
                .slick-dots{
                    bottom: 43px;
                }
                .faq-link{
                    padding-left:20px;
                    margin-top:28px;
                    a{
                        display:block;
                    }
                }
            }
        }
    `

    return (
        <GuardianSection>
            <HeroSection
                title="We can't regenerate Nature without your"
                titleline="support"
                titleclass="text-white"
                paratext = "para text here"
                paraclass = "text-white"
                heroBg = "green-bg"
                heroImgM = "../images/partners-hero-m.webp"
                alttxt = "Partners"
                orangeBtn
                btnText = "Sign up" 
                btnLink = "#"
            />
            <ProtectLand>
                <div className="protect-land-box flex justify-start flex-col mx-auto">
                    <div className="title-box">
                        <h2>Protect your land and receive up to</h2>
                    </div>
                    <RangeOption RangeClass="range-box"/>
                    <p className="base small">Based on your location</p>
                    <OrangeBtn className="mx-auto"><Link to="#">Sign up as Guardian</Link></OrangeBtn>
                </div>
            </ProtectLand>
            <HowitsWork>
                <div className="title-box text-center">
                    <h2>How it works</h2>
                </div>
                <div className="steps-how mx-auto relative">
                    <StepSlider {...stepSettings}>
                        <ImageWithText
                            section = "step-row"
                            Image = "../images/b-corp-regenera-1.webp" 
                            imgWithClass = "img-text"
                            contentBox = "text-section"
                            imgBoxClass="picture-box"
                            smallTitle = "Step 1"
                            firstTitle = "Join and sign the Letter of Intent"
                            text = "Express your interest in working with us and choose your role: communities, cooperatives, and associations can join as Collective Guardians; individuals, families, and companies can join as Individual Guardians; and concession holders can join as Concessionaire Guardians."
                        />
                        <ImageWithText
                            section = "step-row"
                            Image = "../images/b-corp-regenera-2.webp" 
                            imgWithClass = "img-text"
                            contentBox = "text-section"
                            imgBoxClass="picture-box"
                            smallTitle = "Step 2"
                            firstTitle = "Add your details, sign & upload documents"
                            text = {lastStepData}
                        />
                        <ImageWithText
                            section = "step-row"
                            Image = "../images/b-corp-regenera-3.webp" 
                            imgWithClass = "img-text"
                            contentBox = "text-section"
                            imgBoxClass="picture-box"
                            smallTitle = "Step 3"
                            firstTitle = "Lead the way towards Nature & Climate positive action"
                            text = "It's time to measure your footprint. If you do not yet know your carbon or environmental footprint, or would like it updated, use our Calculator or schedule a call with one of our Expert advisors."
                        />
                    </StepSlider>
                </div>
            </HowitsWork>
        </GuardianSection>
    )
}

export default Guardians;