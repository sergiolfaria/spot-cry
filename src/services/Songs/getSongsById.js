import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const getSongById = async (songId) => {
    try {
        const token = localStorage.getItem("token")
        return axios.get(`${BASE_URL}song/${songId}`, {
        headers: {
          Authorization: token,
        },
      });
  
    } catch (error) {
      // Trate os erros conforme necessário
      console.error('Erro ao obter detalhes da música:', error);
      throw error; 
    }
  };
  