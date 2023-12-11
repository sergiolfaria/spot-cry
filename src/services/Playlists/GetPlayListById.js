import axios from "axios";
import { BASE_URL } from "../../constants/urls";


export const getPlaylistbyId = (id) => {
    const token = localStorage.getItem("token")
    
        return axios.get(`${BASE_URL}playlist/id`, {
            headers: {
                Authorization: token,
            },
        });
};
