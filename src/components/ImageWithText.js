import React from "react";
import styled from "styled-components";

const ImageWithText = ({ Image, ImageMobile, imgWithClass, contentBox, imgBoxClass, sign, borderImg, smallTitle, firstTitle, underlineTitle, lastTitle, text }) => {

    const ImageText = styled.section`
        background-color: #F8FBF6;
        padding: 110px 4.8rem;
        position: relative;
        max-width: 1920px;
        gap: 128px;
        .content{
            max-width: 1200px;
            .title-box{
                margin-bottom: 16px;
                .small-title{
                    font-size: 19px;
                    line-height: 180%;
                    letter-spacing: 3.5px;
                    font-weight: 400;
                    color: ${({ theme }) => theme.colors.light_green};
                    text-transform: uppercase;
                    margin-bottom: 8px;
                }
                .border{
                    position: relative;
                    img{
                        position: absolute;
                        bottom: -3px;
                        left: 0;
                    }
                }
                
            }
            .content-box{
                p{
                    margin-top: 25px;
                    color: ${({ theme }) => theme.colors.text_color};
                }
                .sign-text{
                    max-width: 130px;
                    line-height: 180%;
                    margin-top: 25px;
                }
            }
        }
        
    `
    return (
        <ImageText className={`flex items-center justify-space-between ${ imgWithClass }`}>
            <picture className={`img-box ${imgBoxClass}`}>
                <source media="(max-width:700px)" srcset={ImageMobile}/>
                <img src={Image} className="w-full" alt=""/>
            </picture>
            <div className="content mx-auto">
                <div className="title-box">
                    <div className="small-title">{smallTitle}</div>
                    <h3>{firstTitle}
                        {underlineTitle &&
                        (
                            <span className="border">
                                &nbsp;{underlineTitle}&nbsp;
                                <img src={borderImg} alt="border"/>
                            </span> 
                        )}
                        {lastTitle}
                    </h3>
                </div>
                <div className= {`content-box ${contentBox}`}>
                    {text}
                    {sign && 
                        (
                            <div className="sign-text">
                                {sign}
                            </div>
                        )
                    }
                    
                </div>
            </div>
            
        </ImageText>
    )
}

export default ImageWithText;