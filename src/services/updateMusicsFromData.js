import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const updateMusicsFromData = (id, updatedData) => {
    const token = localStorage.getItem("token");
    return axios.patch(`${BASE_URL}song/${id}`, updatedData, {
        headers: {
            Authorization: token,
        },
    });
};
