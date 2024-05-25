import React from "react";
import styled from "styled-components";
import HeroSectionBlog from "../components/HeroSectionBlog";


const Blog = () => {

    const para1 =  <p>Catch up on our news, from updates on the activities of our Guardians and Partners, to opinion pieces by our expert team.</p>;

    // styled
    const BlogSection = styled.section`
        @media (max-width:${({ theme }) => theme.media.tab}){
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
        </BlogSection>
    )
}

export default Blog;