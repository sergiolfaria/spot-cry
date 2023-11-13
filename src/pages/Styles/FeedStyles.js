import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const FeedContainer = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
  color: ${COLORS.darkGray};
`;

export const PlaylistContainer = styled.div`
  position: fixed;
  width: 25%;
  padding: 20px;
  background-color: ${COLORS.lightGray};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const SongsContainer = styled.div`
  width: 50%;
  padding: 20px;
  overflow-y: auto;
  margin-left: 20%;
`;

export const SongContainer = styled.div`
  background-color: ${COLORS.lighterGray};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SongInfo = styled.div`
  flex-grow: 1;
  margin-right: 16px;
`;

export const SongTitle = styled.h3`
  font-size: 18px;
  color: ${COLORS.indigo};
  margin-bottom: 8px;
`;

export const SongArtist = styled.p`
  font-size: 14px;
  color: ${COLORS.darkGray};
`;

export const SongButtons = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-right: 8px;
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .delete {
    background-color: red;
    color: ${COLORS.white};
  }
  .edit {
    background-color: ${COLORS.darkYellow};
    color: ${COLORS.white};
  }
`;

export const AddSongContainer = styled.div`
  width: 25%;
  padding: 20px;
  background-color: ${COLORS.lightGray};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${COLORS.indigo};
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const FeedPageContainer = styled.div`

`;
