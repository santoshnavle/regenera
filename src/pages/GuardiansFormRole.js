import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GuardianRole from "../components/RoleBox";


const GuardiansForm = () => {
    // styled
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
        .choose-role{
            max-width: 420px;
            .title-box{
                margin-bottom: 12px;
                .small-title{
                    margin-bottom: 20px;
                }
                .choose-title{
                    font-weight: 600;
                }
            }
            
            .guardian-role{
                margin-bottom: 8px;
            }
            .radio-box{
                padding-left: 0;
                input:checked + .guardian-role{
                    background: #6EA44C;
                    color: white;
                    border-radius: 8px;
                    .green-link{
                        color: white;
                    }
                }
            }
        }
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
                    flex: 1 0 auto;
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
    

    return (
        <MainForm>
            <StepSection>
                <div className="step-one step-each start relative mx-auto">
                    <div className="step-title">Choose a role</div>
                    <div className="step-text small">Please select the role that fits your situation best.</div>
                </div>
                <div className="step-two step-each relative mx-auto">
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
                    <Link className="breadbrumb-link active">Choose a role</Link>
                    <Link className="breadbrumb-link" to="#">Fill in details</Link>
                    <Link className="breadbrumb-link" to="#">Sign Letter</Link>
                </div>
                <div className="choose-role mx-auto">
                    <div className="title-box text-center">
                        <div className="small-title">Ready to protect your land? Confirm your interest by signing the Letter of Intent </div>
                        <div className="choose-title">Choose a role:</div>
                    </div>
                    <form action="">
                        <label for="roleOne" class="radio-box">
                            <input id="roleOne" name="selectRole" type="radio" value=""/>
                            <GuardianRole
                                classrole="guardian-role"
                                roleImg="../images/role1.webp"
                                roleImgM="../images/role1m.webp"
                                roleTitle="Private Guardian"
                                rolePara="Choose this option if you manage land through an individual or family title."
                                linkText="Select and sign up"
                            />
                        </label>
                        <label for="roleTwo" class="radio-box">
                            <input id="roleTwo" name="selectRole" type="radio" value=""/>
                            <GuardianRole
                                classrole="guardian-role"
                                roleImg="../images/role2.webp"
                                roleImgM="../images/role2m.webp"
                                roleTitle="Collective Guardian"
                                rolePara="Choose this option if you manage land as a community, cooperative, association, or other collective."
                                linkText="Select and sign up"
                            />
                        </label>
                        <label for="roleThree" class="radio-box">
                            <input id="roleThree" name="selectRole" type="radio" value=""/>
                            <GuardianRole
                                classrole="guardian-role"
                                roleImg="../images/role3.webp"
                                roleImgM="../images/role3m.webp"
                                roleTitle="Public Guardian"
                                rolePara="Choose this option if you manage land as a public or private concession holder."
                                linkText="Select and sign up"
                            />
                        </label>
                    </form>
                </div>
                <div className="step-nav hide-tab flex mx-auto">
                    <div className="bullet current"></div>
                    <div className="bullet"></div>
                    <div className="bullet"></div>
                </div>
            </FormSection>
        </MainForm>
    )
}

export default GuardiansForm;