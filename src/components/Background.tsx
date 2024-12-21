import React, { useState } from 'react';
import NeuralBackground from './NeuralBackground';
import VideoBackground from './VideoBackground';

interface BackgroundProps {
  type?: 'neural' | 'video';
  videoUrl?: string;
}

const Background: React.FC<BackgroundProps> = ({ type = 'neural', videoUrl }) => {
  return type === 'neural' ? (
    <NeuralBackground />
  ) : (
    <VideoBackground videoUrl={videoUrl} />
  );
};

export default Background;