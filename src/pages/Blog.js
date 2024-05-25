import React from "react";
import styled from "styled-components";
import HeroSectionBlog from "../components/HeroSectionBlog";
import BlogPostCard from "../components/BlogPostCard";


const Blog = () => {

    const para1 =  <p>Catch up on our news, from updates on the activities of our Guardians and Partners, to opinion pieces by our expert team.</p>;

    // blog posts data
     const data  = [
        { id: 1, img: '../images/blog-post-img.png', categoryData: ['Category', 'Landscape'], title: 'A nice title that may be as long as about two lines goes here.', authorName: 'manicured hectares', postDate: '15 May 2024' },
        { id: 2, img: '../images/blog-post-img.png', categoryData: ['Category', 'Landscape'], title: 'A nice title that may be as long as about two lines goes here.', authorName: 'manicured hectares', postDate: '16 May 2024' },
        { id: 3, img: '../images/blog-post-img.png', categoryData: ['Category', 'Landscape'], title: 'A nice title that may be as long as about two lines goes here.', authorName: 'manicured hectares', postDate: '17 May 2024' },
    ];

    // styled
    const BlogSection = styled.section`
        background-color: #F8FBF6;
        .blog-lists-container{
            max-width: 1280px;
            padding-top: 50px 0 105px;
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .blog-lists-container{
                padding: 45px 20px 38px;
            }
        }
    `
    return (
        <BlogSection>
            <HeroSectionBlog
            title="Regenera in Action"
            subtitle={para1}
            ImageMobile={"../images/blog-title-line-m.svg"}
            Image={"../images/blog-title-line-d.svg"}
            />
            <div className="blog-lists-container mx-auto">
                {data.map((item) =>(
                    <BlogPostCard
                    image = {item.img}
                    category = {item.categoryData.map((catitem)=>{
                            return(
                                <li>{catitem}</li>
                            )
                        })}
                    title = {item.title}
                    authorName = {item.authorName}
                    postDate = {item.postDate}
                />
                ))}
                
            </div>
        </BlogSection>
    )
}

export default Blog;