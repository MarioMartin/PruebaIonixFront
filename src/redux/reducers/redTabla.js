const INITIAL_STATE = {
    listaUsuarios: [],
    error: null
}

const redTabla = (state = INITIAL_STATE, action) => {

    const { payload, type } = action;

    switch (type) {
        case "SET_LISTA":
            return {
                ...state,
                listaUsuarios: payload,
            };
        case "ADD_USER":
            return {
                ...state,
                listaUsuarios: [...state.listaUsuarios, payload]
            };
        case "EDIT_USER":
            return {
                ...state,
                listaUsuarios: [
                    ...state.listaUsuarios.filter((usuario) => usuario.id !== action.payload.id),
                    action.payload,
                ],
            };
        case "DEL_LISTA":
            return {
                ...state,
                listaUsuarios: state.listaUsuarios.filter(item => item.id !== payload),

            };
        default:
            return state;
    }
};

export default redTabla;