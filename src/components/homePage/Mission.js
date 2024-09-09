import React from "react";
import styled from "styled-components";
import { OrangeBtn } from "../Button";
import { Link } from "react-router-dom";

const Mission = () => {

    const NatureTogether = styled.section`
        background: url('../images/bg-together.png');
        background-size: cover;
        background-repeat: no-repeat;
        padding: 50px 4.8rem 50px;
        text-align:center;
        min-height: 590px;

        .mission-group{
            width: 100%;
            max-width: 835px;
            gap: 40px;
            .title-box{
                text-align: center;
                color: white;
                .small{
                    font-size: 19px;
                    line-height:180%;
                    text-transform: uppercase;
                    font-weight: 400;
                }
                h3{
                    font-size: 48px;
                    line-height: 58px;
                    font-weight: 600;
                    color: white;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            background: url('../images/bg-together-mobile.png') no-repeat center center;
            background-size: cover;
            min-height: 440px;
            padding: 50px 20px 50px;
             .mission-group{
                gap: 12px;
                .title-box{
                    .small{
                        font-size: 17px;
                    }
                    h3{
                        font-size: 42px;
                        line-height: 52px;
                    }
                }

             }
            
        }
    `

    const PositiveImpact = styled.section`
        padding: 110px 4.8rem 110px;
        position: relative;
        text-align: center;
        background-color:${({ theme }) => theme.colors.title_green};
        .impact-info{
            max-width: 1065px;
            gap: 44px;
            h3{
                color: white;
            }
            .impact-group{
                .impact-info-numbers{
                    color: white;
                    gap: 12px;
                    .total-numbers-info{
                        font-size: 48px;
                        line-height: 58px;
                        font-weight: 600;
                        span{
                            font-size: 19px;
                            line-height: 27px;
                            display: block;
                        }
                    }
                    .short-info{
                        line-height: 180%;
                        font-weight: 400;
                    }

                }
                .green-info{
                    font-size: 19px;
                    line-height: 27px;
                    color: ${({theme})=>theme.colors.light_green};
                    font-weight: 500;
                    margin-top: 19px;
                }
            }
        }

        &::after{
            content: "";
            background: url('../images/hang-petal.png');
            background-size: 100% auto;
            background-repeat: no-repeat;
            position: absolute;
            width: 207px;
            height: 286px;
            right: -50px;
            top: -100px;
            z-index: 2;
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 37px 45px 46px;
            .impact-info{
                .grid{
                    gap:28px;
                    .impact-group{
                        .impact-info-numbers{
                            gap: 4px;
                            .total-numbers-info{
                                font-size: 42px;
                                line-height: 52px;
                                span{
                                    font-size: 17px;
                                    line-height: 25px;
                                }
                            }
                        }
                        .green-info{
                            margin-top: 24px;
                        }
                    }
                }
            }
            &::after{
                top: -65px;
                width: 145px;
            }
        }
    `

    return(
        <>
            <NatureTogether className="flex items-center justify-center">
                <div className="mission-group flex justify-center flex-col">
                    <div className="title-box">
                        <h5 className="small">OUR MISSION</h5>
                        <h3>Let's protect and regenerate nature together</h3>
                    </div>
                    <div className="learn-more">
                        <OrangeBtn>
                            <Link to="#">Learn more about us</Link>
                        </OrangeBtn>
                    </div>
                </div>
            </NatureTogether>

            <PositiveImpact>
                <div className="impact-info mx-auto flex flex-col">
                    <h3>Our positive impact for Nature</h3>
                    <div className="impact-group">
                        <div className="grid grid-three-column">
                            <div className="impact-info-numbers flex flex-col">
                                <div className="total-numbers-info">
                                    9,059
                                    <span>land managers</span>
                                </div>
                                <div className="short-info">receiving technical and financial recognition</div>
                            </div>
                            <div className="impact-info-numbers flex flex-col">
                                <div className="total-numbers-info">
                                    127,313
                                    <span>hectares</span>
                                </div>
                                <div className="short-info">of natural ecosystems protected and managed regeneratively</div>
                            </div>
                            <div className="impact-info-numbers flex flex-col">
                                <div className="total-numbers-info">
                                    180,010
                                    <span>tonnes</span>
                                </div>
                                <div className="short-info">of avoided deforestation and captured restoration carbon emissions</div>
                            </div>
                        </div>
                        <div className="green-info">100% dedicated to living landscapes</div>
                    </div>
                </div>
            </PositiveImpact>
        </>
    );    
}

export default Mission;