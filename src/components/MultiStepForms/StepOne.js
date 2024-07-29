import React from "react";
import CheckBoxInfo from "../checkbox";
import CustomRadioSelect from "../selectRadioDropdown";
import { OrangeBtn } from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";



const StepOne = ({classname}) => {

    const consentLabel = <div dangerouslySetInnerHTML={{ __html: "<small>Click to agree to <a href='#'>our Privacy Policy</a></small>" }} />;
    const optionsList = [
        "How did you hear from us?",
        "For myself",
        "For me and my family",
        "For an organisation",
    ];
    const StepOneSection = styled.section`
        max-width: 440px;
        .form-section{
            gap: 16px;
            padding: 0 14px;
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
            .login-cta{
                line-height: 150%;
                margin-top: 8px;
                a{
                    font-weight: 600;
                }
            }
        }
         @media (max-width:${({ theme }) => theme.media.tab}) {
            .form-section{
                gap: 24px;
            }
         }
    `

    return(
        <StepOneSection className={`mx-auto flex flex-col ${classname}`}>
            <div className="form-title">
                Your details
                <div className="title-info text-center show-tab">
                    Please provide us with your name and e-mail and create a password.
                </div>
            </div>
            <form action="">
                <div className="form-section flex flex-col">
                    <div className="two-col flex space-between">
                        <div className="input-box-section">
                            <label for="fname" className="small">First Name</label>
                            {/* for disabled use class disabled */}
                            <input name="fname" aria-describedby="firstnamehelp" disabled placeholder="Name" className="form-control disabled"/>
                        </div>
                        <div className="input-box-section">
                            <label for="lname" className="small">Last name</label>
                            <input name="lname" aria-describedby="lastnamehelp" placeholder="Last name" className="form-control"/>
                        </div>
                    </div>
                    <div className="one-col">
                        <div className="input-box-section">
                            <label for="email" className="small">E-mail</label>
                            <input name="email" type="email" aria-describedby="emailhelp" placeholder="E-mail" className="form-control"/>
                        </div>
                    </div>
                    <div className="two-col flex space-between">
                        <div className="input-box-section">
                            <label for="password" className="small">Password</label>
                            <input name="password" type="password" aria-describedby="passwordhelp" placeholder="Password" className="form-control"/>
                        </div>
                        <div className="input-box-section">
                            <label for="rpassword" className="small">Repeat password</label>
                            <input name="rpassword" value="1234567" type="password" aria-describedby="repeatpasswordhelp" placeholder="Password" className="form-control input-error"/>
                            <span className="error-text small">Passwords do not match</span>
                        </div>
                    </div>
                    <div className="one-col">
                        <CustomRadioSelect
                            classname="form-control"
                            optionsList = {optionsList}
                        />
                    </div>
                    <div className="one-col">
                        <CustomRadioSelect
                            classname="form-control"
                            optionsList = {optionsList}
                        />
                    </div>
                    <div className="one-col">
                        <CheckBoxInfo
                        labelName = {consentLabel} 
                        labelId = "consent" 
                        checkboxSection="contsent-box"
                        />
                    </div>
                </div>
                <div className="cta mx-auto">
                    <OrangeBtn>
                        Sign up
                    </OrangeBtn>
                    <div className="login-cta small">
                        Already have an account? <Link to="#">Log in</Link>
                    </div>
                </div>
            </form>
            <div className="step-nav flex mx-auto">
                <div className="bullet current"></div>
                <div className="bullet"></div>
                <div className="bullet"></div>
                <div className="bullet"></div>
            </div>
        </StepOneSection>
    );    
}

export default StepOne;