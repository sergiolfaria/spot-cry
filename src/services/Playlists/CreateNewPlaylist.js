import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const createNewPlaylist = (playlistDetails) => {
  const token = localStorage.getItem("token");

  return axios.post(`${BASE_URL}playlist`, playlistDetails, {
    headers: {
      Authorization: token,
    },
  });
};
