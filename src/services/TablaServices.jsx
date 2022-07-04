import axios from "axios";
import authHeader from "../Utils/header";
import { API_URL } from "../Utils/Constantes"

export default class TablaServices {
  constructor() {
  }

  //LISTAR
  async listar() {

    return axios.get(API_URL, { headers: authHeader() }).then((response) => {
      return response;
    });
  }

  //ELIMINAR
  async eliminar(id) {
    return axios.delete(API_URL + "/" + id, { headers: authHeader() }).then((response) => {
      return response;
    });
  }

  //AÑADIR
  async añadir(body) {

    const { firstName, lastName, username, email, password } = body;
    return axios.post(API_URL, { firstName, lastName, username, email, password }, { headers: authHeader() }).then((response) => {
      return response.data;
    });
  }

  //EDITAR
  async editar(body) {

    const { id, firstName, lastName, username, email, password } = body;
    return axios.put(API_URL + "/" + id, { id, firstName, lastName, username, email, password }, { headers: authHeader() }).then((response) => {
      return response.data;
    });
  }



}
