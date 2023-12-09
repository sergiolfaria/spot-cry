import axios from 'axios';
import { BASE_URL } from '../../constants/urls';

export const deletePlaylist = async (playlistId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete(`${BASE_URL}playlist/${playlistId}`, {
      headers: {
        Authorization: token,
      },
    });

    if (response.status === 204) {
      console.log('Playlist excluída com sucesso.');
      return true;
    } else {
      console.error('Erro ao excluir playlist:', response.data);
      return false;
    }
  } catch (error) {
    console.error('Erro ao excluir playlist:', error);
    return false;
  }
};
