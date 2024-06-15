import React from "react";
import styled from "styled-components";
import { LightGreenBtn } from "./Button";
import { Link } from "react-router-dom";

const PlanBoxOption = ({planBoxClass, planImg, planName, planInfo, planCost, planduration, actionLink, actionLinkText, data}) => {

    const PlanBox = styled.div`
        padding:40px;
        border-radius: 8px;
        box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
        .plan-intro{
            text-align:center;
            .plan-name{
                margin-top:12px;
                font-size: 19px;
                font-weight: 600;
                line-height: 27px;
            }
            .plan-info{
                line-height: 150%;
                font-weight:300;
            }
            .plan-cost{
                font-size:32px;
                font-weight:500;
                line-height: 42px;
                padding:12px 0;
                span{
                    font-size:19px;
                    line-height: 27px;
                }
            }
        }
        .feature-boxes{
            .feature{
                padding:12px 0;
                border-top:1px solid #F6F6F6;
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
                        padding-left:32px;
                        &::before{
                            position:absolute;
                            content: "";
                            background: url('../images/list-icon.png') no-repeat center center;
                            width:20px;
                            height:21px;
                            top:5px;
                            left: 0;
                        }
                    }
                }
            }
        }
        .action{
            margin-top:12px;
            button{
                width: 100%;
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding:16px;
            .plan-intro{
                text-align:left;
                .plan-name{
                    margin-top:8px;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 24px;
                }
                .plan-cost{
                    font-size:28px;
                    font-weight:500;
                    line-height: 38px;
                    padding:8px 0;
                }
            }
            .feature-boxes{
                .feature{
                    padding:8px 0;
                    .feature-title{
                        font-size: 17px;
                        line-height: 24px;
                        font-weight: 500;
                    }
                }
            }
        }
        .action{
            margin-top:8px;
        }
    `

    return (
        <PlanBox className={planBoxClass}>
            <div className="plan-intro">
                <img src={planImg} alt={planName}/>
                <div className="plan-name">{planName}</div>
                <div className="plan-info"><small>{planInfo}</small></div>
                <div className="plan-cost">{planCost}<span>{planduration}</span></div>
            </div>
            <div className="feature-boxes">
                {data.map((item) => (
                    <div className="feature">
                        {item.featureTitle && (
                            <>
                                <div className="feature-title">{item.featureTitle}</div>
                                <div className="short"><small>{item.featureShort}</small></div>
                            </>
                        )}
                        <ul className="list">
                            {item.featureList.map((innritem) => {
                                return(
                                    <li dangerouslySetInnerHTML={{__html:innritem}}></li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="action text-center">
                <LightGreenBtn>
                    <Link to={actionLink}>{actionLinkText}</Link>
                </LightGreenBtn>
            </div>
            
            
        </PlanBox>
    )
}

export default PlanBoxOption;