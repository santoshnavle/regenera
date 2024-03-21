import React from "react";
import styled from "styled-components";

const HeroSection = () => {

    const HeroContainer = styled.section`
    padding-left:4.8rem;
    gap: 80px;
    position: relative;
        /* &::after{
            content: " ";
            background-image: url("./images/hero-leaf");
            background-size: 100% auto;
            width: 104px;
            height: 178px;
        } */
    `
    const LeftSection = styled.section`
        max-width: 522px;
        .title-box{
            margin-bottom: 16px;
            h1{
                .border{
                    position: relative;
                    img{
                        position: absolute;
                        bottom: -3px;
                        left: 0;
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
    `
    const RightSection = styled.section`
    `

    return (
        <HeroContainer className="flex items-center justify-space-between">
            <LeftSection>
                <div className="title-box">
                    <h1>We protect and&nbsp;
                        <span className="border">
                            regenerate 
                            <img src="./images/title-border-line.svg" alt="border"/>
                        </span>&nbsp;
                        Nature, together</h1>
                </div>
                <div className="content-box">
                    <p>Our team enables your organisation to have a positive impact on nature, climate, and communities. This is achieved through our partnerships with local land managers who receive technical assistance and monthly financial support to protect and restore natural landscapes. </p>
                    <p>More than carbon offsets and tree planting alone, Regenera supports living landscapes management led by the people who know their lands best.</p>
                </div>
            </LeftSection>

            <RightSection>
                <picture>
                    <source media="(max-width:700px)" srcset="./images/banner-about-m.png"/>
                    <img src="./images/banner-about.png" className="w-full" alt="about us"/>
                </picture>
            </RightSection>
        </HeroContainer>
    )
}

export default HeroSection;