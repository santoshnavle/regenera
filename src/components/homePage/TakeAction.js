import React from "react";
import styled from "styled-components";
import IconWithText from "../iconWithText";

const TakeAction = () => {

    const TakeActionSection = styled.section`
        padding: 88px 4.8rem 110px;
        text-align:center;

        .take-action-group{
            max-width: 1200px;
            width: 100%;
            flex: 1;
            gap: 72px 0;

            .title-box{
                max-width: 630px;
                margin: 0 auto;
                .border-img-section{
                    position: relative;
                    .head-border{
                        position: absolute;
                        bottom: -5px;
                        left: 0;
                    }
                }
                
            }
            .icon-text-container{
                align-self: stretch;
                gap: 20px;
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 56px 20px 42px;
            .take-action-group{
                gap: 32px;
                .icon-text-container{
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 40px;
                }
            }
        }
    `

    return(
        <TakeActionSection>
            <div className="take-action-group flex justify-start flex-col mx-auto">
                <div className="title-box">
                    <h1>
                    <span className="border-img-section">
                        Take action,
                        <img src="../images/title-border-line.svg" alt="border line" className="head-border"/>
                    </span> boost your organisation's Nature and climate-positive journey.</h1>
                </div>
                <div className="icon-text-container flex justify-space-between flex-row items-start">
                    <IconWithText
                        icon = {"../images/icons/plan-choose-icon.svg"}  
                        title="Measure and choose a plan"
                        text= "Understand your environmental footprint and commit to take action for nature & climate."
                    />
                    <IconWithText
                        icon = {"../images/icons/hand-plant-icon.svg"}  
                        title="Improve your operational performance"
                        text= "Obtain advice on your path to Net Zero and connect with local people regenerating Nature."
                    />
                    <IconWithText
                        icon = {"../images/icons/lead_icon.svg"}  
                        title="Lead for greater impact"
                        text= "Share your progress and inspire others to take nature & climate action."
                    />
                </div>
            </div>
        </TakeActionSection>
    );    
}

export default TakeAction;