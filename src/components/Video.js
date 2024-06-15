import React, { useState, useRef } from "react";
import styled from "styled-components";


const VideoPlayer = ({thumbnail, path, videoClass}) => {

    const VideoPlay = styled.div`
        position:relative;
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
    `
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    const handleClick = () => {
        videoRef.current.play();
        setIsVisible(!isVisible);
    };

    return (
        <>
            {thumbnail && (
                <VideoPlay className={videoClass}>
                <video id="videobox" controls ref={videoRef} poster={thumbnail}>
                    <source src={path} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                {isVisible && 
                <div className="thumbnail-box absolute">
                    <img className="w-full" alt="video thumbnail" src={thumbnail}/>
                    <button onClick={handleClick}><img src="./images/playbtn.webp" alt="Play button"/></button>
                </div>}
            </VideoPlay>
            )}
        </>
    )
   
}

export default VideoPlayer;