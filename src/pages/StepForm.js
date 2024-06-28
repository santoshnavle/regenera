import React from "react";
import styled from "styled-components";
import StepOne from "../components/MultiStepForms/StepOne";
import StepTwo from "../components/MultiStepForms/StepTwo";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const StepForm = () => {
    // styled
    const MainForm = styled.section`
        margin: 0 auto;
        display: flex;
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
                top: 0;
            }
            &::after{
                position:absolute;
                content: "";
                background: white;
                width:1px;
                height:60px;
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
    const FormSection = styled.section`
        flex: 1 1 auto;
        padding: 75px 5% 50px;
        position: relative;
        .form-title{
            font-size: 19px;
            line-height: 27px;
            font-weight: 600;
            margin-bottom: 14px;
            margin-bottom: 15px;
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            margin-top: 66px;
            padding: 20px;
            .form-title{
                text-align: center;
                font-size: 16px;
                line-height: 180%;
                .title-info{
                    font-weight: 400;
                    padding: 0 15px;
                }
            }
            .step-nav{
                order: -1;
                margin-top: 0;
                margin-bottom: 40px;
            }
        }
    `
    

    return (
        <MainForm>
            <StepSection>
                {/* check class - complete-check */}
                <div className="step-one step-each complete-check relative mx-auto">
                    <div className="step-title">Your details</div>
                    <div className="step-text small">Please provide us with your name and e-mail and create a password.</div>
                </div>
                {/* white bg green dot class - start */}
                <div className="step-two step-each start relative mx-auto">
                    <div className="step-title">Select your plan</div>
                    <div className="step-text small">Pick how you want to support.</div>
                </div>
                <div className="step-three step-each relative mx-auto">
                    <div className="step-title">Select your landscape</div>
                    <div className="step-text small">Pick where you want to support.</div>
                </div>
                 <div className="step-four step-each relative mx-auto">
                    <div className="step-title">Add payment details</div>
                    <div className="step-text small">Please provide us with your credit card or debit card details.</div>
                </div>
            </StepSection>
            <FormSection>
                <div className="formnextprev justify-space-between relative w-full flex items-center">
                    <button className="prev-btn absolute flex items-center disable"><IoIosArrowBack /> <small>Previous</small></button>
                    <button className="next-btn absolute flex items-center"><small>Next</small> <IoIosArrowForward /></button>
                </div>
                <StepOne classname=""/>
                <StepTwo classname="hidden"/>
            </FormSection>
        </MainForm>
    )
}

export default StepForm;