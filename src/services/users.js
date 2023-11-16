import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";

export const login = async (body, navigate) => {
  console.log(body);
  try {
    const res = await axios.post(`${BASE_URL}user/login`, body);
    localStorage.setItem("token", res.data.token);
    goToFeed(navigate);
  } catch (err) {
    console.log(err);
    alert(err.response.data.error);
  }
};
