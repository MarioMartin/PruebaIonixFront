import TablaServices from "./../../services/TablaServices";

export const listar = async (dispatch) => {
  const service = new TablaServices();

  try {

    const response = await service.listar();

    dispatch({
      type: "SET_LISTA",
      payload: response.data.listaUsuarios
    })

    return response.data.listaUsuarios;
  } catch (error) {

    console.log(error);

  }

  return false;
}

export const eliminar = async (dispatch, id) => {
  const service = new TablaServices();

  try {

    const response = await service.eliminar(id);

    dispatch({
      type: "DEL_LISTA",
      payload: id
    })

    return response.data.listaUsuarios;
  } catch (error) {

    console.log(error);

  }

  return false;
}

export const añadir = async (dispatch, usuario) => {
  const service = new TablaServices();

  try {

    const response = await service.añadir(usuario);

    dispatch({
      type: "ADD_USER",
      payload: response
    })

    return response.data;
  } catch (error) {

    console.log(error);

  }

  return false;
}

export const editar = async (dispatch, usuario) => {
  const service = new TablaServices();

  try {

    const response = await service.editar(usuario);

    dispatch({
      type: "EDIT_USER",
      payload: usuario
    })

    return response.data;
  } catch (error) {

    console.log(error);

  }

  return false;
}



