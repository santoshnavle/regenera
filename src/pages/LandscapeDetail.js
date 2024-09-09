import React from "react";
import styled from "styled-components";
import BecomeMember from "../components/blogDetail/BecomePartner";
import { Link } from "react-router-dom";
import { OrangeBtn, LightGreenBtn } from "../components/Button";

const LandscapeDetail = () => {

     const data = [
        { id: 1, img: '../images/icons/map-icon.svg', strong: '1,842+', text: 'manicured hectares' },
        { id: 2, img: '../images/icons/cotton-icon.svg', strong: '127+',  text: 'hectares of peat and forest under restoration', },
        { id: 3, img: '../images/icons/leaf-icon.svg', strong: '1,500+',  text: 'trees planted', },
    ];

    const actionData =[
        { id: 1, img: '../images/article-list-img.webp', link:'#', title: 'Two new Guardians bet on Regenera', linkText: 'Read article' },
        { id: 2, img: '../images/article-list-img.webp', link:'#', title: 'Another article title here',  linkText: 'Read article', },
        { id: 3, img: '../images/article-list-img.webp', link:'#', title: 'Another article title here',  linkText: 'Read article', },
    ];

    const LandscapeDetailSection = styled.section`
        background-color: #EFE7DA;
        .hero-landscape{
            .hero-content-box{
                background-color: white;
                width: 100%;
                max-width: 1065px;
                padding: 40px 52px;
                margin: -145px auto 0;
                position: relative;
                z-index: 9;
                .title-box{
                    margin-bottom: 16px;
                    h1{
                        font-size: 48px;
                        line-height: 58px;
                    }
                    .small-title{
                        font-size: 19px;
                        line-height: 180%;
                        letter-spacing: 3.5px;
                        font-weight: 400;
                        color: ${({ theme }) => theme.colors.light_green};
                        text-transform: uppercase;
                    }
                }
                .two-col-content{
                    .text{
                        width: 100%;
                        max-width: 590px;
                        padding-right: 20px;
                        border-right: 1px solid #F6F6F6;
                        p{
                            margin-top: 0;
                        }
                    }
                    .list-icons{
                        padding-left: 16px;
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
                .landscape-partners{
                    margin-top: 16px;
                    .title{
                        font-weight: 600;
                    }
                    .partners-images{
                        margin-top: 8px;
                        gap: 28px;
                        .partner-img-box{
                            height: 75px;
                        }
                    }
                }
            }
        }
        .green-box{
            .title-box{
                max-width: 630px;
                margin: 0 auto;
                p{
                    display: none;
                }
            }
        }

        @media (max-width: ${({ theme }) => theme.media.tab}) {
            .hero-landscape{
                padding: 66px 0 0;
                .hero-content-box{
                    margin: -60px 20px 0;
                    border-radius: 20px;
                    padding: 15px 15px 20px;
                    width: auto;
                    .title-box{
                        margin-bottom: 8px;
                        h1{
                            font-size: 40px;
                        }
                        .small-title{
                            font-size: 17px;
                            line-height: 180%;
                        }
                    }
                    .landscape-partners{
                        .partners-images{
                            gap: 20px;
                            .partner-img-box{
                                height: auto;
                                width: 100px;
                                img{
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                }
                
            }
        }
        @media (max-width: ${({ theme }) => theme.media.mobile}) {
            .hero-landscape{
                padding: 66px 0 0;
                .hero-content-box{
                    .two-col-content{
                        flex-wrap: wrap;
                        .list-icons{
                            margin: 18px 0 4px 0;
                        }
                    }
                }
            }
        }
    `
    const PositiveImpact = styled.section`
        padding: 64px 4.8rem 78px;
        position: relative;
        text-align: center;
        background-color:#EFE7DA;
        .impact-info{
            max-width: 1065px;
            gap: 44px;
            .impact-group{
                .impact-info-numbers{
                    gap: 12px;
                    .total-numbers-info{
                        font-size: 48px;
                        line-height: 58px;
                        font-weight: 600;
                        span{
                            font-size: 19px;
                            line-height: 27px;
                            display: block;
                        }
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 40px 22px 46px;
            .impact-info{
                gap: 28px;
                .impact-group{
                    .grid{
                        gap: 32px;
                        .impact-info-numbers{
                            gap: 4px;
                            .total-numbers-info{
                                font-size: 42px;
                                line-height: 52px;
                                span{
                                    margin: 0 auto;
                                    max-width: 80%;
                                    font-size: 17px;
                                    line-height: 25px;
                                }
                            }
                        }
                    }
                }
            }
        }
    `

    const ThreeColLandscape = styled.section`
        background: #004D37 url('../images/bg-texture-green.jpg') no-repeat center center;
        background-size: cover;
        padding: 110px 20px 110px;
        position: relative;
        .three-cols-box{
            max-width: 1285px;
            margin: 0 auto;
            gap: 20px;
            .map-box{
                max-width: 522px;
                .img-box{
                    overflow: hidden;
                    .landscape-map{
                        object-fit: cover;
                        width: 522px;
                        min-height: 581px;
                        border-radius: 15px;
                    }
                }
            }
            .species-activities{
                min-width: 414px;
                gap: 20px;
                .three-col-box{
                   background-color: white;
                   box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
                   border-radius: 16px;
                   padding: 24px 28px;
                   .title-box.gray-color{
                        .small-title, small{
                            color: #424A46;
                        }
                        small{
                            line-height: 150%;
                        }
                    }
                   .title-box{
                        small{
                            line-height: 150%;
                        }
                    }
                   .three-col-imgs{
                        margin-top: 16px;
                        gap: 8px;
                        .img-text-box{
                            img{
                                border-radius: 10px;
                                width: 114px;
                                height: 129px;
                                -o-object-fit: cover;
                                object-fit: cover;
                            }
                            .img-text{
                                margin-top: 4px;
                                line-height: 150%;
                                font-weight: 600;
                            }
                            .grey-color{
                                color: #424A46;
                            }
                        }
                    }
                }
                .bg-lightgreen{
                    background-color: #DDEDD0;
                }
            }
            .network-lists{
                gap: 20px;
                min-width: 306px;
                .landscape-network{
                    padding: 24px 28px;
                    background-color: #6EA44C;
                    border-radius: 16px;
                    ul{
                        margin-top: 5px;
                        li{
                            padding: 4px 16px;
                            background-color: #DDEDD0;
                            line-height: 18px;
                            font-weight: 600;
                            border-radius: 8px;
                            margin-top: 4px;
                            min-height: 36px;
                            gap: 8px;
                            &:first-child{
                                margin-top: 0;
                            }
                            .count{
                                background-color: #004D37;
                                padding: 1px 4px;
                                border-radius: 4px;
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
                            padding: 8px 12px 8px 0;
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
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 20px 24px;
            .three-cols-box{
                flex-wrap: wrap;
                .map-box{
                    width: 100%;
                    .img-box{
                        .landscape-map{
                            width: 100%;
                        }
                    }
                }
                .species-activities{
                    min-width: 100%;
                    gap: 20px;
                    .three-col-box{
                    background-color: white;
                    box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
                    border-radius: 16px;
                    padding: 24px 28px;
                    .title-box.gray-color{
                            .small-title, small{
                                color: #424A46;
                            }
                            small{
                                line-height: 150%;
                            }
                        }
                    .title-box{
                            small{
                                line-height: 150%;
                            }
                        }
                    .three-col-imgs{
                            margin-top: 16px;
                            gap: 8px;
                            .img-text-box{
                                img{
                                    border-radius: 10px;
                                    width: 114px;
                                    height: 129px;
                                    -o-object-fit: cover;
                                    object-fit: cover;
                                }
                                .img-text{
                                    margin-top: 4px;
                                    line-height: 150%;
                                    font-weight: 600;
                                }
                                .grey-color{
                                    color: #424A46;
                                }
                            }
                        }
                    }
                    .bg-lightgreen{
                        background-color: #DDEDD0;
                    }
                }
            }
        }
    `
    const ThanksOrganisation =  styled.section`
        background-color: #f8f8f8;
        padding: 85px 4.8rem 120px;
        .box-partners{
            max-width: 1285px;
            margin: 0 auto;
            .content-box-partner{
                max-width: 405px;
                .action-btn{
                    margin-top: 32px;
                }
            }
            .partner-logos-box{
                max-width: 524px;
                background-color: #fff;
                border-radius: 20px;
                box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
                padding: 59px 57px 80px;
                .group-logos{
                    .img-box{
                        width: 200px;
                        img{
                            width: 100%;
                        }
                    }
                }
                .partner-tag{
                    right: -70px;
                    bottom: -73px;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 24px 20px;
            .box-partners {
                flex-wrap: wrap;
                .content-box-partner{
                    .action-btn{
                        margin-top: 20px;
                    }
                }
                .partner-logos-box {
                    padding: 20px;
                    margin-top: 40px;
                    .group-logos{
                        gap: 10px;
                        .img-box{
                            width: 125px;
                        }
                    }
                    .partner-tag{
                        width: 115px;
                        right: -10px;
                        top: -85px;
                        bottom: auto;
                    }
                    .green-text{
                        line-height: 180%;
                        color: #6EA44C;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    `

    const LandscapeNav = styled.section`
        background-color: #DDEDD0;
        padding: 60px 4.8rem;
        .group-next-prev{
            max-width: 1285px;
            margin: 0 auto;
        }
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 22px 24px;
            .group-next-prev{
                gap: 25px;
            }
            background: url('../images/bg-texture-green.jpg') no-repeat center center;
        }
    `

    return (
        <LandscapeDetailSection>
           <div className="hero-landscape">
                <img src="../images/landscape-bg.webp" className="w-full" alt="landscape-hero"/>
                <div className="hero-content-box mx-auto">
                    <div className="title-box relative">
                        <div className="small-title">Amazon Floodplain of Life</div>
                        <h1>Requena</h1>
                    </div>
                    <div className="two-col-content flex">
                        <div className="text">
                            <p>The forests of the Tapiche River​,​ located in the south of the Loreto region​,​ constitute a diverse natural space in the extensive Amazon plain. There​,​ the communities of Wicungo and Nueva Esperanza protect their forests against illegal logging and deforestation. There​, Regenera guardians are leaders in sustainable fisheries management.</p>
                        </div>
                        <div className="list-icons">
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
                        </div>
                    </div>
                    <div className="landscape-partners">
                        <p className="small title">Thanks to our proud Landscape Partner(s)</p>
                        <div className="partners-images flex flex-wrap items-center">
                            <div className="partner-img-box">
                                <img className="h-full" src="../images/partner1.webp" alt=""/>
                            </div>
                            <div className="partner-img-box">
                                <img className="h-full" src="../images/partner2.webp" alt=""/>
                            </div>
                            <div className="partner-img-box">
                                <img className="h-full" src="../images/partner3.webp" alt=""/>
                            </div>
                            <div className="partner-img-box">
                                <img className="h-full" src="../images/partner4.webp" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
           </div>

           <PositiveImpact>
                <div className="impact-info mx-auto flex flex-col">
                    <h3>Our positive impact in this landscape</h3>
                    <div className="impact-group">
                        <div className="grid grid-three-column">
                            <div className="impact-info-numbers flex flex-col">
                                <div className="total-numbers-info">
                                    115
                                    <span>hectares of Nature regenerated</span>
                                </div>
                            </div>
                            <div className="impact-info-numbers flex flex-col">
                                <div className="total-numbers-info">
                                    144,525
                                    <span>hectares under responsible management</span>
                                </div>
                            </div>
                            <div className="impact-info-numbers flex flex-col">
                                <div className="total-numbers-info">
                                    3,000
                                    <span>trees planted</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PositiveImpact>

           <ThreeColLandscape>
                <div className="three-cols-box flex">

                    <div className="map-box">
                        <div className="img-box">
                            <img className="landscape-map" src="../images/ladscape-map-img.webp" alt=""/>
                        </div>
                    </div>

                    <div className="species-activities flex flex-col">

                        <div className="three-col-box">
                            <div className="title-box gray-color">
                                <div className="small-title">Threatened species</div>
                                <small>protected in this landscape</small>
                            </div>
                            <div className="three-col-imgs flex">
                                <div className="img-text-box text-center">
                                    <img src="../images/f76257abbd8110d15129cb2fbd937628.webp" className="w-full" alt="Aguila arpia"/>
                                    <div className="img-text small grey-color">Aguila arpia</div>
                                </div>
                                <div className="img-text-box text-center">
                                    <img src="../images/a6b83abc62d04a2d62b9dee3de5ad1e7.webp" className="w-full" alt="Arahuana"/>
                                    <div className="img-text small grey-color">Arahuana</div>
                                </div>
                                <div className="img-text-box text-center">
                                    <img src="../images/a2640dca51ff38bda39e9d9743802fd6.webp" className="w-full" alt="Tapir"/>
                                    <div className="img-text small grey-color">Tapir</div>
                                </div>
                            </div>
                        </div>

                        <div className="three-col-box bg-lightgreen">
                            <div className="title-box">
                                <div className="small-title">Sustainable activities</div>
                                <small>supported in this landscape</small>
                            </div>
                            <div className="three-col-imgs flex">
                                <div className="img-text-box text-center">
                                    <img src="../images/f7948aad15c7ff2a3b47a357b7a08332.webp" className="w-full" alt="Manejo forestal"/>
                                    <div className="img-text small">Manejo forestal</div>
                                </div>
                                <div className="img-text-box text-center">
                                    <img src="../images/acdf2a9dcb9b7e46ebec76d0098e273a.webp" className="w-full" alt="Manejo pesquero"/>
                                    <div className="img-text small">Manejo pesquero</div>
                                </div>
                                <div className="img-text-box text-center">
                                    <img src="../images/f51f056688d0e4331404c519d8ecba1d.webp" className="w-full" alt="Artesanias"/>
                                    <div className="img-text small">Artesanias</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="network-lists flex flex-col">
                        <div className="landscape-network">
                            <div className="small-title text-white">Landscape network</div>
                            <ul>
                                <li className="small flex justify-space-between items-center">Guardians <span className="count text-white small-title">2222</span></li>
                                <li className="small flex justify-space-between items-center">Partner organisations <span className="count text-white small-title">2222</span></li>
                                <li className="small flex justify-space-between items-center">Local people supported <span className="count text-white small-title">9212</span></li>
                            </ul>
                        </div>
                        <div className="list-boxs">
                            <div className="recent-actions">
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
                </div>
           </ThreeColLandscape>

           <ThanksOrganisation>
                <div className="box-partners flex justify-space-between">
                    <div className="content-box-partner">
                        <h3>All this is possible thanks to our Partners organisations</h3>
                        <p>For only $30 a month you and your business can become part of the movement.</p>
                        <OrangeBtn className="action-btn">
                            <Link to="#">Become a Partner</Link>
                        </OrangeBtn>
                    </div>
                    <div className="partner-logos-box relative">
                        <div className="green-text show-tab">Partner organisations</div>
                        <div className="group-logos flex flex-wrap items-center justify-center">
                            <div className="img-box">
                                <img src="../images/b257f0a177df23397f10e899525da1cc.png" className="w-full" alt="partner logo"/>
                            </div>
                            <div className="img-box">
                                <img src="../images/c28def6b335ad6886941afce115f38e0.png" className="w-full" alt="partner logo"/>
                            </div>
                            <div className="img-box">
                                <img src="../images/2a43421b1e2532e81c62e352bc923100.png" className="w-full" alt="partner logo"/>
                            </div>
                            <div className="img-box">
                                <img src="../images/e1baec769a6aac0ae0719de9ab534c14.png" className="w-full" alt="partner logo"/>
                            </div>
                        </div>
                        <img src="../images/partner-tag.svg" className="absolute partner-tag" alt="regenera partner"/>
                    </div>
                </div>
           </ThanksOrganisation>
            <BecomeMember
                title="Do you have a question about our landscapes? " 
                linkto="#"
                btnText= "Send us an email"
            />
            <LandscapeNav>
                <div className="group-next-prev flex justify-space-between">
                    <LightGreenBtn className="back-next-btn">
                        <Link to="#">Back to Landscapes</Link>
                    </LightGreenBtn>
                    <LightGreenBtn className="back-next-btn">
                        <Link to="#">View next Landscape</Link>
                    </LightGreenBtn>
                </div>
            </LandscapeNav>
        </LandscapeDetailSection>
    )
}

export default LandscapeDetail;