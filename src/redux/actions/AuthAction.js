import AuthService from "./../../services/AuthServices";

export const login = async (dispatch, body) => {
  const service = new AuthService();

  try {

    const user = await service.login(body);

    dispatch({
      type: "SET_USER",
      payload: user
    })

    return true;

  } catch (error) {
    console.log("ERROR===> "+JSON.stringify(error));
    dispatch({
      type: "SET_ERROR",
      payload: error.message
    });

    return false;
  }
}

export const registrarse = async (dispatch, body) => {
  const service = new AuthService();
  console.log("action " + JSON.stringify(body));

  try {

    const user = await service.registrar(body);

    dispatch({
      type: "SET_USER",
      payload: user
    })

    return true;

  } catch (error) {
    console.error(error);
    dispatch({
      type: "SET_ERROR",
      payload: error.message
    })
    return false;
  }
}

export const logout = (dispatch) => {
  const service = new AuthService();
  service.logout();

  dispatch({
    type: "SET_USER",
    payload: null
  })
  return true;


}