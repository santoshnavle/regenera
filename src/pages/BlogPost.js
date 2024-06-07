import React from "react";
import styled from "styled-components";
import RelatedSection from "../components/blogDetail/Related";
import BecomeMember from "../components/blogDetail/BecomePartner";
import { Link } from "react-router-dom";
import { BsFillShareFill } from "react-icons/bs";



const BlogPost = () => {

    // styled
    const BlogPostSection = styled.section`
        background-color: #F8FBF6;
        position: relative;
        .bg-img{
            height: 490px;
            background: url('./images/bg-texture-green.jpg') center top no-repeat;
        }
        .blog-detail-info{
            background: white;
            max-width: 1064px;
            margin-top: -450px;
            z-index:1;
            .blog-detail-hero{
                padding: 24px 24px 0;
                .author-category{
                    .author-section{
                        gap: 20px;
                        .author-img{
                            max-width: 88px;
                            max-height: 86px;
                            img{
                                border-radius: 50%;
                                border:1px solid #DDEDD0;
                            }
                        }
                        .author-detail{
                            .author-name{
                                margin-bottom: 15px;
                            }
                            .post-date, .time-to-read{
                                line-height:180%;
                            }
                            .time-to-read{
                                margin-left: 25px;
                            }
                        }
                    }
                }
                .main-post-title{
                    font-size: 48px;
                    line-height: 58px;
                    margin: 20px 0;
                }
                .blog-hero-image{
                    margin-top: 30px;
                    img{
                        max-height: 410px;
                        object-fit: cover;
                    }
                }
            }
            
            .post-content{
                padding: 65px 100px;
                .share-link{
                    position: absolute;
                    right: 30px;
                    top: 20px;
                    gap: 5px;
                }
                .post-title{
                    margin-top:40px;
                    margin-bottom: 20px;
                }
                .post-img{
                    margin: 40px auto;
                    border-radius: 8px;
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .blog-detail-info{
                padding: 8px 14px 25px;
                margin: -400px 15px 20px;
                z-index:1;
                .blog-detail-hero{
                    padding: 0;
                    .author-category{
                        gap: 16px;
                        .author-section{
                            gap: 10px;
                            .author-img{
                                max-width: 66px;
                                max-height: 66px;
                            }
                            .author-detail{
                                flex: 1 0 auto;
                                .author-name{
                                    font-size: 16px;
                                    margin-bottom: 5px;
                                }
                                .post-date, .time-to-read{
                                    line-height:180%;
                                }
                                .time-to-read{
                                    margin-left: 40px;
                                }
                            }
                        }
                    }
                    .main-post-title{
                        font-size: 40px;
                        line-height: 52px;
                        margin: 12px 0;
                    }
                    .blog-hero-image{
                        margin-top: 30px;
                    }
                }
                
                .post-content{
                    padding: 20px 5px;
                    .share-link{
                        position: static;
                        right: 0;
                        top: 0;
                        gap: 5px;
                    }
                    .post-title{
                        margin-top:20px;
                        margin-bottom: 12px;
                    }
                    .post-img{
                        margin: 20px auto 10px;
                    }
                }
            }           
        }
    `
    return (
        <BlogPostSection>
            <div className="bg-img"></div>
            <div className="blog-detail-info mx-auto relative">
                <div className="blog-detail-hero">
                    <div className="author-category flex flex-wrap justify-space-between items-center">
                        <div className="author-section flex items-center">
                            <div className="author-img">
                                <img src="https://www.shareicon.net/data/2016/07/05/791221_man_512x512.png" alt="" className="w-full"/>
                            </div>
                            <div className="author-detail">
                                <div className="author-name fw-bold">
                                    <h4>Gabriel Herrera</h4>
                                </div>
                                <div className="flex items-center">
                                    <div className="post-date">00-00-00</div>
                                    <div className="time-to-read"><small>4 min read</small></div>
                                </div>
                            </div>
                        </div>
                        <ul class="category-list flex flex-wrap">
                            <li><small>Category</small></li>
                            <li><small>Landscape</small></li>
                        </ul>
                    </div>
                    <h1 className="main-post-title">A nice title that may be as long as about two lines goes here.</h1>
                    <div className="blog-hero-image">
                        <img className="w-full" src="https://cms.regenera.earth/wp-content/uploads/2024/05/Paisaje-intervenido-por-ocupacion-humana-scaled.jpg" alt="hero-img"/>
                    </div>
                </div>
                
                <div className="post-content relative">
                    <Link to="#" className="flex items-center share-link">
                        Share  <BsFillShareFill/>
                    </Link>
                    <p className="intro-text small fw-normal">In addition to being one of the world’s leading tropical ecology research centres, the Cocha Cashu Biological Station is an active member of Regenera. We spoke with César Flores Negrón, director of San Diego Zoo Global Peru, the organization in charge of managing the station.</p>
                    <p>“For 50 years, a whole generation of researchers has been studying the rainforest here at Cocha Cashu, and we have been able to observe over those years how we are approaching a tipping point in which, if we do nothing, we are going to leave a very dark future for our children,” says César Flores Negrón, a forestry engineer with extensive experience in research in the Peruvian Amazon. <br/> “That is why we believe that – not only as scientists but also as citizens – we must take action. That is why, as San Diego Zoo Global Peru, we believe that through our actions here at the station we can show local communities, and citizens in general, that we can change the near future. That is why when we learned about the Regenera initiative, we felt we had to be part of it and do our bit,” he says.</p>
                    <h2 className="post-title">Science and education for the world</h2>
                    <p>Since its creation, Cocha Cashu has welcomed students and researchers from all over the world, whose studies have resulted in more than 700 publications on diverse topics such as forest dynamics, wildlife behaviour, climate change, among others.</p>
                    <img src="./images/post-img-1.png" alt="" className="w-full post-img"/>
                    <p>“The main objective of Cocha Cashu is to acquire knowledge about the ecological and biological processes occurring in the tropical forest of the southeastern Amazon. This knowledge provides the necessary information for better management of the region, as well as guidelines for the rational use of natural resources. We consider all types of biological research and conservation of natural resources a priority for protected areas and, therefore, useful for the management of Manu National Park,” says Roxana Arauco, former on-site manager of the station. <br/>But Cocha Cashu is not only about research; education and training of future generations and future leaders in ecology and conservation is also a priority. This is why they have created the EduCashu program, which aims to bring students living inside the Manu Biosphere Reserve closer to the work being done at the station.<br/>“There are many activities that we must carry out with the objective of mitigating and adapting to climate change. One of them is our contribution to the local guardians of the forests, to the promoters of conservation. It is an alliance that gives us hope,” says César Flores. For this reason, in 2017, the Cocha Cashu joined Regenera, offsetting not only its organisational carbon footprint but also that produced by each of its visitors.</p>
                    <img src="./images/post-img-2.png" alt="" className="w-full post-img"/>
                    <p>“In addition to climate, the accelerated loss of biodiversity is another issue that concerns us greatly,” says Flores. “For example, a few days ago we were walking along the Cashu trails with a group of students and we observed several species of trees blooming out of season. We don’t yet know how these changes will affect the forest, but we are sure that they will have consequences. This reinforces our commitment to Regenera, because it allows us to seek solutions to these challenges hand in hand with the communities, who are the guardians of these forests.” <br/>“We cannot be indifferent, we have to do something, and that means we must change our work system and the ways in which we act in our homes, in our cities with respect to our impact on nature,” concludes Flores. “That’s why we are part of the Regenera network. It is an important space in which we contribute to the goal of mitigating the effects of climate change”.</p>
                </div>

            </div>
            <RelatedSection/>
            <BecomeMember
                title="Take action for Nature, climate, and communities" 
                linkto="#"
                btnText= "Become a Partner"
                paraText = "From only $30 per month, you and your business can become a force of Nature."
            />
        </BlogPostSection>
    )
}

export default BlogPost;