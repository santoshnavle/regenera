import React from "react";
import HeroSection from "../components/HeroSection";
import StepSlider from "react-slick";
import ImageWithText from "../components/ImageWithText";
import RangeOption from "../components/RangeSlide";
import GuardianRole from "../components/RoleBox";
import VidTestimonial from "../components/PartnerSection/TestimonialContent";
import MyacordionSection from "../components/Accordion/MyAccordion";
import { OrangeBtn, LightGreenBtn } from "../components/Button";
import { RiSearchLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Guardians = () => {

    // steps data ul li
    const listingdata = [
        {textintro: "After receiving an approval via e-mail from Regenera, you'll need to provide:"},
        {textinfo: 'Your ownership and management documents, so that we can register your land.'},
        {textinfo: 'A signed agreement.'},
        {textinfo: 'Bank details in Stripe so we can recognize your good work results.'}
    ];

    const lastStepData = listingdata.map((list) => {
        return(
            <>  
                {list.textintro && (<p>{list.textintro}</p>)}
                <div className="li-list"><strong>{list.strongText}</strong> {list.textinfo}</div>
            </>  
        )
    });

    // step slider setting
    const stepSettings = {
        responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1023,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            speed: 300,
            infinite: false,
            adaptiveHeight: true,
            }
        },]
    };

    // testimonial data
    const testimonialData = [
        {id:1, profileImg : 'https://www.shareicon.net/data/2016/07/05/791221_man_512x512.png', profileQuote: '"With Regenera I support the partnership of Andean and Amazonian forests in Peru, by compensating my footprint and supporting the people that live in those landscapes."', profileName: 'Martin Romero', profilePost: 'General manager Explorandes'},
        {id:2, profileImg : 'https://www.shareicon.net/data/2016/07/05/791221_man_512x512.png', profileQuote: '"With Regenera I support the partnership of Andean and Amazonian forests in Peru, by compensating my footprint and supporting the people that live in those landscapes."', profileName: 'Martin Romero', profilePost: 'General manager Explorandes'},
        {id:3, profileImg : 'https://www.shareicon.net/data/2016/07/05/791221_man_512x512.png', profileQuote: '"With Regenera I support the partnership of Andean and Amazonian forests in Peru, by compensating my footprint and supporting the people that live in those landscapes."', profileName: 'Martin Romero', profilePost: 'General manager Explorandes'},
    ];
    

    // styled

    const GuardianSection = styled.section`
        .green-bg{
            background: #004532 url("../images/partner-bg.webp") no-repeat center top;
            background-size: cover;
            min-height: 500px;
            .text-white, .text-white p{ 
                color: white;
            }
            .cta{
                margin-top: 10px;
            }
            padding-bottom: 20px;
            padding-top: 20px;
            .right-section{
                img{
                    display: none;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .green-bg{
                padding: 25px 0 0;
                gap: 0;
                .cta{
                    margin-top: 25px;
                    position: relative;
                    z-index: 999;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.mobile}) {
            .green-bg{
                background-image: none;
                .right-section{
                    padding-left: 0;
                    margin-top: -30px;
                    img{
                    display: block;
                    }
                }
            }
        }
    `
    const ProtectLand =  styled.section`
        padding: 70px 4.8rem 100px;
        text-align:center;
        position: relative;
        .protect-land-box{
            max-width: 414px;
            padding: 0 10px;
            .title-box{
                margin-bottom: 14px;
            }
            .range-box{
                margin-bottom: 45px;
            }
            .base{
                font-weight: 300;
                line-height: 150%;
                color: #004D37;
                margin-bottom: 14px;
            }
            button{
                max-width: 260px;
            }
        }
        &::before{
            content: "";
            background: url('../images/left-leaf.webp');
            background-size: 100% auto;
            background-repeat: no-repeat;
            position: absolute;
            width: 168px;
            height: 351px;
            right: auto;
            left: 0;
            top: 0px;
            z-index: 2;
        }
        &::after{
            content: "";
            background: url('../images/right-leaf.webp');
            background-size: 100% auto;
            background-repeat: no-repeat;
            position: absolute;
            width: 168px;
            height: 351px;
            right: 0;
            top: -100px;
            z-index: 2;
        }
        .take-action-group{
            max-width: 1200px;
            width: 100%;
            flex: 1;
            gap: 50px 0;

            .title-box{
                max-width: 630px;
                margin: 0 auto;
            }
            .icon-text-container{
                align-self: stretch;
                gap: 20px;
                .iconFrame-box{
                    &:after{
                        content: none;
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 20px 24px;
            &::before, &::after{
                content: none;
            }
        }
    `
    const HowitsWork =  styled.section`
        padding: 110px 4.8rem 100px;
        background-color: #f8fbf6;
        .title-box{
            margin-bottom: 60px;
        }
        .steps-how{
            max-width: 1065px;
            .regular{
                display: flex;
                flex-direction: column;
                gap: 100px;
            }
            .img-text{
                align-items: flex-start;
                 .picture-box{
                    flex: 1 0 auto;
                    img{
                        border-radius: 8px;
                    }
                }
            }
            .text-section{
                color: ${({ theme }) => theme.colors.text_color};
                line-height: 180%;
                margin-top: 16px;
                .li-list{
                    position: relative;
                    padding-left: 20px;
                    &:first-child{
                        display: none;
                    }
                    &::before{
                        content: "•";
                        position: absolute;
                        left: 0;
                        top: -2px;
                        font-size: 30px;
                    }
                }
            }
        }
        
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 20px 0px;
            .title-box{
                margin-bottom: 0;
                padding: 0 24px;
            }
            .steps-how{
                .step-row{
                    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.07);
                    padding: 16px;
                    background-color: #fff;
                    margin-top: 20px;
                    margin: 20px 20px 35px;
                    border-radius: 8px;
                    .img-text{
                        .picture-box{
                            align-self: center;
                        }
                    }
                }
                .slick-slider{
                    padding-bottom: 45px;
                }
                .slick-next, .slick-prev{
                    width: auto;
                    height: 45px;
                    border-radius: 30px;
                    color: #fff;
                    padding: 8px 39px;
                    font-size: 16px;
                    font-weight: 600;
                    background: #6EA44C;
                    bottom: 0px;
                    top: auto;
                    z-index: 99;
                    transform: translate(0);
                }
                .slick-next{
                    right: 15px;
                    &::before{
                        content: none;
                    }
                }
                .slick-prev{
                    left: 15px;
                    &::before{
                        content: none;
                    }
                }
                .slick-disabled{
                    background: #CECECE;
                }
                .slick-dots{
                    bottom: 43px;
                }
                .faq-link{
                    padding-left:20px;
                    margin-top:28px;
                    a{
                        display:block;
                    }
                }
            }
        }
    `
    const JoinNetwork = styled.section`
        padding: 110px 4.8rem 100px;
        max-width: 1440px;
        margin: 0 auto;
        .two-col-box{
            .guardian-network{
                max-width: 600px;
                img{
                    margin-bottom: 70px;
                }
                .green-link{
                    line-height: 28px;
                    margin-top:8px;
                    display: inline-block;
                }
            }
        }
        .choose-role-section{
            max-width: 414px;
            .title{
                font-size: 19px;
                line-height: 27px;
                font-weight: 600;
                margin-bottom: 12px;
            }
            .guardian-role{
                margin-bottom: 8px;
            }
            .radio-box{
                padding-left: 0;
                input:checked + .guardian-role{
                    background: #6EA44C;
                    color: white;
                    border-radius: 8px;
                    .green-link{
                        color: white;
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            
        }
    `
    const FaqQuestions = styled.section`
        padding: 98px 4.8rem 98px;
        max-width: 1440px;
        margin: 0 auto;
        background: #F8FBF6;
        .faq-section{
            max-width: 630px;
            .title-box{
                margin-bottom: 32px;
                .small-title{
                    font-size: 19px;
                    line-height: 180%;
                    color: #6EA44C;
                    margin-bottom: 5px;
                }
            }
            .faq-accordion{
                display: flex;
                flex-direction: column;
                gap: 12px;
                margin-top: 20px;
            }
            .other-info{
                background: white;
                padding: 20px 32px;
                border-radius: 25px;
                font-weight: 500;
                box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05);
                margin-top: 20px;
                .small-title{
                    font-size: 19px;
                    line-height: 27px;
                }
                .other-option-list{
                    li{
                        margin-top: 10px;
                        .green-link{
                            gap: 16px;
                            .link-icon{
                                font-size: 29px;
                            }
                            &:active{
                                color: #6EA44C;
                            }
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    `
    const SearchBox = styled.div`
        max-width: 630px;
        border-radius: 25px;
        box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05);
        .form-control{
            width: 100%;
            border-radius: 25px;
            padding: 8px 26px;
            height: 45px;
            &::placeholder{
                color: #004D37;
            }
            border: 1px solid #eaeaea;
        }
        .search-btn{
            right: 0
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            bottom: -20px;
            width: auto;
            left: 20px;
            right: 20px;
            transform: none;
        }
    `

    return (
        <GuardianSection>
            <HeroSection
                title="We can't regenerate Nature without your"
                titleline="support"
                titleclass="text-white"
                paratext = "para text here"
                paraclass = "text-white"
                heroBg = "green-bg"
                heroImgM = "../images/partners-hero-m.webp"
                alttxt = "Partners"
                orangeBtn
                btnText = "Sign up" 
                btnLink = "#"
            />
            <ProtectLand>
                <div className="protect-land-box flex justify-start flex-col mx-auto">
                    <div className="title-box">
                        <h2>Protect your land and receive up to</h2>
                    </div>
                    <RangeOption RangeClass="range-box"/>
                    <p className="base small">Based on your location</p>
                    <OrangeBtn className="mx-auto"><Link to="#">Sign up as Guardian</Link></OrangeBtn>
                </div>
            </ProtectLand>
            <HowitsWork>
                <div className="title-box text-center">
                    <h2>How it works</h2>
                </div>
                <div className="steps-how mx-auto relative">
                    <StepSlider {...stepSettings}>
                        <ImageWithText
                            section = "step-row"
                            Image = "../images/b-corp-regenera-1.webp" 
                            imgWithClass = "img-text"
                            contentBox = "text-section"
                            imgBoxClass="picture-box"
                            smallTitle = "Step 1"
                            firstTitle = "Join and sign the Letter of Intent"
                            text = "Express your interest in working with us and choose your role: communities, cooperatives, and associations can join as Collective Guardians; individuals, families, and companies can join as Individual Guardians; and concession holders can join as Concessionaire Guardians."
                        />
                        <ImageWithText
                            section = "step-row"
                            Image = "../images/b-corp-regenera-2.webp" 
                            imgWithClass = "img-text"
                            contentBox = "text-section"
                            imgBoxClass="picture-box"
                            smallTitle = "Step 2"
                            firstTitle = "Add your details, sign & upload documents"
                            text = {lastStepData}
                        />
                        <ImageWithText
                            section = "step-row"
                            Image = "../images/b-corp-regenera-3.webp" 
                            imgWithClass = "img-text"
                            contentBox = "text-section"
                            imgBoxClass="picture-box"
                            smallTitle = "Step 3"
                            firstTitle = "Lead the way towards Nature & Climate positive action"
                            text = "It's time to measure your footprint. If you do not yet know your carbon or environmental footprint, or would like it updated, use our Calculator or schedule a call with one of our Expert advisors."
                        />
                    </StepSlider>
                </div>
            </HowitsWork>
            <JoinNetwork>
                <div className="two-col-box flex justify-space-between flex-wrap">
                    <div className="guardian-network text-center">
                        <img src="../images/network-group.webp" className="w-full" alt="network group"/>
                        <h3 className="h2">Ready to join our network of <br/> Guardians?</h3>
                        <Link to="#" className="green-link">Click to see the great work they are doing</Link>
                    </div>
                    <div className="choose-role-section">
                        <div className="title text-center">Choose a role:</div>
                        <form action="">
                            <label for="roleOne" class="radio-box">
                                <input id="roleOne" name="selectRole" type="radio" value=""/>
                                <GuardianRole
                                    classrole="guardian-role"
                                    roleImg="../images/role1.webp"
                                    roleTitle="Private Guardian"
                                    rolePara="Choose this option if you manage land through an individual or family title."
                                    linkText="Select and sign up"
                                />
                            </label>
                            <label for="roleTwo" class="radio-box">
                                <input id="roleTwo" name="selectRole" type="radio" value=""/>
                                <GuardianRole
                                    classrole="guardian-role"
                                    roleImg="../images/role2.webp"
                                    roleTitle="Collective Guardian"
                                    rolePara="Choose this option if you manage land as a community, cooperative, association, or other collective."
                                    linkText="Select and sign up"
                                />
                            </label>
                            <label for="roleThree" class="radio-box">
                                <input id="roleThree" name="selectRole" type="radio" value=""/>
                                <GuardianRole
                                    classrole="guardian-role"
                                    roleImg="../images/role3.webp"
                                    roleTitle="Public Guardian"
                                    rolePara="Choose this option if you manage land as a public or private concession holder."
                                    linkText="Select and sign up"
                                />
                            </label>
                        </form>
                    </div>
                </div>
            </JoinNetwork>
            <FaqQuestions>
                <div className="faq-section mx-auto">
                    <div className="title-box text-center">
                        <div className="small-title uppercase">questions?</div>
                        <h3>You may be wondering...</h3>
                    </div>
                    <SearchBox className="mx-auto w-full flex relative">
                        <input type="text" className="form-control w-full" placeholder="Search..." aria-label="blog search" aria-describedby="blog search"/>
                        <LightGreenBtn className="search-btn absolute" type="submit">Search</LightGreenBtn>
                    </SearchBox>
                    <MyacordionSection accordionClass="faq-accordion"/>
                    <div className="other-info">
                        <h4 className="small-title">Still not sure?</h4>
                        <ul className="other-option-list">
                            <li>
                                <Link to="#" className="green-link flex items-center"><RiSearchLine className="link-icon"/> <small>Go to our knowledge centre for all questions</small></Link>
                            </li>
                            <li>
                                <Link to="#" className="green-link flex items-center"><SiWhatsapp className="link-icon"/> <small>Chat to a Guardian</small></Link>
                            </li>
                            <li>
                                <Link to="#" className="green-link flex items-center"><img src="../images/icons/user-icon.svg" alt="user icon"/> <small>Schedule a video call with a Regenera staff member</small></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </FaqQuestions>
            <VidTestimonial
                titleBeforeborder = "Working"
                titleBorder = "together" 
                titleAfterborder = "for Nature"
                btnLink = "#" 
                btnText = "Become a Guardian"
                data = {testimonialData}
            />
        </GuardianSection>
    )
}

export default Guardians;