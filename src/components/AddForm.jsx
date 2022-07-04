import { useState } from 'react';
import { useDispatch } from "react-redux";
import { Form, Button, Modal } from "react-bootstrap";
import { añadir } from "./../redux/actions/TablaActions";


const AddForm = ({ show, setShow }) => {
    const dispatch = useDispatch();

    const [body, setBody] = useState({ firstName: '', lastName: '', username: '', email: '', password: '', avatar: '' });


    const handleChange = e => {
        setBody({ ...body, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const res = await añadir(dispatch, body);

    };


    return (

        <Modal show={show} onHide={() => { setShow(false) }} >
            <Modal.Header closeButton>
                <Modal.Title>
                    Añadir Usuario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="App" onSubmit={onSubmit}>
                    <div className="Auth-form-content">
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
                        <div className="form-group mt-3">
                            <label>Avatar</label>
                            <Form.Control
                                name="avatar"
                                className="form-control mt-1"
                                type="file" 
                                size="sm"
                        
                            />

                        </div>
                       
                        <div className="d-grid gap-2 mt-3">
                            <Button variant="dark" type="submit" >Añadir Usuario</Button>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
        </Modal >
    )
}

export default AddForm;