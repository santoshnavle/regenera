import React, { useState, useRef } from "react";
import styled from "styled-components";


const VideoPlayer = ({thumbnailD, thumbnailM, path, playbtn, videoClass}) => {

    const VideoPlay = styled.div`
        position:relative;
        .hide{
            visibility:hidden;
        }
        .show{
            visibility: visible;
        }
        .thumbnail-box{
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            button{
                background: none;
                border: 0 none;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                cursor: pointer;
            }
        }
        @media (max-width:${({ theme }) => theme.media.tab}){
            .thumbnail-box{
                button{
                    img{
                        max-width: 45px;
                    }
                }
            }
        }
    `
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        videoRef.current.play();
        setIsVisible(!isVisible);
    };

    return (
        <>
            {thumbnailD && (
                <VideoPlay className={videoClass}>
                <video id="videobox" controls className={isVisible ? "hide" : "show"} ref={videoRef}>
                    <source src={path} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                {isVisible && 
                <div className="thumbnail-box absolute">
                    <picture>
                        <source media="(max-width:768px)" srcset={thumbnailM}/>
                        <img src={thumbnailD} className="w-full" alt="video thumbnail"/>
                    </picture>
                    <button onClick={handleClick}><img src={playbtn} alt="Play button"/></button>
                </div>}
            </VideoPlay>
            )}
        </>
    )
   
}

export default VideoPlayer;