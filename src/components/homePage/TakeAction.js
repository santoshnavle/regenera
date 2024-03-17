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
                position: relative;
                .head-border{
                    position: absolute;
                   bottom: 39px;
                    left: 10px;
                }
            }
            .icon-text-container{
                align-self: stretch;
                gap: 20px;
            }
        }

    `

    return(
        <TakeActionSection>
            <div className="take-action-group flex justify-start flex-col mx-auto">
                <div className="title-box">
                    <h1>Take action, boost your organisation's Nature and climate-positive journey.</h1>
                    <img src="../images/title-border-line.svg" className="head-border"/>
                </div>
                <div className="icon-text-container flex justify-space-between flex-row items-start">
                    <IconWithText
                        icon = {"../images/icons/plan-choose-icon.svg"}  
                        title="Measure and choose a plan"
                        text= "Understand your environmental footprint and commit to take action for nature & climate."
                    />
                    <IconWithText
                        icon = {"../images/icons/plan-choose-icon.svg"}  
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