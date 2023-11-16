import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const FeedContainer = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
  color: ${COLORS.darkGray};
  background-color: ${COLORS.black};
`;

export const PlaylistContainer = styled.div`
  width: 25%;
  padding: 20px;
  background-color: ${COLORS.darkGray};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-radius: 8px;
  margin: 10px 10px 10px 10px;
`;

export const SongsContainer = styled.div`
  width: 50%;
  padding: 20px;
  overflow-y: auto;
  background-color: ${COLORS.darkGray};
  border-radius: 8px;
  margin: 10px 10px 10px 10px;
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
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const HeaderList = styled.div`
  display: flex;
  flex-direction: row;
`;