import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const getPlaylistsByUser = (userId) => {
  const token = localStorage.getItem("token");
  return axios.get(`${BASE_URL}playlist/user/${userId}/playlists`, {
    headers: {
      Authorization: token,
    },
  });
};
