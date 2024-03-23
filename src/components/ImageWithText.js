import React from "react";
import styled from "styled-components";

const ImageWithText = ({section, Image, ImageMobile, imgWithClass, contentBox, imgBoxClass, sign, borderImg, smallTitle, firstTitle, underlineTitle, lastTitle, text, backtitle, backlogos}) => {

    const ImageText = styled.section`
        position: relative;
        margin: 0 auto;
        .container{
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
                    .group-backing{
                        margin-top: 35px;
                        .title-back{
                            font-size: 19px;
                            line-height: 27px;
                            color: ${({ theme }) => theme.colors.text_color};
                            margin-bottom: 20px;
                            font-weight: 600;
                        }
                        .group-logo{
                            filter: grayscale();
                            gap: 24px;
                            flex-wrap: wrap;
                        }
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .container{
                flex-direction: column;
                gap: 24px;
                .content{
                    .title-box{
                        margin-bottom: 8px;
                        .small-title{
                            font-size: 17px;
                            line-height: 180%;
                        }
                    }
                    .content-box{
                        .group-backing{
                            margin-top: 24px;
                            .title-back{
                                font-size: 17px;
                                line-height: 24px;
                                margin-bottom: 8px;
                            }
                            .group-logo{
                                gap: 20px;
                            }
                        }
                    }
                }
            }
        }
    `
    return (
        <ImageText className={section}>
            <div className={`flex items-center justify-space-between container ${ imgWithClass }`}>
                <picture className={`img-box ${imgBoxClass}`}>
                    <source media="(max-width:768px)" srcset={ImageMobile}/>
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
                        {backtitle &&
                            (   
                                <div className="group-backing">
                                    <div className="title-back">{backtitle}</div>
                                    <div className="group-logo flex items-center">{backlogos}</div>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </ImageText>
    )
}

export default ImageWithText;