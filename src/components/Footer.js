import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LightGreenBtn } from "../components/Button";
import { IconContext } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import * as Icon from "react-icons/fi";

import Checkbox from "react-custom-checkbox";

const Footer = () => {
    const FooterParent = styled.footer`
        padding: 6.875rem 4.8rem 1.75rem;
        .footer-main{
            max-width: 100%;
            align-self: stretch;
            flex-wrap: wrap;
            gap: 0 23px;
            color: ${({theme}) => theme.colors.light_green};
            padding-bottom: 50px;

            .company-info{
                max-width: 304px;
                width: 100%;
                align-self: stretch;

                .logo-info {
                    gap: 20px 0;
                    z-index: 1;
                    align-self: stretch;
                    img{
                        width: 100%;
                        max-width: 230px;
                    }
                    .power-info{
                        align-self: stretch;
                        line-height: 180%;

                        p{
                            margin-top: 0;
                        }
                    }
                }
                
                .follow-us-parent{
                    align-self: stretch;
                    gap: 12px 0;
                    font-size: 16px;
                    .social-icons-parent {
                        width: 168px;
                        gap: 0 8px;
                        text-align: center;
                        font-size: 22px;
                        color: ${({theme})=>theme.colors.white};
                        
                        .social-icons {
                            height: 36px;
                            width: 36px;
                            position: relative;
                            border-radius: 50%;
                            background-color: ${({theme}) => theme.colors.title_green};
                            transition: all 0.3s ease;
                            -webkit-transition: all 0.3s ease 0s;
                            -moz-transition: all 0.3s ease 0s;
                            -o-transition: all 0.3s ease 0s;
                            &:hover{
                                background-color: ${({theme})=>theme.colors.light_green};
                            }
                        }
                    }

                }
            }
            .footer-actions-parent{
                max-width: 100%;
                flex: 1;
                gap: 0 20px;
                min-width: 619px;
                z-index: 1;
                font-size: 16px;
                .footer-actions{
                    min-width: 196px;
                    padding: 0 10px 0 0;
                    box-sizing: border-box;
                    gap: 20px 0;

                    .footer-action-head{
                        line-height: 180%;
                        display: inline-block;
                        flex-shrink: 0;
                    }
                    .subscrib-head{
                        width: 276px;
                    }
                    form{
                        .input-group{
                            gap: 9px;
                        }
                    }
                    .footer-links{
                        gap: 16px 0;
                        a{
                            font-weight: bold;
                            color: ${({theme}) => theme.colors.title_green};
                             transition: all 0.3s ease;
                            -webkit-transition: all 0.3s ease 0s;
                            -moz-transition: all 0.3s ease 0s;
                            -o-transition: all 0.3s ease 0s;

                            &:hover{
                                color: ${({theme})=>theme.colors.light_green};
                            }
                        }
                    }
                    &:last-child{
                        padding-right: 0;
                        max-width: 304px;
                    }
                }
            }
        }
        .footer-copyright-parent{
            height: 40px;
            padding-top: 15px;
            border-top: 1px solid #f6f6f6;
            color: ${({theme}) => theme.colors.text_color};

            .footer-copy-lists{
                align-self: stretch;
                max-width: 100%;
                gap: 20px;

                .lang-foooter-link{
                    font-weight: 600;
                    li{
                        position: relative;
                         a{
                            font-weight: 400;
                        }
                        &::after{
                            content: "/";
                            position: absolute;
                            left: 70px;
                        }
                        &:last-child{
                            &::after{
                                content: "";
                            }
                        }
                    }
                } 

                .footer-copy-links{  
                    gap: 0 40px;
                    max-width: 100%;
                    z-index: 1;
                    font-size: 14px;
                    a{
                        font-weight: 600;
                        color: ${({theme}) => theme.colors.text_color};

                        &:hover{
                            color: black;
                        }
                    }
                }  

            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 26px 20px 30px;
            .footer-main{
                padding-bottom: 24px;
                 .company-info{
                    max-width: 100%;
                    gap: 24px;
                    .logo-info {
                        gap: 10px 0;
                        img{
                            width: 100%;
                            max-width: 207px;
                        }
                        .power-info{
                            p{
                                font-size: 12px;
                            }
                        }
                    }
                    .follow-us-parent{
                        font-size: 14px;
                    }
                }
                .footer-actions-parent{
                    font-size: 14px;
                    flex-wrap: wrap;
                    min-width: auto;
                    gap: 24px;
                    margin-top: 24px;
                    .footer-actions{
                        flex: 1 0 auto;
                        gap: 12px;
                        min-width: auto;
                        form{
                            .input-group{
                                gap: 8px;
                                flex-direction: row;
                                input{
                                    &:first-child{
                                       flex: 1 0 40%
                                    }
                                }
                            }
                        }
                        .footer-links{
                            gap: 8px;
                        }
                        .subscrib-head{
                            width: 276px;
                        }
                        &:first-child{
                            min-width: 190px;
                        }
                        &:last-child{
                            min-width: 100%;
                        }
                    }
                }
            }
            .footer-copyright-parent{
                height: auto;
                padding-top: 24px;
                .footer-copy-lists{
                    flex-direction: column;
                    gap: 24px;
                    .footer-copy-links{  
                        gap: 5px;
                        font-size: 12px;
                        flex-direction: column;
                    }  
                    .lang-foooter-link{
                        font-weight: 600;
                        gap: 20px;
                        flex-direction: row;
                        li{
                            position: relative;
                            &::after{
                                left: 55px;
                            }
                        }
                    } 
                }
            }
        }
    `
    const FormContainer = styled.div`
        margin: 0 auto;
        .consent-check{
            label{
                align-items: flex-start !important;
            }
        }
        .subscribe-btn{
            width: 100%;
        }
    `;

    const Form = styled.form`
    gap: 12px 0;
    `;

    const Input = styled.input`
    width: 100%;
    padding: 4px 16px;
    border: 1px solid #ddedd0;
    border-radius: 25px;
    line-height: 27px;
    `;


    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Submit the form data to your server
    };
    return <>
        <FooterParent>
            <div className="footer-main flex items-start justify-start">
                <div className="company-info flex flex-col justify-space-between items-end">
                    <div className="logo-info flex flex-col items-start justify-start">
                        <img src="./images/logo-regenera.png" alt="logo" className="logo" />
                        <div className="power-info">
                            <p>Powered by our members, <br/> coordinated by <strong> Nature Services.</strong></p>
                        </div>
                    </div>
                    <div className="follow-us-parent flex flex-col justify-start items-start">
                        <div className="follow-us">Follow us</div>
                        <div className="social-icons-parent flex items-start justify-start">
                            <Link className="social-icons flex justify-center items-center" to="/">
                                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                    <FaLinkedinIn />
                                </IconContext.Provider>
                            </Link>
                            <Link className="social-icons flex justify-center items-center" to="/">
                                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                    <FaFacebookF />
                                </IconContext.Provider>
                            </Link>
                            <Link className="social-icons flex justify-center items-center" to="/">
                                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                    <FaInstagram />
                                </IconContext.Provider>
                            </Link>
                            <Link className="social-icons flex justify-center items-center" to="/">
                                <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                                    <FaYoutube />
                                </IconContext.Provider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-actions-parent flex items-start justify-end ">
                    <div className="footer-actions flex flex-col items-start justify-start">
                        <div className="footer-action-head">
                            Get in touch
                        </div>
                        <div className="footer-links flex flex-col items-start justify-start">
                            <Link to = "#">
                                Schedule a call
                            </Link>
                            <Link to = "#">
                                Send an e-mail
                            </Link>
                            <div>Av. El Sol 627-B. Of. 404 Cusco, Perú</div>
                        </div>
                    </div>
                    <div className="footer-actions flex flex-col items-start justify-start">
                        <div className="footer-action-head">
                            Join the mission
                        </div>
                        <div className="footer-links flex flex-col items-start justify-start">
                            <Link to = "#">
                                As an organisation
                            </Link>
                            <Link to = "#">
                                As a person
                            </Link>
                            <Link to = "#">
                                As a land manager
                            </Link>
                        </div>
                    </div>
                    <div className="footer-actions flex flex-col items-start justify-start">
                        <div className="footer-action-head">
                            Learn more
                        </div>
                        <div className="footer-links flex flex-col items-start justify-start">
                            <Link to = "#">
                                Home
                            </Link>
                            <Link to = "#">
                                About us
                            </Link>
                            <Link to = "#">
                                Blog
                            </Link>
                            <Link to = "#">
                                FAQ
                            </Link>
                        </div>
                    </div>
                    <div className="footer-actions flex flex-col items-start justify-start">
                        <div className="footer-action-head subscrib-head">
                            Subscribe to our newsletter
                        </div>
                        <FormContainer>
                            <Form onSubmit={handleSubmit} className="flex flex-col items-center">
                                <div className="input-group w-full flex flex-col">
                                    <Input
                                    type="name"
                                    placeholder="Name"
                                    />

                                    <Input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="consent-check">
                                     <Checkbox
                                        icon={<Icon.FiCheck color="#174A41" size={16} />}
                                        name="my-input"
                                        checked={true}
                                        borderColor="#ddedd0"
                                        style={{ cursor: "pointer" }}
                                        labelStyle={{ marginLeft: 5, userSelect: "none", lineHeight: "1.3" }}
                                        label="I agree to receive a monthly update and can unsubscribe at any time."
                                    />
                                </div>
                               
                                <LightGreenBtn className="subscribe-btn" type="submit">Sign up</LightGreenBtn>
                            </Form>
                        </FormContainer>
                    </div>
                </div>
            </div>
            <div className="footer-copyright-parent">
                <div className="footer-copy-lists flex flex-row items-start justify-space-between">
                    <ul className="footer-copy-links flex flex-row items-start justify-start">
                        <li>&copy; Regenera, 2024</li>
                        <li><Link to="#">Terms & Conditions</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Cookies</Link></li>
                    </ul>
                    <ul className="footer-copy-links lang-foooter-link flex flex-row items-start justify-start">
                        <li>English</li>
                        <li><Link to="#">Spanish</Link></li>
                    </ul>
                </div>
            </div>
        </FooterParent>
    </>
}

export default Footer;