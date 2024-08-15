import React from "react";
import styled from "styled-components";
import CustomRadioSelect from "../components/selectRadioDropdown"
import { OrangeBtn } from "../components/Button";


const OutsidePeru = () => {
    const optionsList = [
        "Aruba",
        "Outside Peru",
    ];
    const OutsidePeruSection = styled.section`
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
                    margin-top: 25px;
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
        <OutsidePeruSection className="mx-auto flex justify-center items-center">
            <div className="thankyou-box mx-auto text-center relative">
                <div className="title-box text-center">
                    <h2>Great!</h2>
                </div>
                <p>Thank you for your interest! We're not supporting Guardians outside Peru yet, but will be soon. Let's add your country to our list:</p>
                <div className="input-box-section">
                    <label className="small">Country</label>
                    <CustomRadioSelect
                        classname="form-control text-left"
                        optionsList = {optionsList}
                    />
                    <OrangeBtn className="submit-btn mx-auto w-full">Submit</OrangeBtn>
                </div>
            </div>
        </OutsidePeruSection>
    );    
}

export default OutsidePeru;