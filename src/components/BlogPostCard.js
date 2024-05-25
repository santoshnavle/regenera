import React from "react";
import styled from "styled-components";

const BlogPostCard = ({image, category, title, authorName, postDate}) => {

    const CardContainer = styled.section`
        width: 100%;
        img{
            border-radius: 5px;
        }
    `
    

    return (
        <CardContainer className="w-full">
            <img src={image} className="w-full" alt={title}/>
            <div className="card-box flex flex-col">
                <ul className="category-list">
                    {category}
                </ul>
                <div className="title-box flex flex-col">
                    <h4>{title}</h4>
                    <div className="author">
                        {authorName} | {postDate}
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default BlogPostCard;