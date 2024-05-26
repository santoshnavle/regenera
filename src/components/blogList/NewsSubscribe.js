import React from "react";
import styled from "styled-components";
import { OrangeBtn } from "../Button";
import CheckBoxInfo from "../checkbox";

const NewsSubscribe = () => {
    const NewsUpdate = styled.section`
        position: relative;
        background: url('../images/bg-texture-green.jpg');
        .news-section{
            min-height: 400px;
            max-width: 630px;
            text-align: center;
            gap: 32px;
            color: #fff;
            padding: 24px 20px;
            .title-box{
                padding: 0 30px;
                h3{
                    color: white;
                }
            }
            .content{
                .news-form{
                    gap: 16px;
                    .form-group{
                        flex: 1 0 40%;
                    }
                    .checkbox-section{
                        width: 70%;
                        .form-check-label{
                            font-weight: 300;
                            line-height: 1.5;
                        }
                    }
                }
            }
            .success-fail{
                margin-top: 30px;
                font-weight: 600;
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .news-section{
                min-height: 320px;
                gap: 12px;
                .content{
                    .news-form{
                        gap: 12px;
                        .form-group{
                            flex: 1 0 100%;
                        }
                        .checkbox-section{
                            width: 100%
                        }
                        .orange-btn{
                            width: 100%;
                        }
                    }
                }
            }
        }
    `
    return (
        <NewsUpdate>
            <div className="news-section flex justify-center flex-col mx-auto">
                <div className="title-box mx-auto">
                    <h3>Stay up to date with our news</h3>
                </div>
                <div className="content">
                    <div className="news-form flex items-center justify-space-between flex-wrap">
                        <div className="form-group">
                            <input type="text" className="form-control w-full" id="name" aria-describedby="name" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control w-full" id="email" aria-describedby="email id" placeholder="Email"/>
                        </div>
                        <CheckBoxInfo
                            labelName = "I agree to receive a monthly update and can unsubscribe at any time."
                            labelId = "agreeconsent"
                            checkboxSection = "checkbox-section"
                        />
                        <OrangeBtn className="orange-btn" type="button">Sign up</OrangeBtn>
                    </div>
                    <div className="success-fail text-center">Thank you. Good news coming your way!</div>
                </div>
            </div>
        </NewsUpdate>
    )
}

export default NewsSubscribe;