import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const createNewPlaylist = async (playlistDetails) => {
  try {
    const res = await axios.post(`${BASE_URL}playlist`, playlistDetails, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });

    // Examine a resposta se necessário
    console.log('Resposta da criação de playlist:', res.data);

    // Você pode retornar algo útil aqui, se necessário
    return res.data;
  } catch (err) {
    console.error('Erro na criação de playlist:', err);
    // Você pode lançar ou tratar o erro aqui
    throw err;
  }
};
