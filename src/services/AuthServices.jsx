import axios from "axios";
import authHeader from "./../Utils/header";
import { API_URL } from "./../Utils/Constantes"

export default class ServiceAuth {
  constructor() {
  }

  //REGISTRO
  async registrar(body) {

    const { firstName, lastName, username, email, password } = body;
    return axios.post(API_URL + "/registrar", { firstName, lastName, username, email, password }, { headers: authHeader() }).then((response) => {

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  }

  //LOGIN
  async login(body) {

    const { username, password } = body;
    return axios.post(API_URL + "/login", { username, password }, { headers: authHeader() }).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
  
      return response.data;
    });

  }

  //LOGOUT
  logout = () => {
    localStorage.removeItem("user");
  }

}