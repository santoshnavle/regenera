import React from "react";
import { OrangeBtn } from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SelectPlanBox from "../SelectPlanBox";
import { IoIosInformationCircle } from "react-icons/io";



const StepTwo = ({classname}) => {
    
    const PlanList = [
        {impactIc: '../images/icons/map-icon.svg', listTxt: '2.5 hectare'},
        {impactIc: '../images/icons/leaf-icon.svg', listTxt: '4 Trees '},
        {impactIc: '../images/icons/cotton-icon.svg', listTxt: '25 tonnes CO2'},
    ];

    const StepTwoSection = styled.section`
        margin-top: 60px;
        max-width: 630px;
        .fee-n-box{
            .tooltip-box{
                top: 35px;
                right: 0;
                background-color: white;
                z-index: 9;
            }
        }
        .plan-group{
            gap: 20px;
            .planradio{
                position: relative;
                .radio-box{
                    .checkmark{
                        right: 8px;
                        left: auto;
                        top: 8px;
                    }
                    .plan-box{
                        max-width: 196px;
                        position: relative;
                        top: -18px;
                        border: 1px solid #f7f7f7;
                    }
                    input:checked + .plan-box{
                        border: 1px solid #6EA44C;
                    }
                }
            }
        }
        .cta{
            padding: 0 14px;
            max-width: 305px;
            margin-top: 20px;
            margin-bottom: 7px;
            text-align: center;
            button{
                width: 100%;
            }
            
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            .fee-n-box{
                .tooltip-box{
                    bottom: 35px;
                    top: auto;
                }
            }
            .plan-group{
                flex-wrap: wrap;
                gap: 20px;
                .planradio{
                    position: relative;
                    .radio-box{
                        .checkmark{
                            right: 8px;
                            left: auto;
                            top: 8px;
                        }
                        .plan-box{
                            position: relative;
                            top: -18px;
                        }
                    }
                }
            }
        }
        @media (max-width:500px) {
            .plan-group{
                .planradio{
                    .radio-box{
                        .plan-box{
                            max-width: none;
                        }
                    }
                }
            }
        }
    `

    return(
        <StepTwoSection className={`mx-auto flex flex-col ${classname}`}>
            <div className="fee-n-box w-full box-shadow absolute hide-tab">
                <div className="fee flex items-center justify-space-between">
                    <div className="small-txt small">Monthly fee</div>
                    <div className="big-txt flex items-center small">
                        $120 <Link className="tooltip-ic"><IoIosInformationCircle/></Link>
                        <div className="tooltip-box">
                            As much as we love Stripe to secure our payment system, we want your money to go to Nature in stead of them. As they charge for every transaction, we try to limit those by billing quarterly.
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-title">
                Select your plan
                <div className="title-info text-center show-mobile">
                    Pick how you want to support.
                </div>
            </div>
            <form action="">
                <div className="plan-group flex justify-center">
                    <div className="planradio">
                        <label for="planOne" class="radio-box">
                        <input id="planOne" name="selectplan" type="radio" value=""/>
                        <SelectPlanBox
                            planBoxClass="plan-box w-full"
                            planImg="../images/seed-plan.webp" 
                            planName="Seed plan"
                            planInfo="For start-ups who do not own premises or vehicles and a team up to 10 people. " 
                            planCost="$30"
                            listTitle="Impact:"
                            planduration="/mo" 
                            actionLink="#"
                            actionLinkText="View all features"
                            data = {PlanList}
                        />
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    
                    <div className="planradio">
                        <label for="planTwo" class="radio-box">
                        <input id="planTwo" name="selectplan" type="radio" value=""/>
                        <SelectPlanBox
                            planBoxClass="plan-box"
                            planImg="../images/seed-plan.webp" 
                            planName="Seed plan"
                            planInfo="For start-ups who do not own premises or vehicles and a team up to 10 people. " 
                            planCost="$30"
                            listTitle="Impact:"
                            planduration="/mo" 
                            actionLink="#"
                            actionLinkText="View all features"
                            data = {PlanList}
                        />
                        <span class="checkmark"></span>
                        </label>
                    </div>
                    
                    <div className="planradio">
                        <label for="planThree" class="radio-box">
                        <input id="planThree" name="selectplan" type="radio" value=""/>
                        <SelectPlanBox
                            planBoxClass="plan-box"
                            planImg="../images/seed-plan.webp" 
                            planName="Seed plan"
                            planInfo="For start-ups who do not own premises or vehicles and a team up to 10 people. " 
                            planCost="$30"
                            listTitle="Impact:"
                            planduration="/mo" 
                            actionLink="#"
                            actionLinkText="View all features"
                            data = {PlanList}
                        />
                        <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                {/* fee related box and tooltip */}
                <div className="fee-n-box w-full box-shadow relative show-tab">
                    <div className="fee flex items-center justify-space-between">
                        <div className="small-txt small">Monthly fee</div>
                        <div className="big-txt flex items-center small">
                            $120 <Link className="tooltip-ic"><IoIosInformationCircle/></Link>
                            <div className="tooltip-box">
                                As much as we love Stripe to secure our payment system, we want your money to go to Nature in stead of them. As they charge for every transaction, we try to limit those by billing quarterly.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cta mx-auto">
                    <OrangeBtn>
                        Select and coninue
                    </OrangeBtn>
                </div>
            </form>
            <div className="step-nav flex mx-auto">
                <div className="bullet"></div>
                <div className="bullet current"></div>
                <div className="bullet"></div>
                <div className="bullet"></div>
            </div>
        </StepTwoSection>
    );    
}

export default StepTwo;