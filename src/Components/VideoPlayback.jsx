import React from 'react';

const VideoPlayback = () => {
    return (
        <>
            <h1>Video playing</h1>
            <video controls width="600">
                <source src="/3571264-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    );
}

export default VideoPlayback;
