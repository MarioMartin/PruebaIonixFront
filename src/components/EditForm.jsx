import { Form, Modal, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { editar } from "./../redux/actions/TablaActions";

import { useState } from 'react';

const EditForm = ({ usuario, show, setShow }) => {
    const dispatch = useDispatch();



    const id = usuario.id;
    const pass = usuario.password;
    const [firstName, setFirstName] = useState(usuario.firstName);
    const [lastName, setLastName] = useState(usuario.lastName);
    const [username, setUsername] = useState(usuario.username);
    const [email, setEmail] = useState(usuario.email);


    const onSubmit = async (e) => {
        e.preventDefault();
        const body = { id, firstName, lastName, username, email, pass };
        const res = await editar(dispatch, body);
    };

    return (

        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Editar Usuario
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="app" onSubmit={onSubmit}>
                    <div className="Auth-form-content">
                        <div className="form-group mt-3">
                            <label>Nombre</label>
                            <Form.Control
                                name="firstName"
                                type="text"
                                value={firstName}
                                className="form-control mt-1"
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Apellido</label>
                            <Form.Control
                                name="lastName"
                                type="text"
                                value={lastName}
                                className="form-control mt-1"
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Nombre de Usuario</label>
                            <Form.Control
                                name="username"
                                type="text"
                                value={username}
                                className="form-control mt-1"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>E-Mail</label>
                            <Form.Control
                                name="email"
                                type="email"
                                value={email}
                                className="form-control mt-1"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <Button variant="dark" type="submit" >Editar Usuario</Button>
                        </div>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>



    )
}

export default EditForm;