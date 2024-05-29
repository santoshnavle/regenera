import React from "react";
import styled from "styled-components";
import NewsSubscribe from "../components/blogList/NewsSubscribe";



const BlogPost = () => {

    // styled
    const BlogPostSection = styled.section`
        background-color: #F8FBF6;
        position: relative;
        .blog-detail-info{
            background: white;
            max-width: 1064px;
            padding: 68px 109px;
            left: 50%;
            transform: translateX(-50%);
            top: 138px;
            .author-category{
                .author-section{
                    .author-img{
                        max-width: 80;
                        img{
                            border-radius: 50%;
                            border:3px solid #DDEDD0;
                        }
                    }
                }
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
           
        }
    `
    return (
        <BlogPostSection>
            <div className="bg-img">
                <picture>
                    <source media="(max-width:700px)" srcset="./images/blog-bg-mobile.png"/>
                    <img  src="./images/blog-bg-desktop.png" alt="" className="w-full"/>
                </picture>
            </div>
            <div className="blog-detail-info absolute mx-auto">
                <div className="author-category">
                    <div className="author-section flex">
                        <div className="author-img">
                            <img src="https://cms.regenera.earth/wp-content/uploads/2023/02/IMG-20220916-WA0004.jpg" className="w-full"/>
                        </div>
                        <div className="author-detail">
                            <div className="author-name">Gabriel Herrera</div>
                            <div className="post-date">00-00-00</div>
                        </div>
                    </div>
                    <ul class="category-list absolute flex">
                        <li><small>Category</small></li>
                        <li><small>Landscape</small></li>
                    </ul>
                </div>
                
                <div className="time-to-read"><small>4 min read</small></div>
                <div className="post-content">
                    <h1 className="post-title">A nice title that may be as long as about two lines goes here.</h1>
                    <p className="intro-text">In addition to being one of the world’s leading tropical ecology research centres, the Cocha Cashu Biological Station is an active member of Regenera. We spoke with César Flores Negrón, director of San Diego Zoo Global Peru, the organization in charge of managing the station.</p>
                    <p>“For 50 years, a whole generation of researchers has been studying the rainforest here at Cocha Cashu, and we have been able to observe over those years how we are approaching a tipping point in which, if we do nothing, we are going to leave a very dark future for our children,” says César Flores Negrón, a forestry engineer with extensive experience in research in the Peruvian Amazon. <br/> “That is why we believe that – not only as scientists but also as citizens – we must take action. That is why, as San Diego Zoo Global Peru, we believe that through our actions here at the station we can show local communities, and citizens in general, that we can change the near future. That is why when we learned about the Regenera initiative, we felt we had to be part of it and do our bit,” he says.</p>
                    <h2>Science and education for the world</h2>
                    <p>Since its creation, Cocha Cashu has welcomed students and researchers from all over the world, whose studies have resulted in more than 700 publications on diverse topics such as forest dynamics, wildlife behaviour, climate change, among others.</p>
                    <img src="./images/post-img-1.png" alt="" className="w-full post-img"/>
                    <p>“The main objective of Cocha Cashu is to acquire knowledge about the ecological and biological processes occurring in the tropical forest of the southeastern Amazon. This knowledge provides the necessary information for better management of the region, as well as guidelines for the rational use of natural resources. We consider all types of biological research and conservation of natural resources a priority for protected areas and, therefore, useful for the management of Manu National Park,” says Roxana Arauco, former on-site manager of the station. <br/>But Cocha Cashu is not only about research; education and training of future generations and future leaders in ecology and conservation is also a priority. This is why they have created the EduCashu program, which aims to bring students living inside the Manu Biosphere Reserve closer to the work being done at the station.<br/>“There are many activities that we must carry out with the objective of mitigating and adapting to climate change. One of them is our contribution to the local guardians of the forests, to the promoters of conservation. It is an alliance that gives us hope,” says César Flores. For this reason, in 2017, the Cocha Cashu joined Regenera, offsetting not only its organisational carbon footprint but also that produced by each of its visitors.</p>
                </div>

            </div>
            <NewsSubscribe/>
        </BlogPostSection>
    )
}

export default BlogPost;