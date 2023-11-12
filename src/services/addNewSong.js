import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const postSongsToData = (songData) => {
  const token = localStorage.getItem("token");
  return axios.post(`${BASE_URL}song`, songData, {
    headers: {
      Authorization: token,
    },
  });
};
