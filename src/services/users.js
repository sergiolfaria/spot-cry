import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";

export const login = (body, navigate) => {
  console.log(body);
  axios
    .post(`${BASE_URL}user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToFeed(navigate)
    })
    .catch((err) => {
      console.log(err);      
      alert(err.response.data.error);
    });
};
