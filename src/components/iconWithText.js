import React from "react";
import styled from "styled-components";

const IconWithText = ({icon, title, text}) => {

    const IconTextFrame = styled.div`
        gap: 20px;
        max-width: 305px;
        position: relative;
        &::after{
            content: "";
            background-image: url('./images/arrow-bended.svg');
            background-repeat: no-repeat;
            width: 100px;
            height: 32px;
            right: -125px;
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
            background-position: center center;
        }
        &:last-child::after{
            content: none;
        }
        .title-description{
            gap: 8px;
            .title{
                font-size: 19px;
                line-height: 28px;
                color: ${({theme}) => theme.colors.title_green};
                font-weight: 600;
            }
            .description{
                color: ${({theme}) => theme.colors.text_color};
                line-height: 1.8;
                font-size: 16px;
                padding: 0 5px;
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            flex-wrap: wrap;
            &::after{
                content: none;
            }
        }
    `

    return (
        <IconTextFrame className="flex flex-col items-center justify-start">
            <img src={icon} alt="icon" className="text-icon"/>
            <div className="title-description flex-col items-center justify-start">
                <div className="title">{title}</div>
                <div className="description">{text}</div>
            </div>
        </IconTextFrame>
    )
}

export default IconWithText;