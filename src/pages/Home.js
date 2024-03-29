import React, {useRef} from "react";
import Carousel from "../components/Carousel";
import TakeAction from "../components/homePage/TakeAction";
import CompanyLogos from "../components/CompanyLogos";
import PartnersImpact from "../components/homePage/PartnersPositiveImpact";
import BenefitsMembership from "../components/homePage/BenefitsMembership";
import Mission from "../components/homePage/Mission";
import Testimonials from "../components/homePage/Testimonial";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Home = () => {

    const container = useRef();

    useGSAP(() => {
        gsap.from(".signup-button-frame",  {delay:1, opacity:0, x:-300, ease: "sine",})
        const anim = gsap.from(".iconframe", {top: 100, opacity:0, stagger:{amount:1}});
        const counter = gsap.from(".number-animation", {innerText: 500, duration: 2, stagger:{amount:1}});
        const tl = gsap.timeline();
            tl.from(".peru-map", {opacity:0, x: 600,});
            tl.from(".location-icon", {opacity:0, y: -300, ease: "bounce",});
            tl.from(".scroll-pin", {opacity:0, x: -300,});
            tl.from(".click-info", {opacity:0, delay:1, duration:2,}) 

        ScrollTrigger.create({
        trigger: ".icon-text-container",
        animation: anim,
        scrub: true,
        start: "top 90%",
        end: "top 100px",
        });

        ScrollTrigger.create({
        trigger: "#storageNumber",
        animation: counter,
        start: "top 90%",
        });

        ScrollTrigger.create({
        trigger: ".peru-map",
        animation: tl,
        start: "top center",
        });

    },{scope:container}
    );

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
        <div ref={container}>
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
        </div>
    </>
}

export default Home;