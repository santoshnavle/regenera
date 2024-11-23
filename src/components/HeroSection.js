import React from "react";
import styled from "styled-components";
import VideoPlayer from "./Video";
import { Link } from "react-router-dom";
import { OrangeBtn } from "./Button";

const HeroSection = ({title, titleline, titleafter, titleclass, paratext, paraclass, heroBg, heroImgM, heroImgD, isVideo, videoPath, videoThumbnail, videoThumbnailM, alttxt, orangeBtn, btnText, btnLink,}) => {
    const HeroContainer = styled.section`
    padding-left:4.8rem;
    gap: 80px;
    position: relative;
    @media (max-width:${({ theme }) => theme.media.tab}){
        margin-top: 66px;
        padding: 25px 0 35px;
        gap: 30px;
    }
    @media (max-width:${({ theme }) => theme.media.mobile}){
        flex-direction: column;
    }
    `
    const LeftSection = styled.section`
        max-width: 522px;
        position: relative;
        .title-box{
            margin-bottom: 16px;
            h1{
                font-size: 48px;
                line-height: 58px;
                .border{
                    position: relative;
                    height: 58px;
                    display:inline-block;
                    margin-right: 10px;
                    img{
                        position: absolute;
                        bottom: -3px;
                        left: 0;
                        width: 100%;
                    }
                }
            }
        }
        .content-box{
            p{
                margin-top: 16px;
                color: ${({ theme }) => theme.colors.text_color};
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            max-width: 100%;
            width: 100%;
            padding: 0 20px;
            .title-box{
                margin-bottom: 12px;
                h1{
                    font-size: 38px;
                    line-height: 52px;
                    br{
                        display: none;
                    }
                    .border{
                        height: 50px;
                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }
    `
    const RightSection = styled.section`
        .isvideo{
            max-width: 100%;
            .video-section{
                border-radius: 8px;
                padding-right: 30px;
                box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
                video{
                    width: 100%;
                    border-radius: 8px;
                }
                .thumbnail-box{
                    margin-bottom:-5px;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            padding-left: 20px;
            min-width: 40%;
            .isvideo{
                min-width: 100%;
                margin-top: 75px;
                .video-section{
                    margin-right: 20px;
                    border-radius: 20px;
                    video{
                        width: 100%;
                    }
                }
                padding-bottom: 25px;
            }
            @media (max-width:${({ theme }) => theme.media.mobile}){
                min-width: 100%;
            }
        }
    `

    return (
        <HeroContainer className={`flex items-center justify-space-between ${heroBg}`}>
            <LeftSection>
                <div className="title-box">
                    <h1 className={titleclass}>{title} <br/>
                        <span className="border">
                            {titleline} 
                            <img src="./images/title-border-line.svg" alt="border"/>
                        </span>{titleafter}</h1>
                </div>
                <div className={`content-box ${ paraclass }`}>
                    {paratext}
                </div>
                { orangeBtn && (
                    <OrangeBtn className="cta">
                        <Link to={btnLink}>{btnText}</Link>
                    </OrangeBtn>
                )}
            </LeftSection>

            <RightSection className="right-section">
                {isVideo ? 
                        <div className="isvideo">
                            <VideoPlayer
                                thumbnailD = {videoThumbnail}
                                thumbnailM = {videoThumbnailM}
                                path = {videoPath} 
                                playbtn="./images/play-btn-green.webp"
                                videoClass = "video-section flex items-center"
                            />
                        </div> : 
                        <picture>
                            <source media="(max-width:768px)" srcset={heroImgM}/>
                            <img src={heroImgD} className="w-full" alt={alttxt}/>
                        </picture>
                }
            </RightSection>
        </HeroContainer>
    )
}

export default HeroSection;