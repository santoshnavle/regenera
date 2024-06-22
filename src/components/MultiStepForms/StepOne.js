import React from "react";
import CheckBoxInfo from "../checkbox";
import { OrangeBtn } from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";



const StepOne = () => {

    const consentLabel = <div dangerouslySetInnerHTML={{ __html: "<small>Click to agree to <a href='#'>our Privacy Policy</a></small>" }} />;

    const StepOneSection = styled.section`
        max-width: 412px;
        .form-section{
            gap: 16px;
        }
        .cta{
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
    `

    return(
        <StepOneSection className="mx-auto">
            <div className="form-title">
                Your details
            </div>
            <form action="">
                <div className="form-section flex flex-col">
                    <div className="two-col flex space-between">
                        <div className="input-box-section">
                            <label for="fname" className="small">Name</label>
                            <input name="fname" aria-describedby="firstnamehelp" placeholder="Name" className="form-control"/>
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
                        <div className="input-box-section">
                            <select name="hearfromus" className="form-control select-box-control" aria-describedby="Howdidyouhearfromus">
                                <option value="">How did you hear from us?</option>
                                <option value="apple">Apple</option>
                                <option value="banana">Banana</option>
                                <option value="orange">Orange</option>
                            </select>
                        </div>
                    </div>
                    <div className="one-col">
                        <div className="input-box-section">
                            <select name="hearfromus" className="form-control select-box-control" aria-describedby="Howdidyouhearfromus">
                                <option value="">For whom are you signing up?</option>
                                <option value="apple">Apple</option>
                                <option value="banana">Banana</option>
                                <option value="orange">Orange</option>
                            </select>
                        </div>
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