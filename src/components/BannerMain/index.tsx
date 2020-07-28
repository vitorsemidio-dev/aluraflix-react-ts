import React, { useCallback, useMemo } from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import {
  BannerMainContainer,
  ContentAreaContainer,
  Item,
  Title,
  Description,
  WatchButton,
} from './styles';

interface Props {
  videoTitle: string;
  videoDescription: string;
  url: string;
}

const BannerMain: React.FC<Props> = ({ videoTitle, videoDescription, url }) => {
  const getYouTubeId = useCallback((youtubeURL: string) => {
    return youtubeURL.replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
  }, []);

  const youTubeID = useMemo(() => getYouTubeId(url), [url, getYouTubeId]);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <Item>
          <Title>{videoTitle}</Title>

          <Description>{videoDescription}</Description>
        </Item>

        <Item>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <WatchButton>Assistir</WatchButton>
        </Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
};

export default BannerMain;
