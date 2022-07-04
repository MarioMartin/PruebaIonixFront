
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Alert } from 'react-bootstrap';
import ItemTabla from './ItemTabla';
import AddForm from './AddForm';
import Paginador from './Paginador';

const TablaUsuarios = () => {

    const usuarios = useSelector((state) => state.redTabla.listaUsuarios);
    const [showAlert, setShowAlert] = useState(false);

    //const { usuariosOrdenados } = null;//useContext(EmployeeContext);

    const [show, setShow] = useState(false);

    const [paginaActual, setPaginaActual] = useState(1);
    const [usuariosPorPagina] = useState(2)

    useEffect(() => {
        setShow(false)
    }, [usuarios])

    const indexUltimoUser = paginaActual * usuariosPorPagina;
    const indexPrimerUser = indexUltimoUser - usuariosPorPagina;
    const usuariosActual = usuarios.slice(indexPrimerUser, indexUltimoUser);
    const totalUsuarios = Math.ceil(usuarios.length / usuariosPorPagina);



    return (
        <>
            <div className="table-title">
                <div className="row">
                    <Alert show={showAlert} variant="success">
                        Usuario actualizado
                    </Alert>
                    <div className="col-sm-6">
                        <h2>Listado de  Usuarios</h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={(() => setShow(true))} className="btn btn-success" data-toggle="modal">
                            <span>Añadir nuevo Usuario</span>
                        </Button>
                    </div>
                </div>
            </div>



            <table className="table table-striped table-hover">
                <thead>

                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Operaciones</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        usuariosActual.map(usuario => {
                            return (
                                <tr key={usuario.id}>
                                    <ItemTabla usuario={usuario} />
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Paginador paginas={totalUsuarios}
                setPaginaActual={setPaginaActual}
                usuariosActual={usuariosActual}
                usuariosOrdenados={usuarios} />

            <AddForm show={show} setShow={setShow} />
        </>
    )
}

export default TablaUsuarios;

