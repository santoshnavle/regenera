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

    const PositiveImpact = styled.section`
        padding: 40px 5px 55px 80px;
        position: relative;
        background-color:${({ theme }) => theme.colors.title_green};
        .peru-location-info{
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
                           .card-button{
                            position: absolute;
                            right: 20px;
                            bottom: 0;
                            max-width: 200px;
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
                        }
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
                        <div className="discover-card">
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
                                                <div className="icon-box">
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
                                <Link to="#" className="article-thumb-section">
                                    <img src="../images/image-36.png" alt=""/>
                                    <div className="article-title">Learning from Ancient Cultures</div>
                                    <div className="link-text">Read article</div>
                                </Link>
                                 <Link to="#" className="article-thumb-section">
                                    <img src="../images/image-35.png" alt=""/>
                                    <div className="article-title">Cocoons: A New Technology</div>
                                    <div className="link-text">Read article</div>
                                </Link>
                                <Link to="#" className="article-thumb-section">
                                    <img src="../images/image-35.png" alt=""/>
                                    <div className="article-title">Cocoons: A New Technology</div>
                                    <div className="link-text">Read article</div>
                                </Link>
                            </div>
                        </div>  
                    </div>
                </div>                
            </div>
        </PositiveImpact>
        
    );    
}

export default PartnersImpact;