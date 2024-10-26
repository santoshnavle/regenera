import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sitemap = () => {
    // styled

    const SitemapSection = styled.section`
        position: relative;
        .green-bg{
            min-height: 300px;
            align-items: flex-start;
            background: #004532 url("../images/bg-texture-green.jpg") no-repeat center top;
            background-size: cover;
            margin-bottom: -4px;
            padding-bottom: 50px;
            .title-box{
                padding: 30px 0;
            }
            .text-white{ 
                color: white;
            }
            .wrapper{
                max-width: 1275px;
                gap: 25px;
                padding-left: 20px;
                padding-right: 20px;
                z-index:9;
                .col-box {
                    background-color: white;
                    padding: 40px;
                    border-radius: 20px;
                    gap: 20px 120px;
                    .list-col{
                        flex: 1 0 auto;
                        .title-links{
                            margin-bottom: 25px;
                            .small-title{
                                margin-bottom: 15px;
                            }
                            .sitemap-links{
                                li{
                                    margin: 10px 0;
                                    a{
                                        font-size: 18px;
                                        display: block;
                                        color: #6EA44C;
                                        &:hover{
                                            color: #497d28;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        
        
        @media (max-width:${({ theme }) => theme.media.tab}){
            .green-bg{
                margin-bottom: 0;
                padding-bottom: 0;
                padding-top: 45px;
                gap: 0;
                width: 100%;
                .wrapper{
                    position: relative;
                    flex-wrap: wrap;
                    padding: 20px 20px 30px;
                    .col-box{
                        min-height: auto;
                        min-width: auto;
                        width: 100%;
                        padding: 30px 25px 25px;
                        gap: 20px 50px;
                        .list-col{
                            .title-links{
                                margin-bottom: 25px;
                                .small-title{
                                    margin-bottom: 15px;
                                }
                                .sitemap-links{
                                    li{
                                        margin: 10px 0;
                                        a{
                                            font-size: 18px;
                                            display: block;
                                            color: #6EA44C;
                                            &:hover{
                                                color: #497d28;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `
  

    return (
        <SitemapSection>
            <div className="green-bg">
                <div className="wrapper w-full mx-auto">
                    <div className="title-box">
                        <p className="text-white">regenera</p>
                        <h3 className="text-white">Sitemap</h3>
                    </div>
                    <div className="col-box w-full flex-wrap flex">
                        <div className="list-col">
                            <div className="title-links">
                                <h4 className="small-title">About Regenera</h4>
                                <ul className="sitemap-links">
                                    <li>
                                        <Link to="#">organizations</Link>
                                    </li>
                                    <li>
                                        <Link to="#">people</Link>
                                    </li>
                                    <li>
                                        <Link to="#">about</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="title-links">
                                <h4 className="small-title">Regenera login</h4>
                                <ul className="sitemap-links">
                                    <li>
                                        <Link to="#">login</Link>
                                    </li>
                                    <li>
                                        <Link to="#">signup</Link>
                                    </li>
                                    <li>
                                        <Link to="#">recover-password</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="title-links">
                                <h4 className="small-title">Regenera login</h4>
                                <ul className="sitemap-links">
                                    <li>
                                        <Link to="#">login</Link>
                                    </li>
                                    <li>
                                        <Link to="#">signup</Link>
                                    </li>
                                    <li>
                                        <Link to="#">recover-password</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="list-col">
                            <div className="title-links">
                                <h4 className="small-title">About Regenera</h4>
                                <ul className="sitemap-links">
                                    <li>
                                        <Link to="#">organizations</Link>
                                    </li>
                                    <li>
                                        <Link to="#">people</Link>
                                    </li>
                                    <li>
                                        <Link to="#">about</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="title-links">
                                <h4 className="small-title">Regenera login</h4>
                                <ul className="sitemap-links">
                                    <li>
                                        <Link to="#">login</Link>
                                    </li>
                                    <li>
                                        <Link to="#">signup</Link>
                                    </li>
                                    <li>
                                        <Link to="#">recover-password</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="title-links">
                                <h4 className="small-title">Regenera login</h4>
                                <ul className="sitemap-links">
                                    <li>
                                        <Link to="#">login</Link>
                                    </li>
                                    <li>
                                        <Link to="#">signup</Link>
                                    </li>
                                    <li>
                                        <Link to="#">recover-password</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="list-col">
                            <div className="title-links">
                                <h4 className="small-title">About Regenera</h4>
                                <ul className="sitemap-links">
                                    <li>
                                        <Link to="#">organizations</Link>
                                    </li>
                                    <li>
                                        <Link to="#">people</Link>
                                    </li>
                                    <li>
                                        <Link to="#">about</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="title-links">
                                <h4 className="small-title">Regenera login</h4>
                                <ul className="sitemap-links">
                                    <li>
                                        <Link to="#">login</Link>
                                    </li>
                                    <li>
                                        <Link to="#">signup</Link>
                                    </li>
                                    <li>
                                        <Link to="#">recover-password</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="title-links">
                                <h4 className="small-title">Regenera login</h4>
                                <ul className="sitemap-links">
                                    <li>
                                        <Link to="#">login</Link>
                                    </li>
                                    <li>
                                        <Link to="#">signup</Link>
                                    </li>
                                    <li>
                                        <Link to="#">recover-password</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SitemapSection>
    )
}

export default Sitemap;