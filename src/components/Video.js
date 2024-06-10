import React, { useState } from "react";
import styled from "styled-components";


const VideoPlayer = ({thumbnail, path, videoClass}) => {

    const VideoPlay = styled.div`
        
    `
    const [hidden, setHidden] = useState(false);

    const handleClick = () => {
        setHidden(true);
    };

    return (
        <VideoPlay className={videoClass}>
            <video controls poster={thumbnail}>
                <source src={path} type="video/mp4"/>
                <button onClick={handleClick}><img src="./images/playbtn.png"/></button>
                Your browser does not support the video tag.
            </video>
        </VideoPlay>
    )
}

export default VideoPlayer;