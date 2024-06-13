import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const ContactBox = ({title, paraTxt, iconText, link}) => {

    const ContactBox = styled.div`
        border-radius: 8px;
        box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.07);
        padding: 38px 35px 40px;
        display: flex;
        gap: 35px;
        .left-section{
            h3{
                font-size: 19px;
                line-height: 27px;
                font-weight: 500;
                margin-bottom: 8px;
            }
            p{
                font-weight: 400;
                line-height: 180%;
            }
        }
        .right-section{
            ul{
                li{
                    gap:8px;
                    color: #6EA44C;
                    .icon-text{
                        color: #6EA44C;
                    }
                }
            }
        }
    `
   

    return (
        <ContactBox className={BoxClass}>
            <div className="left-section">
                <h3>{title}</h3>
                <p>{paraTxt}</p>
            </div>
            <div className="right-section">
                <ul>
                    {iconText.map((item) =><li className="flex items-center"><Link className="icon" to={link}>{item.icon}</Link><Link className="icon-text" to={link}>{item.text}</Link></li>)}
                </ul>
            </div>
        </ContactBox>
    )
}

export default ContactBox;