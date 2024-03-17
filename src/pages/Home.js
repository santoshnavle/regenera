import React from "react";
import Carousel from "../components/Carousel";
import TakeAction from "../components/homePage/TakeAction";
import WorkWith from "../components/homePage/CompanyLogos";
import PartnersImpact from "../components/homePage/PartnersPositiveImpact";
import BenefitsMembership from "../components/homePage/BenefitsMembership";
import Mission from "../components/homePage/Mission";
import Testimonials from "../components/homePage/Testimonial";

const Home = () => {
    return <>
        <Carousel/>
        <TakeAction/>
        <WorkWith/>
        <PartnersImpact/>
        <BenefitsMembership/>
        <Mission/>
        <Testimonials/>
    </>
}

export default Home;