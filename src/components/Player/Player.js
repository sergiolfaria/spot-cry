import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import YouTube from 'react-youtube';
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';

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

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState('');
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);

  const opts = {
    height: '0',
    width: '0',
  };

  useEffect(() => {
    // Atualizar a miniatura usando a API do YouTube Data
    const fetchThumbnail = async () => {
      const videoId = 'E0ozmU9cJDg'; // Substitua pelo ID do seu vídeo
      const apiKey = 'AIzaSyDgJOkFh7VkgB517gj7-KuCSIRbu5_Ce84'; // Substitua pela sua chave da API do YouTube

      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
        );
        const data = await response.json();
        const thumbnailUrl = data.items[0]?.snippet?.thumbnails?.default?.url;
        setThumbnail(thumbnailUrl);
      } catch (error) {
        console.error('Erro ao buscar a miniatura do vídeo:', error);
      }
    };

    fetchThumbnail();
  }, []);

  const onReady = (event) => {
    playerRef.current = event.target;

    // Set up a listener to update the progress bar
    setInterval(() => {
      const currentTime = playerRef.current.getCurrentTime();
      const duration = playerRef.current.getDuration();
      const calculatedProgress = (currentTime / duration) * 100;
      setProgress(calculatedProgress);
    }, 1000); // Update every second
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
        videoId="E0ozmU9cJDg"
        opts={opts}
        containerClassName="audio-container"
        onReady={onReady}
      />

      <NowPlaying>
        <img src={'https://i.ytimg.com/vi/E0ozmU9cJDg/default.jpg'} alt="Video Thumbnail" width="40" height="40" />
        <SongInfo>
          <SongTitle>Song Title</SongTitle>
          <SongArtist>Artist Name</SongArtist>
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
      </PlayerStatus>
    </PlayerContainer>
  );
};

export default Player;
