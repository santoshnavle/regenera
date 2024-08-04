import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const GuardianRole = ({roleImg, roleTitle, rolePara, linkText, classrole}) => {
    const GuardianRole = styled.section`
        .role-box{
            padding: 12px;
            box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.02);
            border: 1px solid #DDEDD0;
            border-radius: 8px;
            gap: 8px;
            .role-img{
                min-width: 106px;
            }
            .role-infobox{
                .role-title{
                    font-size: 19px;
                    font-weight: 600;
                    line-height: 27px;
                    margin-bottom: 0;
                }
                p{
                    line-height: 150%;
                    margin-top:0;
                }
                .green-link{
                    margin: 3px 0;
                    svg{
                        font-size:20px;
                        transition: all 1s ease-out;
                    }
                    span{
                        line-height: 23px;
                    }
                    &:hover{
                        svg{
                            right: -5px;
                        }
                    }
                }
            }
            &:hover{
                border: 1px solid #6EA44C;
                background-color: #6EA44C;
                color: white;
                .role-infobox{
                    .green-link{
                        color: white;
                    }
                }
            }
        }
        
        @media (max-width:${({ theme }) => theme.media.tab}){
            .role-box{
                .role-infobox{
                    .role-title{
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 24px;
                        margin-bottom: 0;
                    }
                    p{
                        line-height: 150%;
                        margin-top:0;
                    }
                    .green-link{
                        margin: 3px 0;
                        svg{
                            font-size:20px;
                            transition: all 1s ease-out;
                        }
                        span{
                            line-height: 23px;
                        }
                        &:hover{
                            svg{
                                right: -5px;
                            }
                        }
                    }
                }
                &:hover{
                    border: 1px solid #6EA44C;
                    background-color: #6EA44C;
                    color: white;
                    .role-infobox{
                        .green-link{
                            color: white;
                        }
                    }
                }
            }
        }
    `
    return (
        <GuardianRole className={classrole}>
            <div className="role-box flex">
                <div className="role-img">
                    <img src={roleImg} className="w-full" alt="role-img"/>
                </div>
                <div className="role-infobox">
                    <h5 className="role-title">{roleTitle}</h5>
                    <p className="small">{rolePara}</p>
                    <Link to="#" className="green-link flex items-center small"><span>{linkText}</span> <MdKeyboardArrowRight className="relative"/></Link>
                </div>
            </div>
        </GuardianRole>
    )
}

export default GuardianRole;