import React from "react";
import styled from "styled-components";
import CheckBoxInfo from "../components/checkbox";
import CustomRadioSelect from "../components/selectRadioDropdown";
import { OrangeBtn } from "../components/Button";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const GuardianSignup = () => {
    const consentLabel = <div dangerouslySetInnerHTML={{ __html: "<small>Click to agree to <a href='#'>our Privacy Policy</a></small>" }} />;
    const optionsList = [
        "Select Location",
        "Outside Peru",
        "Amazonas",
        "Ancash",
        "Callao",
    ];
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
    const FormSection = styled.section`
        width: 100%;
        padding: 57px 5% 50px;
        @media (max-width:${({ theme }) => theme.media.tab}) {
            margin-top: 66px;
            padding: 20px;
            .breadcrumb{
                margin-bottom: 32px;
                gap: 29px;
                a{
                    position: relative;
                    font-size: 14px;
                    color: #6EA44C;
                    &::after{
                        content: ">";
                        position: absolute;
                        right: -18px;
                    }
                    &:last-child{
                        &::after{
                            content: none;
                        }
                    }
                }
                .active{
                    font-weight: 600;
                    color: #004D37;
                }
            }
        }
    `

    const DetailFormSection = styled.section`
        max-width: 440px;
        .form-title{
            margin-bottom: 29px;
            .title-info{
                font-size: 16px;
                line-height: 180%;
                font-weight: 400;
            }
        }
        .form-section{
            gap: 16px;
            padding: 0 14px;
            .two-col{
                .input-box-section{
                    width: 50%;
                }
            }
            .select-language{
                gap: 8px;
                .radio-box{
                    border: 1px solid #DDEDD0;
                    border-radius: 8px;
                    padding-left: 0;
                    input{
                        left: 0;
                        right: 0;
                    }
                    .language-btn{
                        padding: 2px 12px;
                        font-weight: 400;
                        line-height: 180%;
                    }
                    input:checked + .language-btn{
                        background: #6EA44C;
                        color: white;
                        border-radius: 8px;
                        border-color: #6EA44C;
                    }
                }
            }
            
        }
        .cta{
            padding: 0 14px;
            max-width: 305px;
            margin-top: 30px;
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
            .form-title{
                margin-bottom: 20px;
            }
            .form-section{
                gap: 24px;
                .two-col{
                    .input-box-section{
                        width: 100%;
                    }
                }
                .select-language{
                    gap: 10px;
                    .radio-box{
                        flex: 1 0 auto;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
         }
    `
    

    return (
        <MainForm>
            <StepSection>
            <div className="step-one step-each complete-check relative mx-auto">
                    <div className="step-title">Choose a role</div>
                    <div className="step-text small">Please select the role that fits your situation best.</div>
                </div>
                <div className="step-two step-each start relative mx-auto">
                    <div className="step-title">Your details</div>
                    <div className="step-text small">Please provide us with your name, email and location preferences.</div>
                </div>
                <div className="step-three step-each relative mx-auto">
                    <div className="step-title">Sign Letter</div>
                    <div className="step-text small">Sign the Letter of Intent to confirm your interest.</div>
                </div>
            </StepSection>
            <FormSection>
                <div className="show-flex-tab justify-center breadcrumb mx-auto flex">
                    <Link className="breadbrumb-link" to="#">Choose a role</Link>
                    <Link className="breadbrumb-link active">Fill in details</Link>
                    <Link className="breadbrumb-link" to="#">Sign Letter</Link>
                </div>
                <div className="formnextprev justify-space-between relative hide-tab w-full flex items-center">
                    <button className="prev-btn absolute flex items-center disable"><IoIosArrowBack /> <small>Previous</small></button>
                    <button className="next-btn absolute flex items-center"><small>Next</small> <IoIosArrowForward /></button>
                </div>
                <DetailFormSection className="mx-auto flex flex-col">
                    <div className="form-title small-title text-center">
                        Your details
                        <div className="title-info text-center">
                            Please provide us with your name and e-mail and location preferences.
                        </div>
                    </div>
                    <form action="">
                        <div className="form-section flex flex-col">
                            <div className="two-col flex space-between">
                                <div className="input-box-section">
                                    <label for="fname" className="small">First Name</label>
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
                            <div className="two-col flex space-between">
                                <div className="input-box-section">
                                    <label className="small">Language</label>
                                    <div className="select-language flex space-between">
                                        <label for="languageOne" class="radio-box">
                                            <input id="languageOne" name="selectlanguage" type="radio" value=""/>
                                            <div className="language-btn">English</div>
                                        </label>
                                        <label for="languageTwo" class="radio-box">
                                            <input id="languageTwo" name="selectlanguage" type="radio" value=""/>
                                            <div className="language-btn">Español</div>
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="input-box-section">
                                    <label className="small">Location</label>
                                    <CustomRadioSelect
                                        classname="form-control"
                                        optionsList = {optionsList}
                                    />
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
                    <div className="step-nav hide-tab flex mx-auto">
                        <div className="bullet"></div>
                        <div className="bullet current"></div>
                        <div className="bullet"></div>
                    </div>
                </DetailFormSection>
            </FormSection>
        </MainForm>
    )
}

export default GuardianSignup;