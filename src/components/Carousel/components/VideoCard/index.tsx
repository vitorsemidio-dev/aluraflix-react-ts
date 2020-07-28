import React, { useCallback } from 'react';

import { VideoCardContainer } from './styles';

interface VideoCardProps {
  videoTitle: string;
  videoURL: string;
  categoryColor: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoTitle,
  videoURL,
  categoryColor,
}) => {
  const getYouTubeId = useCallback((youtubeURL: string) => {
    return youtubeURL.replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
  }, []);

  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL,
  )}/hqdefault.jpg`;

  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
};

export default VideoCard;
