import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import HeroSectionBlog from "../components/HeroSectionBlog";
import BlogPostCard from "../components/BlogPostCard";
import BlogFilterCategory from "../components/submenu/BlogFilterCategory";
import NewsSubscribe from "../components/blogList/NewsSubscribe";
import BlogFilterLand from "../components/submenu/BlogFilterLand";
import { IoIosArrowDown } from "react-icons/io";



const Blog = () => {

    const para1 =  <p>Catch up on our news, from updates on the activities of our Guardians and Partners, to opinion pieces by our expert team.</p>;

    // blog posts data
     const data  = [
        
    ];

    // styled
    const BlogSection = styled.section`
        background-color: #F8FBF6;
        .blog-lists-container{
            max-width: 1320px;
            padding: 50px 20px 105px;
            .blog-list-count{
                margin: 10px 0 10px;
            }
            .post-lists{
                flex-wrap: wrap;
                gap: 30px 20px;
                .no-result{
                    font-size: 32px;
                    line-height: 42px;
                    color: #CECECE;
                    max-width: 630px;
                    margin-top: 30px;
                    font-weight: 600;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .blog-lists-container{
                padding: 45px 20px 38px;
            }
        }
    `
    const BlogMenu =  styled.section`
        max-width: 1280px;
        .navbar-menu {
            gap: 12px;
            .landscape-nav{
                .submenu{
                    right: -115px;
                }
            }
            .category-nav{
                .submenu{
                    right: -129px;
                }
            }
            li {
                list-style: none;
                position: relative;
                .navbar-link{
                    background-color: ${({ theme }) => theme.colors.light_green};
                    border-radius: 25px;
                    font-weight: 600;
                    color: white;
                    padding: 4px 12px;
                    line-height: 29px;
                    height: 35px;
                    gap: 5px;
                }
                .submenu{
                    display: none;
                    min-width: 249px;
                    width: auto;
                    background: white;
                    position: absolute;
                    top: 35px;
                    padding: 10px 12px;
                    box-shadow: 2px 4px 15px 0px rgba(0, 0, 0, 0.05);
                    right: -10px;
                    border: 1px solid #fefefe;
                    z-index: 2;
                    border-radius: 8px;
                    li{
                        margin: 4px 0;
                        padding: 0;
                        .checkbox-section{
                            input[type=checkbox]{
                                width: 20px;
                                height: 20px;
                            }
                            .form-check-label{
                                text-wrap: nowrap;
                                line-height: 1.5;
                                color: ${({ theme }) => theme.colors.title_green};
                            }
                        }
                    }
                }
                &:hover,
                &:active {
                    color: ${({ theme }) => theme.colors.helper};
                        .submenu{
                        display: block;
                    }
                }
                
            }
        }    
        .selected-multi{
            margin-left: 20px;
            .selected-token{
                gap:12px;
                .token{
                    border-radius: 25px;
                    border: 1px solid #004D37;
                    height: 35px;
                    padding: 3px 12px;
                    font-weight: 600;
                    color: ${({ theme }) => theme.colors.title_green};
                    gap: 4px;
                    &:hover{
                        border-color: black;
                    }
                    .close-icon{
                        font-size: 30px;
                    }
                }
                .remove{
                    font-weight: 600;
                    color: ${({ theme }) => theme.colors.title_green};
                    padding: 3px 10px;
                    &:hover{
                        border: 1px solid #ccc;
                        border-radius: 25px;
                    }
                }
            }
        }
    `

    return (
        <BlogSection>
            <HeroSectionBlog
            title="Results for 'Jaguar something longer so it's on 2 lines'"
            subtitle=""
            ImageMobile={"../images/blog-title-line-m.svg"}
            Image={"../images/blog-title-line-d.svg"}
            />
            <div className="blog-lists-container mx-auto">
                <BlogMenu className="mx-auto flex items-center">
                    <ul className="navbar-menu nav-right flex items-center">
                        <li className="category-nav">
                            <NavLink
                                className="navbar-link flex items-center">
                                Category <IoIosArrowDown/>
                                <BlogFilterCategory/>
                            </NavLink>
                        </li>
                        <li className="landscape-nav">
                            <NavLink
                                className="navbar-link flex items-center">
                                Landscape <IoIosArrowDown/>
                                <BlogFilterLand/>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="selected-multi">
                        <div className="selected-token flex">
                            <Link className="token flex items-center">
                                <span>Regenerate Together</span>
                                <img src="../../images/icons/close-icon.svg" className="close-icon" alt="close"/>
                            </Link>
                            <Link className="token flex items-center">
                                <span>Stories from Earth</span>
                                <img src="../../images/icons/close-icon.svg" className="close-icon" alt="close"/>
                            </Link>
                            <Link className="remove flex items-center">
                                Remove all
                            </Link>
                        </div>
                    </div>
                </BlogMenu>
                <div className="blog-list-count">{data.length} items</div>
                <div className="post-lists flex justify-space-between">
                    {data.map((item) =>(
                        <BlogPostCard
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
                    <h2 className="no-result mx-auto text-center">There are no results. Please try different words or filters. </h2>
                </div>
            </div>
            <NewsSubscribe/>
        </BlogSection>
    )
}

export default Blog;