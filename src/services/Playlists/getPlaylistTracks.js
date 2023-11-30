import axios from 'axios';
import { BASE_URL } from '../../constants/urls';

export const getPlaylistTracks = async (playlistId) => {
  try {
    const token = localStorage.getItem('token');

    const response = await axios.get(
      `${BASE_URL}playlist/${playlistId}/song`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data; // Aqui você retorna a lista de músicas na playlist
  } catch (error) {
    console.error('Erro ao obter músicas da playlist:', error);
    throw error; // Trate o erro conforme necessário
  }
};
