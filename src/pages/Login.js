import React, {useState} from "react";
import styled from "styled-components";
import { OrangeBtn } from "../components/Button";
import CheckBoxInfo from "../components/checkbox";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglepassword = () => {
        setShowPassword(!showPassword);
    }

    const consentLabel = <div dangerouslySetInnerHTML={{ __html: "<small>Click to agree to <a href='#'>our Privacy Policy</a></small>" }} />;

    // styled

    const SignupSection = styled.section`
        .left-section{
            width: 100%;
            max-width:36%;
            padding: 80px 30px 70px 80px;
            background-color: ${({ theme }) => theme.colors.title_green};
            background-image: url('./images/left-leaf-signup.webp');
            background-repeat: no-repeat;
            background-position: left bottom;
            h1{
                font-size: 48px;
                font-weight: 500;
                line-height: 58px;
            }
            .border{
                position: relative;
                img{
                    position: absolute;
                    bottom: -3px;
                    left: 0;
                    width: 100%;
                }
            }
        }
        .form-box{
            flex: 1 1 auto;
            padding: 80px 5% 70px;
            box-sizing: content-box;
            position: relative;
            max-width: 420px;
            .form-title{
                font-size: 19px;
                line-height: 27px;
                font-weight: 600;
                margin-bottom: 27px;
            }
            .form-section{
                gap: 16px;
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
                    margin-top: 27px;
                    a{
                        font-weight: 600;
                    }
                }
            }
        }
         @media (max-width:${({ theme }) => theme.media.tab}) {
            .left-section{
                max-width: 100%;
                background-image: url(./images/right-leaf-signup.webp);
                background-position: right -40px;
                padding: 28px 10px;
                margin-top: 65px;
                h1{
                    font-size: 42px;
                    line-height: 53px;
                    text-align: center;
                    br{
                        display: none;
                    }
                }
            }
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
        <SignupSection className="flex flex-wrap">
            <div className="left-section">
                <h1 className="text-white">Lets protect Nature <br/>
                    <span class="border">together
                        <img src="./images/title-border-line.svg" alt="border"/>
                    </span>
                </h1>
            </div>
            <div className="form-box mx-auto flex flex-col">
                <div className="form-title text-center">
                    Login
                </div>
                <form action="">
                    <div className="form-section flex flex-col">
                        <div className="one-col">
                            <div className="input-box-section">
                                <label for="email" className="small">E-mail</label>
                                <input name="email" type="email" aria-describedby="emailhelp" placeholder="E-mail" className="form-control"/>
                            </div>
                        </div>
                        <div className="one-col">
                            <div className="input-box-section">
                                <label for="password" className="small">Password</label>
                                
                                <div class="input-group relative">
                                    <div onClick={togglepassword} class="input-group-prepend absolute">
                                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash/>}
                                    </div>
                                    <input name="password" type = {showPassword ? "text" : "password"} aria-describedby="passwordhelp" placeholder="Password" className="form-control"/>
                                </div>
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
                        <OrangeBtn className="disabled">
                            Sign up
                        </OrangeBtn>
                        <button className="login-w-google flex items-center justify-center">
                            <img src="./images/google-logo.svg" alt="google"/>
                            <span>Or continue with Google</span>
                        </button>
                        <div className="login-cta small">
                            Don't have an account yet? <Link to="#">Create one</Link>
                        </div>
                    </div>
                </form>

            </div>
        </SignupSection>
    )
}

export default Login;