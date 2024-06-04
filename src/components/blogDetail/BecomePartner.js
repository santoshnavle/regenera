import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { OrangeBtn } from "../Button";

const BecomeMember = ({title, linkto, btnText, paraText}) => {
    const GreenSection = styled.section`
        position: relative;
        background: url('../images/bg-texture-green.jpg');
        background-size: cover;
        text-align: center;
        .green-box{
            min-height: 380px;
            gap: 30px;
            max-width: 870px;
            .title-box{
                padding: 0 20px;
                margin-bottom: 4px;
                h3, p{
                    color: white;
                }
            }
            button{
                width: auto;
                max-width: 288px;
                margin: 0 auto;
            }
            
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .green-box{
                min-height: 290px;
                gap:12px;
            }
        }
        @media (max-width:${({ theme }) => theme.media.mobile}){
            .green-box{
                button{
                    max-width:222px;
                }
            }
        }

    `
    return (
        <GreenSection>
            <div className="green-box flex justify-center flex-col mx-auto">
                <div className="title-box text-center mx-auto">
                    <h3>{title}</h3>
                    <p>{paraText}</p>
                </div>
                <OrangeBtn>
                    <Link to={linkto}>{btnText}</Link>
                </OrangeBtn>
            </div>
        </GreenSection>
    )
}

export default BecomeMember;