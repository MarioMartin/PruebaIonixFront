import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from 'react-bootstrap';

import { useDispatch } from "react-redux";
import { login } from "./../redux/actions/AuthAction";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [body, setBody] = useState({ username: '', password: '' });


    const handleChange = e => {
        setBody({ ...body, [e.target.name]: e.target.value })
    }



    const onSubmit = async () => {
        console.log("login: " + JSON.stringify(body));
        const res = await login(dispatch, body);
        console.log("res " + res);

        if (res) {//si retorna true lo deriva al desboard
            navigate('/');
        }
    };



    return (
        <div className="Auth-form-container">


            <Form className="Auth-form">
                <Alert show={false} variant="success">
                    Usuario o password incorrectos
                </Alert>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Login</h3>
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
                        <Button variant="dark" type="button" onClick={() => onSubmit()}>Ingresar</Button>
                    </div>
                </div>
            </Form>
        </div>



    )
}
export default Login;