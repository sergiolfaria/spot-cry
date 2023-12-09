import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const createNewPlaylist = async (playlistDetails) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${BASE_URL}playlist`, playlistDetails, {
      headers: {
        Authorization: token,
      },
    });

    console.log('Resposta da criação de playlist:', res.data);

    return res.data;
  } catch (err) {
    console.error('Erro na criação de playlist:', err);
    throw err;
  }
};
