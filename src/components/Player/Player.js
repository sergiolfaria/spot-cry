import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YouTube from 'react-youtube';
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { getthumbFromData } from '../../services/getThumb';

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${COLORS.black};
  padding: 20px;
  display: flex;
  justify-content: start;
  gap: 30%;
  align-items: center;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2);
`;

const NowPlaying = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.white};
`;

const SongTitle = styled.h4`
  margin: 0;
`;

const SongArtist = styled.p`
  font-size: 14px;
  margin: 0;
`;

const PlayerControls = styled.div`
  display: flex;
  gap: 20px;
`;

const ControlButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${COLORS.white};
  background-color: transparent;

  &:hover {
    background-color: ${COLORS.gray};
  }
`;

const ProgressBar = styled.progress`
  width: 220%; /* Ajuste conforme necessário */
  height: 10px;
`;

const PlayerStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Exemplo de uso:


const Player = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const playerRef = useRef(null);
  const [videoThumbnail, setVideoThumbnail] = useState('');

  useEffect(() => {
    // Pausa o vídeo quando a música é alterada
    if (playerRef.current) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    }
    
  }, [currentSong]);
  
  if (!currentSong || !currentSong.url) {
    // Renderiza algo quando não há uma música válida
    return null;
  }
  
  const extractYouTubeVideoId = (url) => {
    if (typeof url !== 'string') {
      return null;
    }
    
    const urlPattern = /^https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)([a-zA-Z0-9_-]{11})/;
    const match = url.match(urlPattern);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  };
  
  const videoIdextracted = extractYouTubeVideoId(currentSong.url);
  const opts = {
    height: '0',
    width: '0',
  };
  const fetchYouTubeData = async () => {
    try {
      const response = await getthumbFromData(videoIdextracted);
      const thumbnailUrl = response.data.items[0]?.snippet.thumbnails.default.url;
      setVideoThumbnail(thumbnailUrl);
    } catch (error) {
      console.error('Erro ao buscar vídeos do YouTube:', error);
    }
  };
  const onReady = (event) => {
    playerRef.current = event.target;
    
    setInterval(() => {
      const currentTime = playerRef.current.getCurrentTime();
      const duration = playerRef.current.getDuration();
      const calculatedProgress = (currentTime / duration) * 100;
      setProgress(calculatedProgress);
    }, 1000);
  };

  const onPlayPauseClick = () => {
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContainer>
      <YouTube
        videoId={videoIdextracted}
        opts={opts}
        containerClassName="audio-container"
        onReady={onReady}
      />

      <NowPlaying>
        {currentSong.thumbnail && (
        <img src={videoThumbnail || currentSong.thumbnail} alt="Video Thumbnail" width="110" height="100" />

        )}
        <SongInfo>
          <SongTitle>{currentSong.title}</SongTitle>
          <SongArtist>{currentSong.artist}</SongArtist>
        </SongInfo>
      </NowPlaying>
      <PlayerStatus>
        <PlayerControls>
          <ControlButton>
            <FontAwesomeIcon icon={faStepBackward} />
          </ControlButton>
          <ControlButton onClick={onPlayPauseClick}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </ControlButton>
          <ControlButton>
            <FontAwesomeIcon icon={faStepForward} />
          </ControlButton>
        </PlayerControls>
        <ProgressBar value={progress} max="100" />
        <span>{progress.toFixed(2)}%</span>
      </PlayerStatus>
    </PlayerContainer>
  );
};

export default Player;