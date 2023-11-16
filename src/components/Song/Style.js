import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const SongItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const SongDetails = styled.div`
  margin-right: 16px;
  flex-grow: 1;
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-color: ${COLORS.lighterGray};
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const SongTitle = styled.h3`
  font-size: 18px;
  color: ${COLORS.white};
  margin-bottom: 8px;
`;

export const SongArtist = styled.p`
  font-size: 14px;
  color: ${COLORS.white};
`;

export const SongActionButtons = styled.div`
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

