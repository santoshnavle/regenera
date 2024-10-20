import React from "react";
import HeroSectionBlog from "../components/HeroSectionBlog";
import { Link } from "react-router-dom";
import AccordionSection from "../components/Accordion/Accordion";
import { IoIosArrowForward } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { OrangeBtn, LightGreenBtn } from "../components/Button";
import styled from "styled-components";

const KnowledgeCenter = () => {
    // styled

    const KnowledgeCenterSection = styled.section`
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
        
        .still-help-box{
            position: relative;
            background: url('../images/bg-texture-green.jpg');
            background-size: cover;
            text-align: center;
            .green-box{
                min-height: 380px;
                gap: 30px;
                max-width: 870px;
                .title-box{
                    padding: 0 20px;
                    margin-bottom: 4px;
                    h3, p{
                        color: white;
                    }
                }
                .btn-group{
                    gap: 12px;
                     button{
                        width: auto;
                        max-width: 288px;
                        margin: 0 auto;
                    } 
                }
               
            }
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
        }
        .still-help-box{
            padding: 0 20px;
        }
    `
    const FaqFlow = styled.section`
        .faq-wrap{
            max-width: 1280px;
            padding: 100px 4.8rem;
            gap: 0 120px;
            .left-faq{
                flex: 1 0 auto;
                max-width: 413px;
                .title-list-box{
                    margin-top: 60px;
                    .title-box{
                        h2,h3{
                            font-weight: 500;
                        }
                    }
                    .listing-box{
                        margin-top: 20px;
                        .listing-ul{
                            border-radius: 20px;
                            box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05);
                            padding: 5px 0;
                            li{
                                padding: 0 20px;
                                a{
                                    padding: 10px 3px;
                                    border-bottom: 1px solid #DDEDD0;
                                    font-weight: 500;
                                    &:hover, .active{
                                        color: #6EA44C;
                                    }
                                }
                               &:last-child{
                                    a{
                                        border-bottom: 0 none;
                                    }
                                }
                            }
                        }
                    }
                    &:first-child{
                        margin-top: 0;
                    }
                }
            }
            .right-faq{
                max-width: 625px;
                .title-list-box{
                    margin-top: 50px;
                    .title-box{
                        padding: 0;
                         h3{
                            font-weight: 500;
                        }
                        .small-title{
                            font-weight: 500;
                            margin: 12px 0;
                        }
                    }
                    &:first-child{
                        margin-top: 0;
                    }
                }
                .listing-box{
                    .listing-ul{
                        li{
                            margin-top: 12px;
                            .small-title{
                                gap: 10px;
                                font-weight: 500;
                                padding: 20px 32px;
                                border-radius: 36px;
                                box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05);
                            }
                            &:first-child{
                                margin-top: 0;
                            }
                        }
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .faq-wrap{
                padding: 40px 20px;
                gap: 50px;
                .left-faq{
                    .title-list-box{
                        margin-top: 30px;
                    }
                }
               
                .right-faq{
                    .listing-box{
                        .listing-ul{
                            li{
                                .small-title{
                                    padding: 10px 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.mobile}){
            .faq-wrap{
                flex-wrap: wrap;
                .left-faq{
                    max-width: none;
                }
                .right-faq{
                    max-width: none;
                }
            }
        }
    `
    
    const MostRead = styled.section`
        background-color: #EFE7DA;
        padding: 80px 0;
        .read-wrap{
            max-width: 1280px;
            padding: 0 4.8rem;
            gap: 0 120px;
            .title-box{
                max-width: 417px;
            }
            .reading-q{
                flex: 1 1 auto;
                .title-list-box{
                    margin-top: 50px;
                    .title-box{
                        padding: 0;
                            h3{
                            font-weight: 500;
                        }
                        .small-title{
                            font-weight: 500;
                            margin: 12px 0;
                        }
                    }
                    &:first-child{
                        margin-top: 0;
                    }
                }
                .listing-box{
                    .listing-ul{
                        li{
                            margin-top: 12px;
                            .small-title{
                                background-color: white;
                                gap: 10px;
                                font-weight: 500;
                                padding: 20px 32px;
                                border-radius: 36px;
                                box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05);
                            }
                            &:first-child{
                                margin-top: 0;
                            }
                        }
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            padding: 24px 20px;
            .read-wrap{
                gap: 15px;
                .reading-q{
                    .listing-box{
                        .listing-ul{
                            li{
                                .small-title{
                                    padding: 10px 20px;
                                }
                            }
                        }
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.mobile}){
            .read-wrap{
                flex-wrap: wrap;
                padding: 0 ;
            }
        }
    `
  

    return (
        <KnowledgeCenterSection>
            <HeroSectionBlog
                title="Knowledge centre"
                ImageMobile={"../images/blog-title-line-m.svg"}
                Image={"../images/blog-title-line-d.svg"}
            />
            <FaqFlow>
                <div className="faq-wrap flex mx-auto">
                    <div className="left-faq w-full">
                        <div className="title-list-box">
                            <div className="title-box">
                                <h2>Information per topic</h2>
                            </div>
                            <div className="listing-box">
                                <ul className="listing-ul">
                                    <li>
                                        <Link to="#" className="flex items-center justify-space-between small-title">Nature & climate <IoIosArrowForward /></Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="flex items-center justify-space-between small-title">Regenera & services <IoIosArrowForward /></Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="flex items-center justify-space-between small-title">Account & billing <IoIosArrowForward /></Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="flex items-center justify-space-between small-title">Roles & contracts <IoIosArrowForward /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="title-list-box">
                            <div className="title-box">
                                <h3>Information per role</h3>
                            </div>
                            <div className="listing-box">
                                <ul className="listing-ul">
                                    <li>
                                        <Link to="#" className="flex items-center justify-space-between small-title">Organisations <IoIosArrowForward /></Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="flex items-center justify-space-between small-title">Private guardians <IoIosArrowForward /></Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="flex items-center justify-space-between small-title">Indigenous communities <IoIosArrowForward /></Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="flex items-center justify-space-between small-title">Individuals & families <IoIosArrowForward /></Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="flex items-center justify-space-between small-title">Land managers <IoIosArrowForward /></Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="flex items-center justify-space-between small-title">Press & students <IoIosArrowForward /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="right-faq w-full">
                        <div className="title-list-box">
                            <div className="title-box">
                                <h3>Nature & climate</h3>
                                <div className="small-title">Carbon offsetting</div>
                            </div>
                            <div className="listing-box">
                                <ul className="listing-ul">
                                    <li>
                                        <Link to="#" className="flex items-center relative small-title"><FaFileDownload/>Impact Report 2023.pdf</Link>
                                    </li>
                                    <li>
                                        <AccordionSection
                                            question="What is a carbon footprint?"
                                            answer="A carbon footprint estimates the total emission volume of greenhouse gases — those gases in our atmosphere that trap and release heat, and contribute to climate change."
                                        />
                                    </li>
                                    <li>
                                        <AccordionSection
                                            question="Some other question?"
                                            answer="A carbon footprint estimates the total emission volume of greenhouse gases — those gases in our atmosphere that trap and release heat, and contribute to climate change."
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                         <div className="title-list-box">
                            <div className="title-box">
                                <div className="small-title">Carbon offsetting</div>
                            </div>
                            <div className="listing-box">
                                <ul className="listing-ul">
                                    <li>
                                        <AccordionSection
                                            question="Some other question?"
                                            answer="A carbon footprint estimates the total emission volume of greenhouse gases — those gases in our atmosphere that trap and release heat, and contribute to climate change."
                                        />
                                    </li>
                                    <li>
                                        <AccordionSection
                                            question="Some other question?"
                                            answer="A carbon footprint estimates the total emission volume of greenhouse gases — those gases in our atmosphere that trap and release heat, and contribute to climate change."
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                         <div className="title-list-box">
                            <div className="title-box">
                                <div className="small-title">Carbon offsetting</div>
                            </div>
                            <div className="listing-box">
                                <ul className="listing-ul">
                                    <li>
                                        <AccordionSection
                                            question="Some other question?"
                                            answer="A carbon footprint estimates the total emission volume of greenhouse gases — those gases in our atmosphere that trap and release heat, and contribute to climate change."
                                        />
                                    </li>
                                    <li>
                                        <AccordionSection
                                            question="Some other question?"
                                            answer="A carbon footprint estimates the total emission volume of greenhouse gases — those gases in our atmosphere that trap and release heat, and contribute to climate change."
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </FaqFlow>
            <MostRead>
                <div className="read-wrap flex">
                    <div className="title-box w-full">
                        <h3>Most read</h3>
                    </div>
                    <div className="reading-q w-full">
                        <div className="listing-box">
                            <ul className="listing-ul">
                                <li>
                                    <AccordionSection
                                        question="How does Regenera work?"
                                        answer="A carbon footprint estimates the total emission volume of greenhouse gases — those gases in our atmosphere that trap and release heat, and contribute to climate change."
                                    />
                                </li>
                                <li>
                                    <AccordionSection
                                        question="What is carbon offsetting?"
                                        answer="A carbon footprint estimates the total emission volume of greenhouse gases — those gases in our atmosphere that trap and release heat, and contribute to climate change."
                                    />
                                </li>
                                 <li>
                                    <Link to="#" className="flex items-center relative small-title"><FaFileDownload/>Document title.ttf</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </MostRead>
            <div className="still-help-box">
                <div className="green-box flex justify-center flex-col mx-auto">
                    <div className="title-box text-center mx-auto">
                        <h3>Still need help?</h3>
                        <p>Contact a team member.</p>
                    </div>
                    <div className="btn-group flex justify-center flex-wrap mx-auto">
                        <OrangeBtn>
                            <Link to="#">Send an e-mail</Link>
                        </OrangeBtn>
                        <LightGreenBtn>
                            <Link to="#">Schedule a call</Link>
                        </LightGreenBtn>
                    </div>
                </div>
            </div>
        </KnowledgeCenterSection>
    )
}

export default KnowledgeCenter;