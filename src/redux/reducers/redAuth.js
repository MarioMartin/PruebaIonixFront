const INITIAL_STATE = {
    user:null,
    error: null
}

const redAuth = (state = INITIAL_STATE, action) => {

    const { payload, type } = action;

    switch (type) {
        case "SET_USER":
            return {
                ...state,
                user: payload,
                error: null,
            };
        case "SET_ERROR":
            return {
                ...state,
                error: payload,
            };
        case "LOGOUT":
            return {
                ...state,
                user: INITIAL_STATE.user,
                error: null,
            };
        default:
            return state;
    }
};

export default redAuth;
