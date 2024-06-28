import React from "react";
import styled from "styled-components";
import { LightGreenBtn } from "./Button";
import { Link } from "react-router-dom";

const SelectPlanBox = ({planBoxClass, planImg, planName, planInfo, planCost, planduration, actionLink, actionLinkText, listTitle, data}) => {

    const SelectPlanBox = styled.div`
        padding:15px;
        border-radius: 8px;
        box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
        .plan-intro{
            img{
                max-height: 37px;
            }
            .name-cost{
                margin-left: 8px;
                 .plan-name{
                    font-weight: 600;
                    line-height: 180%;
                }
                .plan-cost{
                    font-size:19px;
                    font-weight:500;
                    line-height: 27px;
                }
            }            
        }

        .plan-data-box{
            flex-wrap: wrap;
            .plan-info{
                line-height: 150%;
                font-weight:300;
                min-height: 100px;
            }
            .feature-boxes{
                padding:8px 0;
                border-top:1px solid #F6F6F6;
                .impact-title{
                    font-weight: 600;
                    line-height: 180%;
                }
                .feature{
                    .feature-title{
                        font-size: 19px;
                        line-height: 27px;
                        font-weight: 500;
                    }
                    .short{
                        line-height: 150%;
                        font-weight: 300;
                    }
                    .list{
                        margin-top:8px;
                        li{
                            line-height: 180%;
                            margin-top: 4px;
                            position:relative;
                            gap: 8px;
                            align-items: center;
                            .img-box{
                                min-width: 22px;
                                text-align: center;
                            }
                            .list-txt{
                                font-weight: 300;
                            }
                        }
                    }
                }
            }
        }
        
        .action{
            margin-top:auto;
            .action-link{
                font-size: 14px;
                color: #6EA44C;
                line-height: 180%;
                gap: 4px;
                font-weight: 600;
                &:hover{
                    gap: 6px;
                    img{
                        scale: 1.2;
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            .plan-intro{
                .name-cost{
                    margin-left: 8px;
                    .plan-cost{
                        font-size:16px;
                        line-height: 25px;
                    }
                }            
            }
            .plan-data-box{
                .plan-info{
                    min-height: auto;
                    padding-bottom: 8px;
                }
            }
        }
    `

    return (
        <SelectPlanBox className={`flex flex-col ${planBoxClass}`}>
            <div className="plan-intro">
                <div className="plan-img-price flex">
                    <img src={planImg} alt={planName}/>
                    <div className="name-cost">
                        <div className="plan-name small">{planName}</div>
                        <div className="plan-cost">{planCost}<span>{planduration}</span></div>
                    </div>
                </div>
            </div>
            <div className="plan-data-box flex">
                <div className="plan-info"><small>{planInfo}</small></div>
                <div className="feature-boxes w-full">
                    <div className="impact-title">{listTitle}</div>
                    <div className="feature">
                        <ul className="list">
                            {data.map((item) => (
                                <li className="flex items-center">
                                    <div className="img-box flex justify-center items-center">
                                        <img src={item.impactIc} alt={item.listTxt}/>
                                    </div>
                                    <span className="list-txt small">{item.listTxt}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="action">
                <Link to={actionLink} className="action-link smooth flex items-center">{actionLinkText} <img src="../images/icons/feature-link-icon.svg" alt="action icon"/></Link>
            </div>
        </SelectPlanBox>
    )
}

export default SelectPlanBox;