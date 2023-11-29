import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const removeTrackFromPlaylist = (playlistId, songId) => {
  const token = localStorage.getItem("token");
  return axios.delete(`${BASE_URL}playlist/${playlistId}/song/${songId}`, {
    headers: {
      Authorization: token,
    },
  });
};
