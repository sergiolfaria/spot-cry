import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export const getMusicsFromData = () => {
    const token = localStorage.getItem("token")
        return axios.get(`${BASE_URL}song`, {
            headers: {
                Authorization: token,
            },
        });
};