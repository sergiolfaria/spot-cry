import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const deleteMusicsFromData = (id) => {
    const token = localStorage.getItem("token")
        return axios.delete(`${BASE_URL}song/${id}`, {
            headers: {
                Authorization: token,
            },
        });
};