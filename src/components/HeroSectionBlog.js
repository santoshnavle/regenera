import React from "react";
import styled from "styled-components";
import { LightGreenBtn } from "./Button";

const HeroSectionBlog = ({title, subtitle, ImageMobile, Image}) => {

    // temporary code starts
    function btnClick() {
        window.open("/blogsearch");
    }
    // temporary code ends 

    const HeroContainer = styled.section`
    min-height: 370px;
    background: url('../images/bg-texture-green.jpg');
    background-size: cover;
    @media (max-width:${({ theme }) => theme.media.tab}){
        min-height: 300px;
        margin-top: 60px;
    }
    `
    const Center = styled.div`
        max-width: 925px;
        align-self: center;
        top: -18px;
        margin: 26px 20px;
        .title-box{
            h1{
                font-size: 48px;
                line-height: 58px;
                color: white;
                position: relative;
                .border{
                    img{
                        position: absolute;
                        bottom: -8px;
                        transform: translateX(-50%);
                        left: 50%;
                    }
                }
            }
            .subtitle{
                color: white;
                margin-top:20px;
                max-width: 522px;
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            top: 0;
            margin-top: 0;
            .title-box{
                h1{
                    font-size: 42px;
                    line-height: 52px;
                    .border{
                        display: block;
                        img{
                            width: auto;
                        }
                    }
                }
            }
        }
    `
    const SearchBox = styled.div`
        max-width: 630px;
        left: 50%;
        transform: translateX(-50%);
        bottom: 60px;
        box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05);
        .form-control{
            width: 100%;
            border-radius: 25px;
            padding: 8px 26px;
            height: 45px;
            &::placeholder{
                color: #004D37;
            }
            border: 1px solid #eaeaea;
        }
        .search-btn{
            right: 0
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            bottom: -20px;
            width: auto;
            left: 20px;
            right: 20px;
            transform: none;
        }
    `
    return (
        <HeroContainer className="flex justify-center relative"> 
            <Center className="mx-auto relative">
                <div className="title-box text-center">
                    <h1>
                        <span className="border">
                            {title}
                            <picture>
                                <source media="(max-width:768px)" srcset={ImageMobile}/>
                                <img src={Image} className="w-auto" alt=""/>
                            </picture>
                        </span>
                    </h1>
                    <div className="subtitle mx-auto">{subtitle}</div>
                </div>
            </Center>
            <SearchBox className="mx-auto w-full flex absolute">
                <input type="text" class="form-control w-full" placeholder="Search..." aria-label="blog search" aria-describedby="blog search"/>
                <LightGreenBtn className="search-btn absolute" onClick={btnClick} type="submit">Search</LightGreenBtn>
            </SearchBox>
        </HeroContainer>
    )
}

export default HeroSectionBlog;