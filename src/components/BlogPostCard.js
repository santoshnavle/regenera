import React from "react";
import styled from "styled-components";

const BlogPostCard = ({image, category, title, authorName, postDate}) => {

    const CardContainer = styled.div`
        box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.05);
        flex: 1 0 auto;
        width: 32%;
        img{
            border-radius: 5px;
        }
        .card-box{
            background-color: white;
            gap: 20px;
            border-radius: 8px;
            margin-top: -20px;
            padding: 24px 32px;
            position: relative;
            z-index: 99;
            .category-list{
                gap: 8px;
                li{
                    color: white;
                    font-weight: 600;
                    background-color: ${({ theme }) => theme.colors.title_green};
                    border-radius: 25px;
                    line-height: 28px;
                    padding: 0px 10px;
                }
            }
            .title-box{
                gap: 8px;
                h4{
                    font-size: 19px;
                    font-weight: 500;
                    color: ${({ theme }) => theme.colors.title_green};
                    line-height: 27px;
                    @media (max-width:${({ theme }) => theme.media.tab}){
                        font-size: 17px;
                    }
                }
                .author{
                    font-weight: 400;
                    text-transform: capitalize;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            width: 50%;
        }
        @media (max-width:${({ theme }) => theme.media.mobile}){
            width: 100%;
        }
        
    `
    

    return (
        <CardContainer>
            <img src={image} className="w-full" alt={title}/>
            <div className="card-box flex flex-col">
                <ul className="category-list flex">
                    {category}
                </ul>
                <div className="title-box flex flex-col">
                    <h4>{title}</h4>
                    <div className="author">
                        <small>
                            {authorName} | {postDate}
                        </small>
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default BlogPostCard;