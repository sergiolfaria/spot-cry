import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const FeedContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
  color: ${COLORS.darkGray};
  background-color: ${COLORS.black};
`;
export const SongFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

export const PlaylistContainer = styled.div`
  position: fixed;
  top: 30px;
  bottom: 100px;
  padding: 20px;
  background-color: ${COLORS.darkGray};
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-radius: 8px;
  margin: 1px 10px 0px 18px;
  overflow-y: auto;
`;

export const SongsContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 18%;
  right: 25%;
  bottom: 100px;
  padding: 20px;
  overflow-y: auto;
  background-color: ${COLORS.darkGray};
  border-radius: 8px;

  /* Estilização da barra de rolagem para navegadores WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.blue};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: none;
  }
`;

export const AddSongContainer = styled.div`
  width: 25%;
  padding: 20px;
  background-color: ${COLORS.lightGray};
  display: flex;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${COLORS.blue};
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  color: ${COLORS.white};
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const HeaderList = styled.div`
  position: fixed;
  top: 30px;
  left: 18%;
  right: 25%;
  padding: 20px;
  background-color: ${COLORS.darkGray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0px 0px;
  z-index: 0;

  /* Estilização da barra de rolagem para navegadores WebKit (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.blue};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${COLORS.darkGray};
  }
`;


// Se necessário, adicione mais estilos para aprimorar a aparência
