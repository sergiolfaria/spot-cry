import axios from "axios";
import { BASE_URL } from "../../constants/urls";


export const getPlaylistsFromUser = () => {
    const token = localStorage.getItem("token")
    
        return axios.get(`${BASE_URL}playlist`, {
            headers: {
                Authorization: token,
            },
        });
};
