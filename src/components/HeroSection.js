import React from "react";
import styled from "styled-components";

const HeroSection = () => {

    const HeroContainer = styled.section`
    `
    const LeftSection = styled.section`
    `
    const RightSection = styled.section`
    `

    return (
        <HeroContainer className="flex items-center justify-space-between">
            <LeftSection>
                <div className="title-box">
                    <h1>We protect and <span className="border">regenerate</span> Nature, together</h1>
                </div>
                <div className="content-box">
                    <p>Our team enables your organisation to have a positive impact on nature, climate, and communities. This is achieved through our partnerships with local land managers who receive technical assistance and monthly financial support to protect and restore natural landscapes. </p>
                    <p>More than carbon offsets and tree planting alone, Regenera supports living landscapes management led by the people who know their lands best.</p>
                </div>
            </LeftSection>
            <RightSection>
                <img src="./images/banner-about_m.png" alt="hero banner about us"/>
            </RightSection>
        </HeroContainer>
    )
}

export default HeroSection;