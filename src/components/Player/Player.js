import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    align-items: center ;
`;

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContainer>
      <NowPlaying>
        {/* You can replace these with actual data */}
        <img src="album-cover.jpg" alt="Album Cover" width="40" height="40" />
        <SongInfo>
          <SongTitle>Song Title</SongTitle>
          <SongArtist>Artist Name</SongArtist>
        </SongInfo>
      </NowPlaying>
      <PlayerStatus>
        <PlayerControls>
          <ControlButton><FontAwesomeIcon icon={faStepBackward} /></ControlButton>
          <ControlButton onClick={togglePlayPause}>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </ControlButton>
          <ControlButton><FontAwesomeIcon icon={faStepForward} /></ControlButton>
        </PlayerControls>
        <ProgressBar value="50" max="100" /> {/* Ajuste o valor e max conforme necessário */}
      </PlayerStatus>
    </PlayerContainer>
  );
};

export default Player;
