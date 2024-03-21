import React from "react";
import styled from "styled-components";

const Team = () => {
    const TeamSection = styled.section`
        min-height: 490px;
        background-color:${({ theme }) => theme.colors.title_green};
        text-align: center;
        .team-bg{
            background-image: url('../../images/team-bg.png');
        }
        .title-box{
             max-width: 630px;
             margin-bottom: 4px;
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
        }
    `
    return (
        <TeamSection className="flex justify-center flex-col">
            <div className="team-bg"></div>
            <div className="title-box mx-auto">
                <div className="small-title">The team</div>
                <h3>Our very own Nature guardians</h3>
            </div>
            <div className="content mx-auto">
                <p>We are proud of our team. We are a melting pot of cultures, backgrounds, and professional experiences - united by our love for wildlife and wild places, and the drive to support those who sustain Nature for future generations. We believe truth ignites change and that change is inspired through example. So we roll up our sleeves, learn by doing, and never lose sight of our guiding purpose.</p>
            </div>
        </TeamSection>
    )
}

export default Team;