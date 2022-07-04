import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";

const AuthContext = React.createContext()

export const useAuth = () => {
    const dispatch = useDispatch();
    const user = useContext(AuthContext);
    console.log("###### Verificara si esta iniciada la sesion " + JSON.stringify(user));
    //aca se validaria el token contra el backend

    dispatch({
        type: "SET_USER",
        payload: user.user
    })

    return user;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    return (
        <AuthContext.Provider value={{ user }} >
            {children}
        </AuthContext.Provider>
    );
};
