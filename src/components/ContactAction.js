import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const ContactBox = ({title, paraTxt, iconText}) => {

    const ContactBox = styled.div`
        border-radius: 8px;
        box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.07);
        padding: 38px 35px 40px;
        display: flex;
        gap: 35px;
        max-width: 630px;
        margin-top: 40px;
        .left-section{
            h3{
                font-size: 19px;
                line-height: 27px;
                font-weight: 500;
            }
            p{
                margin-top: 8px;
                font-weight: 400;
                line-height: 180%;
            }
        }
        .right-section{
            flex: 1 0 auto;
            ul{
                gap: 16px;
                li{
                    gap:8px;
                    color: #6EA44C;
                    a.icon{
                        gap: 8px;
                        color: #6EA44C;
                        line-height: 28px;
                        font-weight: 600;
                        &:hover{
                            color: #3d8b0d;
                        }
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            width: 100%;
            padding: 16px;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 10px;
            .left-section{
                h3{
                    font-size: 17px;
                    line-height: 25px;
                }
            }
            .right-section{
                ul{
                    gap: 4px;
                    a.icon{
                    font-size: 16px;
                    line-height: 28px;
                    }
                }
            }
        }
    `
   

    return (
        <ContactBox className="mx-auto">
            <div className="left-section">
                <h3>{title}</h3>
                <p>{paraTxt}</p>
            </div>
            <div className="right-section">
                <ul className="flex flex-col">
                    {iconText.map((item) =><li className="flex items-center"><Link className="icon flex items-center" to={item.link}>{item.icon} {item.text}</Link></li>)}
                </ul>
            </div>
        </ContactBox>
    )
}

export default ContactBox;