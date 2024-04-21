import React from "react";
import HeroSection from "../components/HeroSection";
import ImageWithText from "../components/ImageWithText";
import Team from "../components/aboutUs/Team";
import CompanyLogos from "../components/CompanyLogos";
import ToJoin from "../components/aboutUs/ReadytoJoin";
import styled from "styled-components";

const About = () => {

    const paras = [
        "I grew up in Peru with a collection of snakes, lizards, and toads, and learned early that Nature was something to be cherished. Forty years later, it's more obvious than ever: we depend completely on healthy Nature for our survival. Think about it. All the materials and services for our daily needs and lives are provided by Nature. No Nature, no us.",
        "That's why we set up Regenera in 2016, with the conviction that we must protect and restore Nature together. We’re proud of the thousands of hectares of living landscapes we are regenerating in the Amazon and Andes of Peru. But we've only just started. And everyone has a role to play. Now is the time to take action!",
    ];
    const pragraph = paras.map((para) => <p>{para}</p>)
    const para1 =  <p>Our best practices in operations, diversity, and governance made us the first company in Peru to be certified by B Lab. As a B Corp,  we're part of a global community of businesses that meet high standards of social and environmental impact.</p>;

    const backLogos = [
        { id: 1, img: '../images/company-logo/idb.png' },
        { id: 2, img: '../images/company-logo/un-restoration-logo.png' },
        { id: 3, img: '../images/company-logo/natural-capital-coalition.png' },
        { id: 4, img: '../images/company-logo/peru_co.png' },
    ];
    const cologoback = backLogos.map((backLogo) => <div key={backLogo.id} className="logo"><img src={backLogo.img} alt="backing company" /></div>) 
    
    // company logos
    const sliderDataOne = [
        { id: 1, img: '../images/company-logo/image 43.png' },
        { id: 2, img: '../images/company-logo/image 44.png' },
        { id: 3, img: '../images/company-logo/image 21.png' },
        { id: 4, img: '../images/company-logo/image 39.png' },
        { id: 5, img: '../images/company-logo/image 37.png' },
        { id: 6, img: '../images/company-logo/image 25.png' },
        { id: 7, img: '../images/company-logo/image 43.png' },
        { id: 8, img: '../images/company-logo/image 44.png' },
        { id: 9, img: '../images/company-logo/image 21.png' },
        { id: 10, img: '../images/company-logo/image 39.png' },
    ];

    const sliderDataTwo = [
        { id: 1, img: '../images/company-logo/image 22.png' },
        { id: 2, img: '../images/company-logo/image 23.png' },
        { id: 3, img: '../images/company-logo/image 24.png' },
        { id: 4, img: '../images/company-logo/image 16.png' },
        { id: 5, img: '../images/company-logo/image 42.png' },
        { id: 6, img: '../images/company-logo/image 38.png' },
        { id: 7, img: '../images/company-logo/image 22.png' },
        { id: 8, img: '../images/company-logo/image 23.png' },
        { id: 9, img: '../images/company-logo/image 24.png' },
        { id: 10, img: '../images/company-logo/image 38.png' },
    ];

    const slidersetting = {
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 8000,
        pauseOnHover: true,
        cssEase: 'linear',
        arrows: false,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                }
            },
        ]
    };
    const slidersetting2 = {
        ...slidersetting,
        speed: 10000,
    };

    // styled

    const AboutSection = styled.section`
        .autor-section, .corporation-section{
            background-color: #F8FBF6;
            padding: 110px 4.8rem;
            max-width: 1920px;
        }
        .autor-section {
            .imgBoxClass{
                flex: 1 0 50%;
                max-width: 522px;
            }
            .img-text-container{
                align-items: stretch;
            }
        }
        .corporation-section{
            background-color: white;
        }
        .business-container{
            margin: 0 auto;
            max-width: 1065px;
        }
        .img-text-container, .business-container{
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
        .business-container{
            background-color: white;
            &::before{
                content: none;
            }
            .img-b-certified{
                order: 1;
                min-width: 414px;
            }
            .logo{
                height: 38px;
                img{
                    height: 100%;
                    width: auto;
                }
            }
        }
        .company-group{
            gap: 35px !important;
            .company-logo-container{
                .co-logo{
                    height: 80px !important;
                    padding: 0 40px !important;
                    display: flex !important;
                    align-items: center !important;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .autor-section, .corporation-section{
                padding: 24px 20px;
                .img-text-container{
                    .imgBoxClass{
                        order: 1;
                        min-width: auto;
                    }
                    &::before{
                        content: none;
                    }
                    .content{
                        .content-box{
                            p{
                                &:first-child{
                                    margin-top: 0;
                                }
                            }
                        }
                    }
                }
                
            }
            .corporation-section{
                padding-bottom: 40px;
                 .img-b-certified{
                    order: 0;
                    min-width: auto;
                }
                .content{
                    .content-box{
                        p{
                            &:first-child{
                                margin-top: 0;
                            }
                        }
                    }
                }
            }
        }
    `
    return (
        <AboutSection>
            <HeroSection/>
            <ImageWithText
                section = "autor-section"
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

            <ImageWithText
                section = "corporation-section"
                imgWithClass = "business-container"
                Image = "../images/b-corp-regener.png"
                ImageMobile = "../images/b-corp-regener-m.png"  
                imgBoxClass = "img-b-certified"
                smallTitle = "b-corp certified"
                firstTitle = "We're using business as a force for good"
                text = { para1 }
                backtitle = "With the backing of:"
                backlogos = { cologoback }
            />
            <CompanyLogos 
                title = "Get to know the Regenera network!"
                settings = {slidersetting}
                settingsTwo = {slidersetting2}
                data = {sliderDataOne}
                datatwo = {sliderDataTwo}
            />
            <ToJoin/>
        </AboutSection>
    )
}

export default About;