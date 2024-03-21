import React from "react";
import HeroSection from "../components/HeroSection";
import ImageWithText from "../components/ImageWithText";
import Team from "../components/aboutUs/Team";

import styled from "styled-components";

const About = () => {
    const AboutSection = styled.section`
        .imgBoxClass{
            min-width: 522px;
        }
        .img-text-container{
            margin: 0 auto;
            &::before{
                content: " ";
                background-image: url("../images/hero-leaf.png");
                background-size: 100% auto;
                width: 104px;
                height: 178px;
                position: absolute;
                right: 0;
                top: -60px;
            }
        }
    `
    const paras = [
        "I grew up in Peru with a collection of snakes, lizards, and toads, and learned early that Nature was something to be cherished. Forty years later, it's more obvious than ever: we depend completely on healthy Nature for our survival. Think about it. All the materials and services for our daily needs and lives are provided by Nature. No Nature, no us.",
        "That's why we set up Regenera in 2016, with the conviction that we must protect and restore Nature together. We’re proud of the thousands of hectares of living landscapes we are regenerating in the Amazon and Andes of Peru. But we’ve only just started. And everyone has a role to play. Now is the time to take action!",
    ];
    const pragraph = paras.map((para) => <p>{para}</p>)
    return (
        <AboutSection>
            <HeroSection/>
            <ImageWithText
                imgWithClass = "img-text-container"
                Image = "../images/founder.png" 
                ImageMobile = "../images/founder-m.png" 
                imgBoxClass = "imgBoxClass"
                smallTitle = "A message from our founder"
                firstTitle = "Let's be"
                underlineTitle = "Frank"
                borderImg = "../images/title-border-small.png" 
                lastTitle = "about it"
                text = {pragraph}
                sign = "Frank Hajek CEO Regenera"
                
            />
            <Team/>
        </AboutSection>
        
    )
}

export default About;