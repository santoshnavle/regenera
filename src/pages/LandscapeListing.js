import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LightGreenBtn, OrangeBtn } from "../components/Button";
import CustomRadioSelect from "../components/selectRadioDropdown";
import NewsSubscribe from "../components/blogList/NewsSubscribe";
import useScreenSize from "../components/UseScreenSize";
import { FaMap } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const LandscapeList = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // screensize
    const screenSize = useScreenSize().width;

    // toggle map
    const [isToggled, setIsToggled] = useState(false);
    const toggleClick = () => {
        setIsToggled(!isToggled);
    }

    const data = [
        { 
            id: 1, 
            heroimgD: '../images/card-img.png',
            heroimgM: '../images/card-img-mobile.png',
            cardTitle: 'Cañete Landscape',
            cardDescription: 'The Cañete River is one of the most important rivers in the Lima region.',
            listitems: [
                {
                    iconimg: '../images/icons/map-icon.svg', 
                    strong: '1,842+', 
                    text: 'manicured hectares' 
                },
                {
                    iconimg: '../images/icons/cotton-icon.svg', 
                    strong: '127+',  
                    text: 'hectares of peat and forest under restoration', 
                },
                {
                    iconimg: '../images/icons/leaf-icon.svg', 
                    strong: '1,500+',  
                    text: 'trees planted', 
                }
            ]
        },
        { 
            id: 2, 
            heroimgD: '../images/card-img.png',
            heroimgM: '../images/card-img-mobile.png',
            cardTitle: 'Cañete Landscape',
            cardDescription: 'The Cañete River is one of the most important rivers in the Lima region.',
            listitems: [
                {
                    iconimg: '../images/icons/map-icon.svg', 
                    strong: '1,842+', 
                    text: 'manicured hectares' 
                },
                {
                    iconimg: '../images/icons/cotton-icon.svg', 
                    strong: '127+',  
                    text: 'hectares of peat and forest under restoration', 
                },
                {
                    iconimg: '../images/icons/leaf-icon.svg', 
                    strong: '1,500+',  
                    text: 'trees planted', 
                }
            ]
        },
        { 
            id: 3, 
            heroimgD: '../images/card-img.png',
            heroimgM: '../images/card-img-mobile.png',
            cardTitle: 'Cañete Landscape',
            cardDescription: 'The Cañete River is one of the most important rivers in the Lima region.',
            listitems: [
                {
                    iconimg: '../images/icons/map-icon.svg', 
                    strong: '1,842+', 
                    text: 'manicured hectares' 
                },
                {
                    iconimg: '../images/icons/cotton-icon.svg', 
                    strong: '127+',  
                    text: 'hectares of peat and forest under restoration', 
                },
                {
                    iconimg: '../images/icons/leaf-icon.svg', 
                    strong: '1,500+',  
                    text: 'trees planted', 
                }
            ]
        },
    ];
    // option lists
    const optionsList = [
        "Select a Landscape",
        "Outside Peru",
        "Amazonas",
        "Ancash",
        "Callao",
    ];

    const LandscapeListSection = styled.section`
        .listing-first-section{
            &::before{
                background-color: #004D37;
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                height: 650px;
            }
            padding: 90px 5px 55px 80px;
            position: relative;
            .landscape-herobox{
                max-width: 1440px;
                gap: 8%;
                padding-right: 25px;
                .left-side-content{
                    gap: 32px;
                    width: 100%;
                    max-width: 740px;
                    .title-box{
                        h1{
                            font-size: 47px;
                            line-height: 58px;
                        }
                        .border-img{
                            left: 0;
                            bottom: -10px;
                        }
                    }
                    p{
                        line-height: 180%;
                    }
                    .select-lists{
                        min-width: 848px;
                        .input-box-section{
                            max-width: 49%;
                        }
                        .article-section{
                            gap: 24px 16px;
                            margin-top: 18px;
                            .card-slider{
                                background-color: white;
                                max-width: 414px;
                                box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.07);
                                border-radius: 8px;
                                .discover-card{
                                    position: relative;
                                    .tag{
                                        left: 18px;
                                        top: 18px;
                                        color: #6EA44C;
                                        line-height: 30px;
                                        padding: 2px 16px;
                                        height: 33px;
                                        background-color: #DDEDD0;
                                        border-radius: 25px;
                                        font-weight: bold;
                                        z-index: 9;
                                    }
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
                                        .card-button{
                                            display: none;
                                        }
                                    }
                                }
                                .propose-box{
                                    padding: 23px 27px 27px;
                                    .green-link{
                                        margin-top: 8px;
                                        gap: 8px;
                                        line-height: 28px;
                                    }
                                }
                            }
                        }
                    }
                }
                .peru-map{
                    position: absolute;
                    z-index: 99;
                    right: 25px;
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
                }
            }
            @media (max-width: 1420px) {
                 .landscape-herobox{
                    .left-side-content{
                        width: 55%;
                    }
                 }
            }
            @media (max-width: ${({ theme }) => theme.media.tab}) {
                padding: 86px 0 28px;
                .landscape-herobox{
                    padding-right: 0;
                    .left-side-content{
                        width: 100%;
                        max-width: none;
                        gap: 16px;
                        padding: 0 20px;
                        .title-box{
                            h1{
                                font-size: 28px;
                                line-height: 38px;
                            }
                            .border-img{
                                max-width: 420px;
                                width: 85%;
                            }
                        }
                        .select-lists{
                            min-width: 100%;
                            margin: 0 -20px;
                            .input-box-section{
                                max-width: 100%;
                                padding: 0 20px;
                                .map-list-btn{
                                    margin: 15px auto 0;
                                    div{
                                        gap: 10px;
                                    }
                                }
                            }
                            .article-section{
                                gap: 16px;
                                padding-left:0;
                                padding-right: 0;
                                .card-slider{
                                    max-width: 49%;
                                    margin: 0 20px;
                                    .discover-card{
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
                                            .card-button{
                                                display: block;
                                                margin-top: 10px;
                                            }
                                        }
                                    }
                                    &:last-child{
                                        margin-bottom: 18px;
                                    }
                                }
                            }
                        }
                        .bg-green{
                            background-color: #004D37;
                        }
                        
                    }
                    .peru-map{
                        background-color: #004D37;
                        position: relative;
                        right: 0;
                        padding: 30px 0;
                        text-align: center;
                        width: 477px;
                        margin: 0 auto;
                    }
                    .hidden{
                        display: none;
                    }
                }
            }
            @media (max-width: 840px) {
                .landscape-herobox{
                    .left-side-content{
                        .select-lists{
                            .article-section{
                                .card-slider{
                                    max-width: 100%;
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
            @media (max-width: 720px) {
                .landscape-herobox{
                    .peru-map {
                        img{
                            position: relative;
                            left: -50px;
                        }
                        .center-two-location{
                            left: 150px;
                            bottom: 315px;
                        }
                    }
                }
            }
        }

    `
    const LandscapeGuardians = styled.section`
        position: relative;
        .team-section{
            min-height: 490px;
            background-color: #F8FBF6;
            text-align: center;
            .title-box{
                max-width: 630px;
                margin-bottom: 4px;
                padding: 0 20px;
                .small-title{
                    font-size: 19px;
                    line-height: 180%;
                    letter-spacing: 3.5px;
                    font-weight: 400;
                    color: #6EA44C;
                    text-transform: uppercase;
                    margin-bottom: 4px;
                }
            }
            .content{
                max-width: 630px;
                padding: 0 20px;
                .group-btns{
                    gap: 16px;
                    margin-top: 16px;
                }
            }
        }
        .left-team, .right-team{
            height: 522px;
            position: absolute;
            left: -18px;
            bottom: -18px;
            z-index: 1;
            img{
                height: 522px;
            }
        }
        .right-team{
            left: auto;
            right: -18px;
            bottom: -11px;
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .team-section{
                min-height: auto;
                padding: 149px 20px 167px;
                .title-box, .content{
                    padding: 0;
                }
            }
            .left-team, .right-team {
                left:50%;
                transform: translateX(-50%);
                top: -14px;
                bottom: auto;
                width: 100%;
                text-align: center;
                height: 160px;
                img{
                    height: 160px;
                }
            }
            .right-team{
                top: auto;
                bottom: -12px;
            }
        }
        @media (max-width:400px){
            .left-team, .right-team {
                height: 132px;
                img{
                    height: 100%;
                }
            }
        }
    `

    return (
        <LandscapeListSection>
            <div className="listing-first-section">
                <div className="landscape-herobox relative mx-auto flex justify-space-between">
                    <div className="left-side-content flex flex-col">
                         {/* title section */}
                        <div className="title-box relative">
                            <h1 className="text-white">Landscapes in Peru where our Guardians are already making a positive impact</h1>
                            <img src="../images/blog-title-line-d.svg" class="w-auto absolute border-img" alt=""/>
                        </div>
                        <p className="text-white">More than carbon offsets and tree planting alone, Regenera supports living landscapes management led by the people who know their lands best. We join forces with Guardian communities and other local stakeholders interested in taking care of a natural landscape, to preserve it and prosper together. As the network of stakeholders involved in the protection of a landscape grows, the chances that it will remain healthy and generate social, environmental, and economic benefits increases. We call this our landscape approach.</p>
                        <div className={isToggled ? "select-lists bg-green" : "select-lists"}>
                            {/* select box section */}
                            <div className="input-box-section">
                                <label className="text-white hide-tab">Select and go to a Landscape:</label>
                                <CustomRadioSelect
                                    classname="form-control"
                                    optionsList = {optionsList}
                                />
                                {screenSize < 980 && (
                                    <LightGreenBtn onClick={toggleClick} className="map-list-btn flex">
                                        {isToggled ?  <div className="flex items-center map-text">List <FaListUl /></div> :  <div className="flex items-center map-text">Map <FaMap /></div>}
                                    </LightGreenBtn>
                                )}
                            </div>
                            {/* card listing */}
                            <div className="article-section flex flex-wrap items-start justify-space-between">
                                {/* peru map */}
                                <div className={isToggled ? "peru-map show-tab" : "peru-map show-tab hidden"}>
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
                                </div>    
                                {/* peru map ends */}
                                {data.map((item) => {
                                    return(
                                        <div className={isToggled ? "card-slider hidden" : "card-slider"}>
                                            <div className="discover-card w-full">
                                                <div className="tag absolute">NEW!</div>
                                                <div className="card-img-btn">
                                                    <div className="card-img">
                                                        <picture>
                                                            <source media="(max-width:700px)" srcset={item.heroimgM}/>
                                                            <img src={item.heroimgD} className="w-full" alt=""/>
                                                        </picture>                         
                                                    </div>
                                                    <LightGreenBtn className="card-button hide-tab">
                                                        <Link to= "#">Discover more</Link>
                                                    </LightGreenBtn>
                                                </div>
                                                <div className="discover-card-info">
                                                    <div className="card-title">{item.cardTitle}</div>
                                                    <p className="card-info">{item.cardDescription}</p>
                                                    <hr/>
                                                    <div className="icon-with-numbers flex flex-col">
                                                        <ul>
                                                            {item.listitems.map((listitem) =>{
                                                                return(
                                                                    <li className="flex items-center">
                                                                        <div className="icon-box flex items-center justify-center">
                                                                            <img src={listitem.iconimg} alt=""/>
                                                                        </div>
                                                                        <div className="number-info"><strong>{listitem.strong}</strong> {listitem.text}</div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                        <LightGreenBtn className="card-button">
                                                            <Link to= "#">Discover more</Link>
                                                        </LightGreenBtn>
                                                    </div>
                                                </div>
                                            </div>                             
                                        </div>
                                    )
                                })}
                                
                                <div className="card-slider">
                                    <div className="propose-box">
                                        <h4 className="small-title">Do you want to propose your landscape to Regenera?</h4>
                                        <Link to="#" className="green-link flex items-center">
                                            <MdEmail className="link-icon"/>
                                            <span>Send us a message</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        

                    {/* peru map */}
                    <div className={`peru-map hide-tab  ${isSticky ? 'sticky-map' : ''}`}>
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
                    </div>    
                    {/* peru map ends */}
                </div>
            </div>
            <LandscapeGuardians>
                <div className="team-section flex justify-center flex-col">
                    <div className="team-bg"></div>
                    <div className="title-box mx-auto">
                        <div className="small-title">Our Guardians and Landscape Partners</div>
                        <h3>They make it possible</h3>
                    </div>
                    <div className="content mx-auto">
                        <p>Regenera's Guardians work hard to protect their territories against illegal loggers, gold miners, and poachers. They also actively restore forests and aquatic habitats. They are supported in these activities with technical expertise by local Landscape Partners. Thanks to their combined dedication and courageous action, Nature can thrive.</p>
                        <div className="group-btns justify-center flex-wrap flex">
                            <OrangeBtn to="#">Support our Guardians</OrangeBtn>
                            <LightGreenBtn to="#">Become a Guardian</LightGreenBtn>
                        </div>
                    </div>
                </div>
                <div className="left-team">
                    <picture>
                        <source media="(max-width:1023px)" srcset="../images/top-guardian-team.webp"/>
                        <img src="../images/left-guardian-team.webp" alt="team-img"/>
                    </picture>
                </div>
                <div className="right-team">
                    <picture>
                        <source media="(max-width:1023px)" srcset="../images/bottom-guardian-team.webp"/>
                        <img src="../images/right-guardian-team.webp" alt="team-img"/>
                    </picture>
                </div>
            </LandscapeGuardians>
            <NewsSubscribe/>
        </LandscapeListSection>
    )
}

export default LandscapeList;