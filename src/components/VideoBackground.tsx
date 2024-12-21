import React from 'react';

interface VideoBackgroundProps {
    videoUrl?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoUrl }) => {
    if (!videoUrl) return null;

    return (
        <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 to-black/95 z-10" />
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;
