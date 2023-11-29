import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const editPlaylist = (playlistId, updatedDetails) => {
  const token = localStorage.getItem("token");
  return axios.patch(`${BASE_URL}playlist/${playlistId}`, updatedDetails, {
    headers: {
      Authorization: token,
    },
  });
};
