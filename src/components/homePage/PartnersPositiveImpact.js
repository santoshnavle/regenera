import React, { useState }  from "react";
import { LightGreenBtn } from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CustomSelect from "../selectDropdown";
import ImpactSlider from "react-slick";

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
      
        responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1023,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            speed: 300,
            centerMode: true, 
            centerPadding: '35px',
            infinite: true,
            variableWidth: true,
            }
        }]
    };

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
                    .custom-select-container{
                        margin: 20px 0;
                        display: none;
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
                                margin-top: 0;
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
                            .card-button-mobile{
                                display: none;
                            }
                        }
                    }
                    .discover-card.mobile-show{
                        display: none;
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

        @media (max-width: ${({ theme }) => theme.media.tab}) {
            padding: 20px 0 28px 0;
            .peru-location-info{
                .impact-list-info{
                    max-width: none;
                    gap: 0;
                    .title-box{
                        padding: 0 20px;
                        .custom-select-container{
                            display: block;
                        }
                    }
                    .article-section{
                        gap: 16px;
                        padding-left:0;
                        padding-right: 0;
                        overflow-x: auto;
                        .card-slider{
                            width: 100%;
                            .discover-card{
                                margin: 0 8px;
                                max-width: 292px;
                                .card-button{
                                    display: none;
                                }
                                .discover-card-info{
                                    padding: 20px 16px;
                                    border-radius: 8px;
                                    position: relative;
                                    top: -20px;
                                    .card-title{
                                        margin-bottom: 4px;
                                    }
                                    hr{
                                        margin: 16px 0;
                                    }
                                    .icon-with-numbers{
                                        li{
                                            &:last-child{
                                                margin-bottom: 16px;
                                            }
                                        }
                                        
                                    }
                                    .card-button-mobile{
                                        display: block;
                                    }
                                }
                            }
                            .discover-card.mobile-show{
                                display: block;
                            }
                        }
                        .recent-actions{
                            display: none;
                        }
                    }
                }
                .peru-map{
                    display: none;
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
                        <div className="custom-select-container">
                            <CustomSelect/>
                        </div>
                       
                    </div>
                    <div className="article-section flex items-start justify-space-between">
                        <div className="card-slider">
                            <ImpactSlider {...settings}>
                                <div className="discover-card w-full">
                                    <div className="card-img-btn">
                                        <div className="card-img">
                                            <picture>
                                                <source media="(max-width:700px)" srcset="../images/card-img-mobile.png"/>
                                                <img src="../images/card-img.png" className="w-full" alt=""/>
                                            </picture>                         
                                        </div>
                                        <LightGreenBtn className="card-button">
                                            <Link to= "#">Discover more</Link>
                                        </LightGreenBtn>
                                    </div>
                                    
                                    <div className="discover-card-info">
                                        <div className="card-title">Cañete Landscape</div>
                                        <p className="card-info">The Cañete River is one of the most important rivers in the Lima region.</p>
                                        <hr/>
                                        <div className="icon-with-numbers flex flex-col">
                                            <ul>
                                                {data.map((item) =>(
                                                    <li className="flex items-center" key={item.id}>
                                                        <div className="icon-box flex items-center justify-center">
                                                            <img src={item.img} alt=""/>
                                                        </div>
                                                        <div className="number-info"><strong>{item.strong}</strong> {item.text}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <LightGreenBtn className="card-button-mobile">
                                                <Link to= "#">Discover more</Link>
                                            </LightGreenBtn>
                                        </div>
                                    </div>
                                </div>
                                {/* mobile view discovery card start */}
                                <div className="discover-card w-full mobile-show">
                                    <div className="card-img-btn">
                                        <div className="card-img">
                                            <picture>
                                                <source media="(max-width:700px)" srcset="../images/card-img-mobile.png"/>
                                                <img src="../images/card-img.png" className="w-full" alt=""/>
                                            </picture>                         
                                        </div>
                                        <LightGreenBtn className="card-button">
                                            <Link to= "#">Discover more</Link>
                                        </LightGreenBtn>
                                    </div>
                                    
                                    <div className="discover-card-info mobile-show">
                                        <div className="card-title">Cañete Landscape</div>
                                        <p className="card-info">The Cañete River is one of the most important rivers in the Lima region.</p>
                                        <hr/>
                                        <div className="icon-with-numbers flex flex-col">
                                            <ul>
                                                {data.map((item) =>(
                                                    <li className="flex items-center" key={item.id}>
                                                        <div className="icon-box flex items-center justify-center">
                                                            <img src={item.img} alt=""/>
                                                        </div>
                                                        <div className="number-info"><strong>{item.strong}</strong> {item.text}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <LightGreenBtn className="card-button-mobile">
                                                <Link to= "#">Discover more</Link>
                                            </LightGreenBtn>
                                        </div>
                                    </div>
                                </div>
                                <div className="discover-card w-full mobile-show">
                                    <div className="card-img-btn">
                                        <div className="card-img">
                                            <picture>
                                                <source media="(max-width:700px)" srcset="../images/card-img-mobile.png"/>
                                                <img src="../images/card-img.png" className="w-full" alt=""/>
                                            </picture>                         
                                        </div>
                                        <LightGreenBtn className="card-button">
                                            <Link to= "#">Discover more</Link>
                                        </LightGreenBtn>
                                    </div>
                                    
                                    <div className="discover-card-info">
                                        <div className="card-title">Cañete Landscape</div>
                                        <p className="card-info">The Cañete River is one of the most important rivers in the Lima region.</p>
                                        <hr/>
                                        <div className="icon-with-numbers flex flex-col">
                                            <ul>
                                                {data.map((item) =>(
                                                    <li className="flex items-center" key={item.id}>
                                                        <div className="icon-box flex items-center justify-center">
                                                            <img src={item.img} alt=""/>
                                                        </div>
                                                        <div className="number-info"><strong>{item.strong}</strong> {item.text}</div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <LightGreenBtn className="card-button-mobile">
                                                <Link to= "#">Discover more</Link>
                                            </LightGreenBtn>
                                        </div>
                                    </div>
                                </div>
                                {/* mobile view discovery card ends*/}
                            </ImpactSlider>
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
                        <img src="../images/icons/location-pin.svg" alt="unselected location"/>
                    </Link>
                    <Link to="#" className="active center-two-location">
                        <img src="../images/icons/orange-location-pin.svg" alt="selected location"/>
                    </Link>
                    <Link to="#" className="bottom-three-location">
                        <img src="../images/icons/location-pin.svg" alt="unselected location"/>
                    </Link>
                    <Link to="#" className="bottom-four-location">
                        <img src="../images/icons/location-pin.svg" alt="unselected location"/>
                    </Link>
                    <Link to="#" className="bottom-five-location">
                        <img src="../images/icons/location-pin.svg" alt="unselected location"/>
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