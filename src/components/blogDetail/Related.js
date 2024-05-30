import React from "react";
import RelatedSlider from "react-slick";
import styled from "styled-components";
import BlogPostCard from "../BlogPostCard";

const RelatedSection = () => {

    // blog posts data
    const data  = [
        { id: 1, linkto: '#', img: '../images/blog-post-img.png', categoryData: ['Category', 'Landscape'], title: 'A nice title that may be as long as about two lines goes here.', authorName: 'manicured hectares', postDate: '15 May 2024' },
        { id: 2, linkto: '#', img: '../images/blog-post-img.png', categoryData: ['Category', 'Landscape'], title: 'A nice title that may be as long as about two lines goes here.', authorName: 'manicured hectares', postDate: '16 May 2024' },
        { id: 3, linkto: '#', img: '../images/blog-post-img.png', categoryData: ['Category', 'Landscape'], title: 'A nice title that may be as long as about two lines goes here.', authorName: 'manicured hectares', postDate: '17 May 2024' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            speed: 300,
            infinite: false,
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            className: 'center',
            centerPadding: '30px',
            arrows: false,
            dots: false,
            speed: 300,
            infinite: true,
            }
        }]
    };

    const RelatedSection = styled.section`
        padding: 80px 20px 90px 20px;
        max-width: 1280px;
        .heading{
            margin-bottom: 25px;
        }
        .regular{
            display: flex;
            flex-direction: row;
            gap: 20px;
        }
        
        @media (max-width:${({ theme }) => theme.media.tab}) {
            padding: 25px 0 35px 20px;
            .heading{
                margin-bottom: 0;
            }
            .slick-slider{
                .slick-list{
                    padding-left: 0 !important;
                    padding-top: 15px !important;
                    padding-bottom: 15px !important;
                }
            }
           .card-container{
                width: auto;
               min-width: 290px;
                padding: 0 12px;
                &:first-child{
                    padding-left: 0;
                }
            }
        }
    `

    return(
        <RelatedSection className="mx-auto">
            <div className="related-slider">
                <h2 className="heading">Related articles</h2>
                <RelatedSlider {...settings}>
                    {data.map((item) =>(
                        <BlogPostCard
                        classname = "card-container"
                        linkto= {item.linkto}
                        image = {item.img}
                        category = {item.categoryData.map((catitem)=>{
                                return(
                                    <li><small>{catitem}</small></li>
                                )
                            })}
                        title = {item.title}
                        authorName = {item.authorName}
                        postDate = {item.postDate}
                    />
                    ))}
                </RelatedSlider>
            </div>
           
        </RelatedSection>
    );    
}

export default RelatedSection;