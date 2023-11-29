import styled from 'styled-components';
import { COLORS } from '../../constants/colors';


export const PlayerContainer = styled.div`
  width: 100%;
  background-color: ${COLORS.black};
  display: flex;
  flex-direction: column;
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
  margin-left: 115px;
  display: flex;
  gap: 10px;
  align-items: center;
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

export const PlayerStatus = styled.div`
  display: flex;
  color: ${COLORS.white};
  flex-direction: column;
  align-items: center;
  margin-top: 10px; /* Adiciona um espaço acima do PlayerStatus */
`;

export const ProgressBar = styled.progress`
  width: 90%;
  height: 10px;
`;

export const VolumeControl = styled.input`
  width: 20%;
  height: 12%;
  border-radius: 8px;
  background: darkgray; /* Cor de fundo da barra de volume */
  -webkit-appearance: none; /* Remove a aparência padrão do controle deslizante */

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Remove a aparência padrão do botão do slide */
    width: 0px; /* Largura do botão do slide inicial */
    height: 0px; /* Altura do botão do slide inicial */
    background: darkgray; /* Cor padrão do botão do slide */
    border-radius: 50%; /* Formato circular para o botão do slide */
    cursor: pointer; /* Cursor ao passar sobre o botão do slide */
    transition: background 0.3s, width 0.1s, height 0.1s; /* Adiciona uma transição suave na mudança de cor e tamanho */
  }

  &:hover::-webkit-slider-thumb {
    background: ${COLORS.white}; /* Cor do botão do slide ao passar o mouse */
    width: 10px; /* Largura do botão do slide ao passar o mouse */
    height: 10px; /* Altura do botão do slide ao passar o mouse */
  }
`;
