import React from "react";
import styled from "styled-components";


const CreatingDoc = () => {

     const MainForm = styled.section`
        margin: 0 auto;
        display: flex;
        @media (max-width:${({ theme }) => theme.media.tab}) {
            display: block;
        }
    `
    const StepSection = styled.section`
        width: 100%;
        max-width:36%;
        padding: 70px 20px;
        background: ${({ theme }) => theme.colors.title_green};

        .step-each{
            max-width: 258px;
            margin-top: 58px;
            position: relative;
            left: 25px;
            .step-title, .step-text{
                color: white; 
            }
            .step-title{
                color: white;
                font-weight: 600;
                line-height: 28px;
            }
            .step-text{
                line-height: 150%;
            }
            &:first-child{
                margin-top: 0;
            }
            &::before{
                position: absolute;
                content: "•";
                color: white;
                font-size: 77px;
                line-height: 0;
                height: 13px;
                padding: 10px 5px 10px;
                border-radius: 50%;
                border: 1px solid #fff;
                left: -59px;
                background-color: #004D37;
                outline: 8px solid #004D37;
                top: 0;
            }
            &::after{
                position:absolute;
                content: "";
                background: white;
                width:1px;
                height:100px;
                top:40px;
                left: -43px;
            }
            &:last-child{
                &::after{
                    content: none;
                }
            }
        }
        .step-one{
            &::after{
                height:68px;
                top:40px;
            }
        }
        .step-two{
            margin-top: 45px;
        }
        .step-each.start{
            &::before{
                background:white;
                color: #699d49;
            }
        }
        .complete-check{
            &::before{
                background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='12' viewBox='0 0 17 12' fill='none'%3E%3Cpath d='M1 5L5.29453 9.72399C5.6786 10.1465 6.33785 10.1621 6.74158 9.75842L15.5 1' stroke='%236EA44C' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat center center;
                content: "";
                width:22px;
                height: 12px;

            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            display: none;
        }
    `

    const CreatingDocSection = styled.section`
        background: white;
        padding: 95px 20px;
        width: 100%;
        .title-box{
            img{
                max-width: 67px;
                margin-bottom: 32px;
            }
        }
        .creation-box{
            background-color: white;
            max-width: 415px; 
            .input-box-section{
                margin-top: 50px;
                .progress-bar{
                    height: 15px;
                    max-width: 285px;
                    border-radius: 25px;
                    --bulma-progress-border-radius: 25px;
                    --bulma-progress-bar-background-color: #ffffff;
                    --bulma-progress-value-background-color: #6EA44C;
                    --bulma-progress-indeterminate-duration: 1.5s;
                     border: 1px solid #ccc;
                    appearance: none;
                    border: none;
                    overflow: hidden;
                    padding: 0;
                   
                }
            }
        }
        @media (max-width: 500px) {  
            .creation-box{
                padding: 100px 20px 120px;
            }
        }
    `

    return(
        <MainForm>
            <StepSection>
                <div className="step-one step-each complete-check relative mx-auto">
                    <div className="step-title">Choose a role</div>
                    <div className="step-text small">Please select the role that fits your situation best.</div>
                </div>
                <div className="step-two step-each complete-check relative mx-auto">
                    <div className="step-title">Your details</div>
                    <div className="step-text small">Please provide us with your name, email and location preferences.</div>
                </div>
                <div className="step-three step-each start relative mx-auto">
                    <div className="step-title">Sign Letter</div>
                    <div className="step-text small">Sign the Letter of Intent to confirm your interest.</div>
                </div>
            </StepSection>
            <CreatingDocSection className="mx-auto flex justify-center items-center">
                <div className="creation-box mx-auto text-center relative">
                    <div className="title-box text-center">
                        <img src="../images/doc-create-ic.webp" alt="creating doc process"/>
                        <h2>Creating document</h2>
                    </div>
                    <p>We're creating the Letter of Intent. This will only take a few moments.</p>
                    <div className="input-box-section">
                        <progress className="progress-bar w-full mx-auto" value={75} max={100} />
                    </div>
                </div>
            </CreatingDocSection>
        </MainForm>
        
    );    
}

export default CreatingDoc;