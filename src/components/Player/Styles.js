import styled from 'styled-components';
import { COLORS } from '../../constants/colors';


export const PlayerContainer = styled.div`
 
  width: 100%;
  background-color: ${COLORS.black};
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2);
`;

export const NowPlaying = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.white};
`;

export const SongTitle = styled.h4`
  font-size: 2.5vh;
  margin: 0;
  color: ${COLORS.white};
`;

export const SongArtist = styled.p`
  font-size: 1.5vh;
  margin: 0;
  color: ${COLORS.white};
`;

export const PlayerControls = styled.div`
  display: flex;
  gap: 20px;
`;

export const ControlButton = styled.button`
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
    color: ${COLORS.blue};
  }
`;

export const ProgressBar = styled.progress`
  width: 220%;
  height: 10px;
`;

export const PlayerStatus = styled.div`
  display: flex;
  color: ${COLORS.white};
  flex-direction: column;
  align-items: center;
`;