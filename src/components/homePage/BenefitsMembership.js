import React from "react";
import { Link } from "react-router-dom";
import {LightGreenBtn} from "../Button";
import styled from "styled-components";

const Membership = () => {

    const Benefits = styled.section`
        background: rgba(221, 237, 208, 0.16);
        padding: 125px 4.8rem 93px;
        text-align:left;
        .two-cols{
            width: 100%;
            max-width: 1200px;
            flex: 1;
            gap: 120px;
            .Benefits-info{
                width: 100%;
                max-width: 522px;
                gap: 28px;
                .title-box{
                    position: relative;
                    img{
                        position: absolute;
                        left: 0;
                        top: 37px;
                    }
                    .description{
                        line-height: 180%;
                    }
                }
                .list-of-benefits{
                    gap: 28px;
                    ul{
                        gap: 8px;
                        li{
                            position: relative;
                            padding-left: 29px;
                            line-height: 180%;
                            &:before{
                                content: "";
                                position: absolute;
                                width: 19px;
                                height: 23px;
                                left: 0;
                                top: 3px;
                                background-image: url("../images/list-leaf.svg");
                            }
                        }
                    }
                    .light-btn{
                        max-width: 400px;
                        padding: 0 35px;
                    }
                }
                
            }
            .img-box{

            }
        }
    `

    return(
        <Benefits>
            <div className="two-cols flex justify-start items-center mx-auto">
                <div className="Benefits-info flex flex-col">
                   <div className="title-box">
                        <h3>Benefits of your membership</h3>
                        <img src="../images/title-border-single.svg" alt="border"/>
                        <div className="description">
                            <p>One thing is to be told your organisation is making a difference. Another is to know and share its positive Nature and climate impact. That's why we make it simple and insightful for you. When you partner with us, you will receive:</p>
                        </div>
                   </div>
                    <div className="list-of-benefits flex flex-col">
                        <ul className="flex flex-col">
                            <li>
                                Footprint report following international standards
                            </li>
                            <li>
                                Nature &amp; Climate Action Roadmap and advisory
                            </li>
                            <li>
                                Nature &amp; Climate Action certification
                            </li>
                            <li>
                                Monthly updates from your chosen landscape
                            </li>
                            <li>
                                Digital trimestral impact reports for your team
                            </li>
                        </ul>
                        <LightGreenBtn className="light-btn">
                            <Link to="#">Calculate your organisation's footprint</Link>
                        </LightGreenBtn>
                    </div>
                </div>
                <div className="img-box">
                    <img src="../images/benefits-members.png" alt="membership benefits"/>
                </div>
            </div>
           
        </Benefits>
    );    
}

export default Membership;