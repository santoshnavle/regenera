import React, { useState }  from "react";
import { LightGreenBtn } from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PartnersImpact = () => {

    const [data, setData] = useState([
        { id: 1, img: '../images/icons/map-icon.svg', strong: '1,842+', text: 'manicured hectares' },
        { id: 2, img: '../images/icons/cotton-icon.svg', strong: '127+',  text: 'hectares of peat and forest under restoration', },
        { id: 3, img: '../images/icons/leaf-icon.svg', strong: '1,500+',  text: 'trees planted', },
    ]);

    const [actionData, setActionData] = useState([
        { id: 1, img: '../images/image-36.png', link:'#', title: 'Learning from Ancient Cultures', linkText: 'Read article' },
        { id: 2, img: '../images/image-35.png', link:'#', title: 'Cocoons: A New Technology',  linkText: 'Read article', },
        { id: 3, img: '../images/image-35.png', link:'#', title: 'Cocoons: A New Technology',  linkText: 'Read article', },
    ]);

    const PositiveImpact = styled.section`
        padding: 40px 5px 55px 80px;
        position: relative;
        background-color:${({ theme }) => theme.colors.title_green};
        .peru-location-info{
            max-width: 1440px;
            gap: 30px;
            .impact-list-info{
                width: 100%;
                max-width: 847px;
                gap: 45px;
                .title-box{
                    h3{
                        color: white;
                    }
                }
                .article-section{
                    gap: 24px;
                    .discover-card{
                        max-width: 518px;
                        .card-img-btn{
                            position: relative;
                            .card-img{
                                border-radius: 8px;
                            }
                           .card-button{
                            position: absolute;
                            right: 20px;
                            bottom: 0;
                            max-width: 200px;
                            z-index:2;
                           }
                        }
                        .discover-card-info{
                            background-color: white;
                            padding: 32px 24px;
                            border-radius: 8px;
                            position: relative;
                            top: -24px;
                            .card-title{
                                margin-bottom: 8px;
                            }
                            .card-info{
                                line-height: 180%;
                            }
                            hr{
                                background: #f6f6f6;
                                border: 0 none;
                                height: 1px;
                                margin: 20px 0;
                            }
                            .icon-with-numbers{
                                li{
                                    margin-bottom: 8px;
                                    .icon-box{
                                        width: 24px;
                                        height: 24px;
                                        margin-right: 12px;
                                    }
                                    &:last-child{
                                        margin-bottom: 0;
                                        .icon-box{
                                            img{
                                                width: 18px;
                                            }
                                        }
                                    }
                                }
                                
                            }
                        }
                    }
                    .recent-actions{
                        h6{
                            font-size: 19px;
                            line-height: 27px;
                            color: white;
                            margin-bottom: 12px;
                            font-weight: 600;
                        }
                        .list-recent-action{
                           gap: 12px;
                            .article-thumb-section{
                                gap: 12px;
                                background-color: white;
                                max-height: 112px;
                                border-radius: 8px;
                                min-width: 305px;
                                h6{
                                    color: ${({ theme }) => theme.colors.title_green};
                                }
                                img{
                                   max-width: 80px;
                                }
                                .action-content{
                                    padding: 12px 12px 12px 0;
                                    .link-text{
                                        line-height: 28px;
                                        font-weight: 600;
                                        color: ${({ theme }) => theme.colors.light_green};
                                    }
                                }
                            }
                        }
                    }

                }
            }
            .peru-map{
                position: relative;
                
                .top-one-location,.center-two-location,.bottom-three-location, .bottom-four-location,.bottom-five-location{
                    position: absolute;
                }
                .top-one-location{
                    right: 169px;
                    top: 133px;
                }
                .center-two-location{
                    left: 155px;
                    bottom: 266px;
                }
                .bottom-three-location{
                    right: 143px;
                    bottom: 175px;
                }
                .bottom-four-location{
                    right: 102px;
                    bottom: 190px;
                }
                .bottom-five-location{
                    right: 88px;
                    bottom: 252px;
                }
                .click-info{
                    text-align: center;
                    font-size: 19px;
                    line-height: 27px;
                    max-width: 180px;
                    color: ${({ theme }) => theme.colors.light_green};
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    &::after{
                        position: absolute;
                        content: "";
                        width: 119px;
                        height: 40px;
                        right: -120px;
                        top: 15px;
                        background: url('../images/arrow-landscape.svg') no-repeat center center;
                    }
                }
            }
        }
    `

    return(
        <PositiveImpact>
            <div className="peru-location-info mx-auto flex items-center">
                <div className="impact-list-info flex flex-col">
                    <div className="title-box">
                        <h3>Places in Peru where our Partners are <br/> already making a positive impact</h3>
                    </div>
                    <div className="article-section flex justify-space-between">
                        <div className="discover-card w-full">
                            <div className="card-img-btn">
                                <div className="card-img">
                                    <img src="../images/card-img.png" className="max-full"/>                            
                                </div>
                                <LightGreenBtn className="card-button">
                                    <Link to= "#">Discover more</Link>
                                </LightGreenBtn>
                            </div>
                            
                            <div className="discover-card-info">
                                <div className="card-title">Cañete Landscape</div>
                                <p className="card-info">The Cañete River is one of the most important rivers in the Lima region.</p>
                                <hr/>
                                <div className="icon-with-numbers">
                                    <ul>
                                        {data.map((item) =>(
                                            <li className="flex items-center" key={item.id}>
                                                <div className="icon-box flex items-center justify-center">
                                                     <img src={item.img}/>
                                                </div>
                                                <div className="number-info"><strong>{item.strong}</strong> {item.text}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="recent-actions">
                            <h6>Recent actions:</h6>
                            <div className="list-recent-action flex flex-col">
                                {actionData.map((item)=>(
                                    <Link to={item.link} className="article-thumb-section flex items-center">
                                        <img src={item.img} alt=""/>
                                        <div className="action-content">
                                            <h6 className="article-title">{item.title}</h6>
                                            <div className="link-text">{item.linkText}</div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>  
                    </div>
                </div>         
                <div className="peru-map">
                    <img src="../images/peru-map.svg" alt="peru map"/>
                    <Link to="#" className="top-one-location">
                        <img src="../images/icons/location-pin.svg"/>
                    </Link>
                    <Link to="#" className="active center-two-location">
                        <img src="../images/icons/orange-location-pin.svg"/>
                    </Link>
                    <Link to="#" className="bottom-three-location">
                        <img src="../images/icons/location-pin.svg"/>
                    </Link>
                    <Link to="#" className="bottom-four-location">
                        <img src="../images/icons/location-pin.svg"/>
                    </Link>
                    <Link to="#" className="bottom-five-location">
                        <img src="../images/icons/location-pin.svg"/>
                    </Link>
                    <div className="click-info">
                        Click pins on the map to view our Landscapes
                    </div>

                </div>       
            </div>
        </PositiveImpact>
        
    );    
}

export default PartnersImpact;