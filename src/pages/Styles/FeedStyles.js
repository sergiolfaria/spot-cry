import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const FeedContainer = styled.div`
  background-color: ${COLORS.black};
  display: flex;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  color: ${COLORS.darkGray};
`;

export const Headerduo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction:row;
  gap:5vh;
`;
export const SongFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SongsAndHeaderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  margin-top:5vh;
`;

export const PlaylistContainer = styled.div`
  max-height: 100%;
  padding: 21px;
  background-color: ${COLORS.darkGray};
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-radius: 8px;
  margin: 5vh 18px 30px 18px;
  flex-shrink: 0;
  overflow-y: auto; /* Add this line to enable vertical scrollbar */

  /* Estilização da barra de rolagem */
  scrollbar-width: thin;
  scrollbar-color: ${COLORS.blue} ${COLORS.darkGray};

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.blue};
    border-radius: 14px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${COLORS.darkGray};
    border-radius: 50px;
  }
`;

export const SongsContainer = styled.div`
  flex: 1;
  min-height: 40%;
  padding: 20px;
  overflow-y: auto;
  background-color: ${COLORS.darkGray};
  border-radius: 0 0 9px 9px;
  margin: 0 0 30px 0;

  /* Estilização da barra de rolagem */
  scrollbar-width: thin;
  scrollbar-color: ${COLORS.blue} ${COLORS.darkGray};

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 50px;
  }


  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.blue};
    border-radius: 14px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${COLORS.darkGray};
    border-radius: 50px;
  }
`;


export const Playercontainer = styled.div`
  
  width: 30%;
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
  cursor: pointer;
`;

export const HeaderList = styled.div`
  position: sticky;
  top: 0;
  padding: 20px;
  background-color: ${COLORS.darkGray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0px 0px;
  z-index: 1;
`;
export const PlaylistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid ${COLORS.blue};
  margin-bottom: 10px;
`;

export const PlaylistTitle = styled.h2`
  font-size: 20px;
  color: ${COLORS.blue};
`;

export const PlaylistButton = styled.button`
  background-color: ${COLORS.blue};
  color: ${COLORS.white};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

