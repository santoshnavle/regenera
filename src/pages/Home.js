import React from "react";
import Carousel from "../components/Carousel";
import TakeAction from "../components/homePage/TakeAction";
import CompanyLogos from "../components/CompanyLogos";
import PartnersImpact from "../components/homePage/PartnersPositiveImpact";
import BenefitsMembership from "../components/homePage/BenefitsMembership";
import Mission from "../components/homePage/Mission";
import Testimonials from "../components/homePage/Testimonial";

const Home = () => {

    const sliderData = [
        { id: 1, img: '../images/company-logo/idb.png' },
        { id: 2, img: '../images/company-logo/un-restoration-logo.png' },
        { id: 3, img: '../images/company-logo/certified-b-corp.png' },
        { id: 4, img: '../images/company-logo/natural-capital-coalition.png' },
        { id: 5, img: '../images/company-logo/peru_co.png' },
        { id: 6, img: '../images/company-logo/idb.png' },
        { id: 7, img: '../images/company-logo/un-restoration-logo.png' },
        { id: 8, img: '../images/company-logo/certified-b-corp.png' },
    ];

    const slidersetting = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: true,
        cssEase: 'linear',
        arrows: false,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                }
            },
        ]
    };

    return <>
        <Carousel/>
        <TakeAction/>
        <CompanyLogos 
            settings = {slidersetting}
            data = {sliderData}
            title = "Proud of our work practices and alliances:"
        />
        <PartnersImpact/>
        <BenefitsMembership/>
        <Mission/>
        <Testimonials/>
    </>
}

export default Home;