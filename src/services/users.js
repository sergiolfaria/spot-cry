import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Corrija a importação
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

export const getUserId = () => {  
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token); 
  const userId = decodedToken.id;
  console.log(userId);
  
  return userId;
};
