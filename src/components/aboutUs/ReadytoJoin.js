import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { OrangeBtn } from "../Button";

const ToJoin = () => {
    const JoinSection = styled.section`
        position: relative;
        .team-section{
            min-height: 347px;
            background-color:${({ theme }) => theme.colors.title_green};
            text-align: center;
            gap: 40px;
            .title-box{
                max-width: 630px;
                padding: 0 30px;
                margin-bottom: 4px;
                h3{
                    color: white;
                }
            }
            .content{
                gap: 12px;
                max-width: 535px;
                color: white;
                .connect{
                    font-weight: 700;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .team-section{
                min-height: 300px;
                gap: 24px;
                .content{
                    flex-direction: column;
                    gap: 8px;
                }
            }
        }
    `
    return (
        <JoinSection>
            <div className="team-section flex justify-center flex-col">
                <div className="title-box mx-auto">
                    <h3>Ready to join as well?</h3>
                </div>
                <div className="content flex items-center mx-auto">
                    <OrangeBtn>
                        <Link to="#">Become a Partner</Link>
                    </OrangeBtn>
                    <div className="connect">Connect with a team member first</div>
                </div>
            </div>
        </JoinSection>
    )
}

export default ToJoin;