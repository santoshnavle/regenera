import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { OrangeBtn } from "../components/Button";


const ThankyouOutside = () => {

    const ThankyouOutsideSection = styled.section`
        background: white;
        padding: 95px 20px;
        width: 100%;
        .thankyou-box{
            background-color: white;
            max-width: 415px; 
            .input-box-section{
                margin-top: 30px;
                >label{
                    margin-bottom: 15px;
                    display: block;
                }
                .submit-btn{
                    max-width: 216px;
                }
            }
        }
        @media (max-width: 500px) {  
            .thankyou-box{
                padding: 100px 20px 120px;
            }
        }
    `

    return(
        <ThankyouOutsideSection className="mx-auto flex justify-center items-center">
            <div className="thankyou-box mx-auto text-center relative">
                <div className="title-box text-center">
                    <h2>Thank you!</h2>
                </div>
                <p>We have received your request.</p>
                <div className="input-box-section">
                    <OrangeBtn className="submit-btn mx-auto w-full">
                        <Link to="#">Back to home</Link>
                    </OrangeBtn>
                </div>
            </div>
        </ThankyouOutsideSection>
    );    
}

export default ThankyouOutside;