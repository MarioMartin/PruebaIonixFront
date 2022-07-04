import React, { useState } from 'react';
import { useHistory, useNavigate } from "react-router-dom";
import { registrarse } from "./../redux/actions/AuthAction";

import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from 'react-bootstrap';


const Registro = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [body, setBody] = useState({ firstName: '', lastName: '', username: '', email: '', password: '' });


    const handleChange = e => {
        setBody({ ...body, [e.target.name]: e.target.value })
    }

    const onSubmit = async () => {
        console.log("login: " + JSON.stringify(body));
        const res = await registrarse(dispatch, body);
        if (res) {
            navigate('/');
        }
    };

    return (


        <div className="Auth-form-container">
            <Form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Registro</h3>
                    <div className="form-group mt-3">
                        <label>Nombre</label>
                        <input
                            name="firstName"
                            type="text"
                            className="form-control mt-1"
                            placeholder="Nombre"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Apellido</label>
                        <input
                            name="lastName"
                            type="text"
                            className="form-control mt-1"
                            placeholder="Apellido"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Nombre de Usuario</label>
                        <input
                            name="username"
                            type="text"
                            className="form-control mt-1"
                            placeholder="Nombre de Usuario"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>E-Mail</label>
                        <input
                            name="email"
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <Button variant="dark" type="button" onClick={() => onSubmit()}>Registrarse</Button>
                    </div>
                </div>
            </Form>
        </div>




    )
}
export default Registro;