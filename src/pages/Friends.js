import React, {useState} from "react";
import HeroSection from "../components/HeroSection";
import VidTestimonial from "../components/PartnerSection/TestimonialContent";
import CompanyLogos from "../components/CompanyLogos";
import PlanBoxOption from "../components/PlanBox";
import { OrangeBtn, LightGreenBtn } from "../components/Button";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from "styled-components";

const Friends = () => {
    const paras = [
        "Sign up to a membership plan that will enable you to do the right thing for Nature, climate, and communities.",
    ];
    const pragraph = paras.map((para) => <p>{para}</p>)
    // testimonial slider data
    const testimonialData = [
        {id:1, profileImg : 'https://www.shareicon.net/data/2016/07/05/791221_man_512x512.png', profileQuote: '"With Regenera I support the partnership of Andean and Amazonian forests in Peru, by compensating my footprint and supporting the people that live in those landscapes."', profileName: 'Martin Romero', profilePost: 'General manager Explorandes'},
        {id:2, profileImg : 'https://www.shareicon.net/data/2016/07/05/791221_man_512x512.png', profileQuote: '"With Regenera I support the partnership of Andean and Amazonian forests in Peru, by compensating my footprint and supporting the people that live in those landscapes."', profileName: 'Martin Romero', profilePost: 'General manager Explorandes'},
        {id:3, profileImg : 'https://www.shareicon.net/data/2016/07/05/791221_man_512x512.png', profileQuote: '"With Regenera I support the partnership of Andean and Amazonian forests in Peru, by compensating my footprint and supporting the people that live in those landscapes."', profileName: 'Martin Romero', profilePost: 'General manager Explorandes'},
    ];

    // featureData
    const featureDataPollen = [
        {featureList: ['Footprint reports & status in platform', 'Monthly updates from your landscape', 'Digital trimestral impact reports', '<b>1,000</b> m2 of land protected', '<b>1,000</b> kg of CO2 emissions compensated per year', '<b>1</b> Tree planted and cared for per year']},
    ];
    const featureDataTree = [
        {featureList: ['Footprint reports & status in platform', 'Monthly updates from your landscape', 'Digital trimestral impact reports', '<b>1,000</b> m2 of land protected', '<b>1,0000</b> kg of CO2 emissions compensated per year', '<b>2</b> Trees planted and cared for per year']},
    ];

    // company slider setting
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

    // company slider data
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

    // styled

    const FriendsSection = styled.section`
        .green-bg{
            background: #004532 url("../images/bg-texture-green.jpg") no-repeat center top;
            background-size: cover;
            margin-bottom: -4px;
            .text-white, .text-white p{ 
                color: white;
                br{
                    display: none;
                }
            }
            .right-section{
                margin-bottom: -4px;
            }
            .cta{
                margin-top: 10px;
            }
        }
        .panel-link{
            display: block;
            margin: 24px 0 48px;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.light_green};
            text-decoration: underline;
            &:hover{
                text-decoration: none;
            }
        }
        .center-text-btn{
            margin-top: 30px;
            gap: 0;
            button{
                max-width: 250px;
                margin: 20px auto 0;
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
        .two-cols{
            justify-content: space-between;
            padding: 0 100px;
            margin: 0 auto;
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .green-bg{
                margin-bottom: 0;
                padding-bottom: 0;
                gap: 0;
                .cta{
                    margin-top: 25px;
                    position: relative;
                    z-index: 999;
                }
                .right-section{
                    padding-left: 0;
                    margin-bottom: -5px;
                    margin-top: -20px;
                }
            }
            .center-text-btn{
                p{
                    font-size: 16px;
                    margin-top: 5px;
                }
                button{
                    margin-top: 12px;
                }
            }
        }
    `
    const PlanContainer = styled.section`
        padding: 78px 4.8rem 110px;
        position: relative;
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
        .title-box{
            margin-bottom: 60px;
        }
        .plan-group{
            gap: 20px;
            .plan-box{
                max-width: 415px;
                border: 2px solid #f3f2f2;
                &:hover{
                    border: 2px solid #6EA44C;
                }
            }
            .plan-box-active{
                border: 2px solid #6EA44C;
            }
        }

        @media (max-width: 1175px) {
            padding: 32px 20px 50px;
            &::before, &::after{
                content: none;
            }
            .title-box{
                margin-bottom: 20px;
            }
        }
        @media (max-width:${({ theme }) => theme.media.mobile}) {
            .plan-group{
                flex-wrap: wrap;
                gap: 10px;
            }
            
        }
    `

  

    return (
        <FriendsSection>
            <HeroSection
                title="Want to help out as an individual? Become a"
                titleline="Friend!"
                titleclass="text-white"
                paratext = {pragraph}
                paraclass = "text-white"
                heroBg = "green-bg"
                heroImgM = "../images/friends-hero-m.webp"
                heroImgD = "../images/friends-hero-d.webp"
                alttxt = "Friends"
                orangeBtn
                btnText = "Sign up" 
                btnLink = "#"
            />
             <PlanContainer>
                <div className="title-box text-center">
                    <h3>Membership plans</h3>
                </div>

                 <Tabs>
                    <TabList>
                        <Tab>Individuals</Tab>
                        <Tab>Families</Tab>
                    </TabList>
                    {/* tab panel 1 */}
                    <TabPanel>
                        <Link className="text-center panel-link" to="#">Looking for Regenera for organisations?</Link>
                        <div className="plan-group flex justify-center items-start">
                            <PlanBoxOption
                                planBoxClass="plan-box"
                                planImg="../images/pollen-plan.webp" 
                                planName="Pollen plan"
                                planInfo="For those of us who want to get started transforming our lifestyle footprint into positive actions for Nature." 
                                planCost="$2"
                                planduration="/mo" 
                                actionLink="#"
                                data={featureDataPollen}
                                actionLinkText="Choose plan"
                            />
                            <PlanBoxOption
                                planBoxClass="plan-box plan-box-active"
                                planImg="../images/tree-plan.webp" 
                                planName="Seed plan"
                                planInfo="For start-up organisations who do not own premises or vehicles and a team up to 10 people." 
                                planCost="$30"
                                planduration="/mo" 
                                actionLink="#"
                                data={featureDataPollen}
                                actionLinkText="Choose plan"
                            />
                            <PlanBoxOption
                                planBoxClass="plan-box"
                                planImg="../images/forest-plan.webp" 
                                planName="Tree plan"
                                planInfo="For those of us who eat meat, do not yet recycle at home, use own vehicle, and fly 1 or 2 times a year." 
                                planCost="$10"
                                planduration="/mo" 
                                actionLink="#"
                                data={featureDataTree}
                                actionLinkText="Choose plan"
                            />
                        </div>
                    </TabPanel>
                    {/* tabpanel 1 end */}

                    {/* tabpanel 2 */}
                    <TabPanel>
                        <Link className="text-center panel-link" to="#">Looking for Regenera for organisations?</Link>
                        <div className="plan-group flex justify-center items-start">
                            <PlanBoxOption
                                planBoxClass="plan-box plan-box-active"
                                planImg="../images/tree-plan.webp" 
                                planName="Seed plan"
                                planInfo="For start-up organisations who do not own premises or vehicles and a team up to 10 people." 
                                planCost="$30"
                                planduration="/mo" 
                                actionLink="#"
                                data={featureDataPollen}
                                actionLinkText="Choose plan"
                            />
                            <PlanBoxOption
                                planBoxClass="plan-box"
                                planImg="../images/forest-plan.webp" 
                                planName="Tree plan"
                                planInfo="For those of us who eat meat, do not yet recycle at home, use own vehicle, and fly 1 or 2 times a year." 
                                planCost="$10"
                                planduration="/mo" 
                                actionLink="#"
                                data={featureDataTree}
                                actionLinkText="Choose plan"
                            />
                        </div>
                    </TabPanel>
                    {/* tabpanel 2 end */}
                </Tabs>

               
                
                

                <div className="center-text-btn flex flex-col text-center">
                    <h3>Need help choosing a plan?</h3>
                    <p>Calculate your footprint to match your impact.</p>
                    <OrangeBtn>
                        <Link to="#">Calculate footprint</Link>
                    </OrangeBtn>
                </div>
                
            </PlanContainer>
            <VidTestimonial
                titleBeforeborder = "What our"
                titleBorder = "Friends" 
                titleAfterborder = "say about us"
                paraText = "Like what you see? You too can drive positive change for people and planet." 
                btnLink = "#" 
                btnText = "Become a Friend"
                data = {testimonialData}
            />
            <CompanyLogos 
                settings = {slidersetting}
                data = {sliderData}
                title = "Proud of our work practices and alliances:"
            />
            
        </FriendsSection>
    )
}

export default Friends;