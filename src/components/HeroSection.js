import React from "react";
import styled from "styled-components";

const HeroSection = ({title, titleline, titleafter, titleclass, paratext, paraclass, heroBg, heroImgM, heroImgD, alttxt}) => {

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
        .title-box{
            margin-bottom: 16px;
            h1{
                font-size: 48px;
                line-height: 58px;
                .border{
                    position: relative;
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
                        img{
                            width: 100%;
                        }
                    }
                }
            }
        }
    `
    const RightSection = styled.section`
    @media (max-width:${({ theme }) => theme.media.tab}){
        padding-left: 20px;
        min-width: 40%;
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
                        </span>&nbsp;{titleafter}</h1>
                </div>
                <div className={`content-box ${ paraclass }`}>
                    {paratext}
                </div>
            </LeftSection>

            <RightSection>
                <picture>
                    <source media="(max-width:768px)" srcset={heroImgM}/>
                    <img src={heroImgD} className="w-full" alt={alttxt}/>
                </picture>
            </RightSection>
        </HeroContainer>
    )
}

export default HeroSection;