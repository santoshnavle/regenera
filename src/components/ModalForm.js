import React, {useState} from "react";
import styled from "styled-components";
import { OrangeBtn } from "./Button";
import { Link } from "react-router-dom";
import CheckBoxInfo from "../components/checkbox";
import { IoClose } from "react-icons/io5";


const ModalFormBox = ({modalformClass, closeBtn}) => {

    const [isVisible, setIsvisible] = useState(false);

    const toggleVisible = () => {
        setIsvisible(!isVisible);
    }

    const consentLabel = <div dangerouslySetInnerHTML={{ __html: "<small>Click to agree to <a href='#'>our Privacy Policy</a></small>" }} />;

    const ModalFormBox = styled.div`
        box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
        overflow-y: auto;
        width: 100%;
        max-width: 505px;
        .form-box{
            position: relative;
            .form-title{
                font-size: 19px;
                line-height: 27px;
                font-weight: 600;
                margin-bottom: 27px;
            }
            .form-section{
                gap: 16px;
                .one-col{
                    .contsent-box{
                        input[type=checkbox]{
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
            }
            .cta{
                text-align: right;
                margin-top: 20px;
                margin-bottom: 7px;
                button{
                    width: auto;
                }
                .login-cta{
                    line-height: 150%;
                    margin-top: 27px;
                    a{
                        font-weight: 600;
                        color: ${({ theme }) => theme.colors.title_green};
                        &:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }

        .thankyou-box{
            padding: 100px 0;
        }
    
        
        @media (max-width:${({ theme }) => theme.media.tab}) {
            .form-box{
                padding-top: 15px;
                .form-title{
                    font-size: 16px;
                    line-height: 180%;
                    margin-bottom: 10px;
                }
                .cta{
                    .login-cta{
                        margin-top: 10px;
                    }
                }
            }
            .form-section{
                gap: 24px;
            }
        }
    `

    return (
        <>
        <div onClick={closeBtn} className="modal-overlay"></div>
        <ModalFormBox className={`${modalformClass}`}>
            
            {/* form starts */}
            {!isVisible && (
                <div className="form-box w-full mx-auto flex flex-col">
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
                            <div className="one-col">
                                <div className="input-box-section">
                                    <label for="email" className="small">Country</label>
                                    <div className="select-box">
                                        <select className="form-control">
                                            <option value="someOption">The Netherlands</option>
                                            <option value="someOption">The Netherlands t2o</option>
                                            <option value="otherOption">The Netherlands three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="one-col">
                                <div className="input-box-section">
                                    <label for="region" className="small">Region</label>
                                    <input name="region" type="region" aria-describedby="regionhelp" placeholder="Region" className="form-control"/>
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
                            <OrangeBtn onClick={toggleVisible}>
                                Sign up
                            </OrangeBtn>
                        </div>
                    </form>
                </div>
            )}
            {/* forms ends */}


            {/* thank you box */}
            {isVisible &&(
                <div className="thankyou-box text-center">
                    <h3>Thank you!</h3>
                    <p>Your request has been saved.</p>
                </div>
            )}
            
            {/* thank you box ends */}
            <Link onClick={closeBtn} className="modal-close-btn flex items-center justify-center"><IoClose/></Link>
        </ModalFormBox>
        </>
    )
}

export default ModalFormBox;