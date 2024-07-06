import React from "react";
import { OrangeBtn } from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LandscapSlider from "react-slick";
import { IoIosInformationCircle } from "react-icons/io";

const StepTwo = ({classname}) => {

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
    
    const PlanList = [
        {impactIc: '../images/icons/map-icon.svg', listTxt: '<b>1,842+</b> manicured hectares'},
        {impactIc: '../images/icons/leaf-icon.svg', listTxt: '<b>127+</b> hectares of peat and forest under restoration'},
        {impactIc: '../images/icons/cotton-icon.svg', listTxt: '<b>1,500+</b> trees planted'},
    ];

    const StepTwoSection = styled.section`
        margin-top: 60px;
        width: 100%;
        max-width: 630px;
        .fee-n-box{
            .fee{
                line-height: 180%;
            }
            .tooltip-box{
                top: 35px;
                right: 0;
                background-color: white;
                z-index: 9;
                line-height: 150%;
            }
        }
        .select-landscape-box{
            .select-box{
                max-width: 305px;
            }
        }
        .landscape-slider-container{
            margin-top: 35px;
            .slide-box{
                padding: 12px 16px;
            }
            .img-n-content{
                display: flex;
                box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.07);
                border-radius: 8px;
                .img-box{
                    img{
                        border-radius: 8px;
                        min-width: 217px;
                    }
                }
                .content-box{
                    padding: 24px 32px;
                    border-radius: 8px;
                    background-color: white;
                    z-index: 9;
                    left: -18px;
                    .title-n-text{
                        padding-bottom: 20px;
                        border-bottom: 1px solid #F6F6F6;
                        h4{
                            font-size: 19px;
                            line-height: 27px;
                            margin-bottom: 8px;
                        }
                        p{
                            line-height: 180%;
                        }
                    }
                    .list{
                        padding-top: 20px;
                        li{
                            line-height: 28px;
                            margin-top: 8px;
                            gap: 12px;
                            &:first-child{
                                margin-top: 0;
                            }
                            .icon-box{
                                min-width: 26px;
                                text-align: center;
                            }
                        }
                    }
                }
            }
            .slick-dots{
                bottom: -30px;
            }
        }
        .cta{
            position: relative;
            top: -60px;
            left: 68px;
            padding: 0 14px;
            max-width: 305px;
            margin-top: 20px;
            margin-bottom: 7px;
            text-align: center;
            button{
                width: 100%;
            }
            
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {  
            .select-landscape-box{
                margin-top: 35px;
                .select-box{
                    padding: 0 20px;
                    max-width: 305px;
                }
            }
            .landscape-slider-container{
                margin-top: 15px;
                margin-left: -20px;
                margin-right: -20px;
                .slide-box{
                    padding: 12px;
                }
                .img-n-content{
                    flex-direction: column;
                    .content-box{
                        padding: 16px;
                        top: -18px;
                        left: 0;
                        .title-n-text{
                            padding-bottom: 12px;
                            border-bottom: 1px solid #F6F6F6;
                            h4{
                                margin-bottom: 5px;
                            }
                            p{
                                margin-top: 0;
                                line-height: 180%;
                            }
                        }
                        .list{
                            padding-top: 12px;
                        }
                    }
                }
            }
            .fee-n-box{
                margin-top: 50px;
                .tooltip-box{
                    bottom: 35px;
                    top: auto;
                }
            }
            .cta{
                position: static;
                top: 0px;
                left: 0px;
            }
        }
        @media (max-width: 850px) {
            max-width: none;
            width: 100%;
        }
    `

    return(
        <StepTwoSection className={`mx-auto flex flex-col ${classname}`}>
            <div className="fee-n-box w-full box-shadow absolute hide-tab">
                <div className="fee flex items-center justify-space-between">
                    <div className="small-txt small">Monthly fee</div>
                    <div className="big-txt flex items-center small">
                        $5 <Link className="tooltip-ic"><IoIosInformationCircle/></Link>
                        <div className="tooltip-box">
                            Your card details are safely secured within Stripe.
                        </div>
                    </div>
                </div>
                <div className="fee flex items-center justify-space-between">
                    <div className="small-txt small">Impact</div>
                    <div className="big-txt flex items-center small">1000 hectares/y</div>
                </div>
            </div>
            <div className="form-title">
                Select your landscape
                <div className="title-info text-center show-mobile">
                    Pick where you want to support.
                </div>
            </div>
            <form action="">
                <div className="select-landscape-box">
                    <div className="select-box">
                        <select className="form-control">
                            <option value="">select</option>
                            <option value="someOption">Some option</option>
                            <option value="otherOption">Other option</option>
                        </select>
                    </div>
                </div>
                <div className="landscape-slider-container">
                    <LandscapSlider {...settings}>
                        {/* slider 1 */}
                        <div className="slide-box">
                            <div className="img-n-content">
                                <div className="img-box">
                                    <picture>
                                        <source media="(max-width:1023px)" srcset="../images/image34-m.webp"/>
                                        <img src="../images/image34.webp" className="w-full" alt=""/>
                                    </picture>   
                                </div>
                                <div className="content-box relative">
                                    <div className="title-n-text">
                                        <h4 className="title">Cañete Landscape</h4>
                                        <p>The Cañete River is one of the most important rivers in the Lima region.</p>
                                    </div>
                                <ul className="list">
                                        {PlanList.map((item) => (
                                            <li className="flex items-center">
                                                <div className="icon-box flex justify-center items-center">
                                                    <img src={item.impactIc} alt={item.listTxt}/>
                                                </div>
                                                <span className="list-txt" dangerouslySetInnerHTML={{__html:item.listTxt}}/>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        {/* slider 2 */}
                        <div className="slide-box">
                            <div className="img-n-content">
                                <div className="img-box">
                                    <picture>
                                        <source media="(max-width:1023px)" srcset="../images/image34-m.webp"/>
                                        <img src="../images/image34.webp" className="w-full" alt=""/>
                                    </picture>   
                                </div>
                                <div className="content-box relative">
                                    <div className="title-n-text">
                                        <h4 className="title">Cañete Landscape</h4>
                                        <p>The Cañete River is one of the most important rivers in the Lima region.</p>
                                    </div>
                                    <ul className="list">
                                        {PlanList.map((item) => (
                                            <li className="flex items-center">
                                                <div className="icon-box flex justify-center items-center">
                                                    <img src={item.impactIc} alt={item.listTxt}/>
                                                </div>
                                                <span className="list-txt" dangerouslySetInnerHTML={{__html:item.listTxt}}/>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </LandscapSlider>
                </div>
                {/* fee related box and tooltip */}
                <div className="fee-n-box w-full box-shadow relative show-tab">
                    <div className="fee flex items-center justify-space-between">
                        <div className="small-txt small">Monthly fee</div>
                        <div className="big-txt flex items-center small">
                            $5 <Link className="tooltip-ic"><IoIosInformationCircle/></Link>
                            <div className="tooltip-box">
                                Your card details are safely secured within Stripe.
                            </div>
                        </div>
                    </div>
                    <div className="fee flex items-center justify-space-between">
                        <div className="small-txt small">Impact</div>
                        <div className="big-txt flex items-center small">1000 hectares/y</div>
                    </div>
                </div>
                <div className="cta mx-auto">
                    <OrangeBtn>
                        Select and coninue
                    </OrangeBtn>
                </div>
            </form>
            <div className="step-nav flex mx-auto">
                <div className="bullet"></div>
                <div className="bullet current"></div>
                <div className="bullet"></div>
                <div className="bullet"></div>
            </div>
        </StepTwoSection>
    );    
}

export default StepTwo;