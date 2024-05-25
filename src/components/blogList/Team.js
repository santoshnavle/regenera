import React from "react";
import styled from "styled-components";

const Team = () => {
    const TeamSection = styled.section`
        position: relative;
        .team-section{
            min-height: 490px;
            background-color:${({ theme }) => theme.colors.title_green};
            text-align: center;
            .team-bg{
                background-image: url('../../images/team-bg.png');
            }
            .title-box{
                max-width: 630px;
                margin-bottom: 4px;
                padding: 0 20px;
                .small-title{
                    font-size: 19px;
                    line-height: 180%;
                    letter-spacing: 3.5px;
                    font-weight: 400;
                    color: #DDEDD0;
                    text-transform: uppercase;
                    margin-bottom: 4px;
                }
                h3{
                    color: white;
                }
            }
            .content{
                max-width: 630px;
                color: white;
                padding: 0 20px;
            }
        }
        .left-team, .right-team{
            height: 522px;
            position: absolute;
            left: 0;
            bottom: 8px;
            z-index: 1;
            img{
                height: 522px;
            }
        }
        .right-team{
            left: auto;
            right: 0;
            bottom: -11px;
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .team-section{
                min-height: auto;
                padding: 149px 20px 167px;
                .title-box, .content{
                    padding: 0;
                }
            }
            .left-team, .right-team {
                left:50%;
                transform: translateX(-50%);
                top: -14px;
                bottom: auto;
                width: 100%;
                text-align: center;
                height: 160px;
                img{
                    height: 160px;
                }
            }
            .right-team{
                top: auto;
                bottom: -12px;
            }
        }
        @media (max-width:400px){
            .left-team, .right-team {
                height: 132px;
                img{
                    height: 100%;
                }
            }
        }
    `
    return (
        <TeamSection>
            <div className="team-section flex justify-center flex-col">
                <div className="team-bg"></div>
                <div className="title-box mx-auto">
                    <div className="small-title">The team</div>
                    <h3>Our very own Nature guardians</h3>
                </div>
                <div className="content mx-auto">
                    <p>We are proud of our team. We are a melting pot of cultures, backgrounds, and professional experiences - united by our love for wildlife and wild places, and the drive to support those who sustain Nature for future generations. We believe truth ignites change and that change is inspired through example. So we roll up our sleeves, learn by doing, and never lose sight of our guiding purpose.</p>
                </div>
            </div>
            <div className="left-team">
                <picture>
                    <source media="(max-width:1023px)" srcset="../images/top-team.png"/>
                    <img src="../images/left-team.png" alt="team-img"/>
                </picture>
            </div>
            <div className="right-team">
                <picture>
                    <source media="(max-width:1023px)" srcset="../images/bottom-team.png"/>
                    <img src="../images/right-team.png" alt="team-img"/>
                </picture>
            </div>
        </TeamSection>
    )
}

export default Team;