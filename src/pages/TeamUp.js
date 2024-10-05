import React from "react";
import HeroSection from "../components/HeroSection";
import { OrangeBtn } from "../components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TeamUp = () => {
    const pragraph = [
        "Great, you'd like to take action!",
    ];

    // styled

    const TeamUpSection = styled.section`
        position: relative;
        .green-bg{
            align-items: flex-start;
            padding-top: 85px;
            background: #004532 url("../images/bg-texture-green.jpg") no-repeat center top;
            background-size: cover;
            margin-bottom: -4px;
            .title-box{
                margin-top: 35px;
            }
            .text-white{ 
                color: white;
                br{
                    display: none;
                }
            }
            .small-title {
                left: 0;
                top: 0;
            }
            .right-section{
                margin-bottom: -4px;
                margin-top: -85px;
            }
        }
        
        
        @media (max-width:${({ theme }) => theme.media.tab}){
            .green-bg{
                margin-bottom: 0;
                padding-bottom: 0;
                padding-top: 45px;
                gap: 0;
                width: 100%;
                .title-box{
                    text-align: center;
                    margin-bottom: 22px;
                }
                .small-title {
                    left: 20px;
                    width: auto;
                    top: 0;
                    right: 20px;
                    text-align: center;
                }
                .right-section{
                    display: none;
                }
            }
        }
    `
    const MultiColAction = styled.section`
        position: relative;
        .green-bg{
            background: #004532 url("../images/bg-texture-green.jpg") no-repeat center top;
            background-size: cover;
            min-height: 225px;
            .wrapper{
                max-width: 1275px;
                gap: 25px;
                position: absolute;
                left: 50%;
                top: -230px;
                transform: translateX(-50%);
                z-index:9;
                .col-box {
                    background-color: white;
                    padding: 40px;
                    border-radius: 20px;
                    min-height: 360px;
                    min-width: 406px;
                    p{
                        margin-top: 8px;
                    }
                    button{
                        margin-top: 16px;
                    }
                }
            }
        }

        @media (max-width:${({ theme }) => theme.media.tab}){
            .green-bg{
                padding: 0 22px 48px;
                .wrapper{
                    position: relative;
                    flex-wrap: wrap;
                    left: 0;
                    top: 0;
                    transform: none;
                    gap: 25px;
                    .col-box{
                        min-height: auto;
                        min-width: auto;
                        width: 100%;
                        padding: 20px;
                    }
                }
            }
        }
    `

  

    return (
        <TeamUpSection>
            <HeroSection
                title="How would you like to"
                titleline="team up?"
                titleclass="text-white"
                paratext = {pragraph}
                paraclass = "text-white small-title absolute"
                heroBg = "green-bg"
                heroImgD = "../images/bg-team-up.webp"
                alttxt = "TeamUp"
            />
            <MultiColAction>
                <div className="green-bg">
                    <div className="wrapper w-full mx-auto flex">
                        <div className="col-box text-center">
                            <h3>Footprint measurements</h3>
                            <p>Looking for a footprint measurement tailored to your organisation? Engage with one of our expert footprint advisors.</p>
                            <OrangeBtn className="w-full">
                                <Link to="#">Get in touch</Link>
                            </OrangeBtn>
                        </div>
                        <div className="col-box text-center">
                            <h3>Solve operational or sustainability challenges</h3>
                            <p>Need to solve an operational or sustainability challenge? Engage with one of our expert engineers.</p>
                            <OrangeBtn className="w-full">
                                <Link to="#">Get in touch</Link>
                            </OrangeBtn>
                        </div>
                        <div className="col-box text-center">
                            <h3>Positive Nature & climate actions</h3>
                            <p>Aiming to support positive Nature & climate actions? Connect and regenerate your footprint in a Regenera landscape.</p>
                            <OrangeBtn className="w-full">
                                <Link to="#">Get in touch</Link>
                            </OrangeBtn>
                        </div>
                    </div>
                    
                </div>
            </MultiColAction>
            
        </TeamUpSection>
    )
}

export default TeamUp;