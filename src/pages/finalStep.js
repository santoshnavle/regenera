import React from "react";
import styled from "styled-components";
import { OrangeBtn } from "../components/Button";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";



const FinalStep = ({classname}) => {

    const FinalStepSection = styled.section`
        background: #F8FBF6;
        padding: 95px 20px;
        width: 100%;
        .thankyou-box{
            background-color: white;
            border-radius: 20px;
            box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
            max-width: 630px;
            padding: 39px 56px 208px; 
            .close-btn{
                width: 28px;
                height: 28px;
                border-radius: 50%;
                right: 17px;
                top: 17px;
                color: #004D37;
                font-size: 18px;
            }
            .thankyou-bg{
                bottom: 0;
                left: -60px;
                min-width: 717px;
            }
            .cta {
                margin-top: 16px;
            }
        }
        @media (max-width: 500px) {  
            .thankyou-box{
                padding-bottom: 120px;
                .thankyou-bg{
                    left: -45px;
                    min-width: 120%;
                    width: 100%;
                    position: absolute;
                }
                .cta {
                    margin-top: 16px;
                }
            }
        }
    `

    return(
        <FinalStepSection className={`mx-auto flex flex-col ${classname}`}>
            <div className="thankyou-box mx-auto text-center relative">
                <Link to="#" className="absolute close-btn flex items-center justify-center"><IoClose /></Link>
                <div className="title-box text-center">
                    <h2>You're all set!</h2>
                </div>
                <p>A big thank you on behalf of Nature and the Regenera network for signing up. We're so glad you joined. Be sure to complete your profile so you truly become part of our community. And don't forget to verify your email address (please check your inbox).</p>
                <div className="cta text-center">
                    <OrangeBtn>Discover the platform</OrangeBtn>
                </div>
                <img src="./images/thankyoubg.webp" alt="thank you" className="w-full thankyou-bg absolute"/>
            </div>
        </FinalStepSection>
    );    
}

export default FinalStep;