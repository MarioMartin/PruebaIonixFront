import { useState, useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { eliminar } from "./../redux/actions/TablaActions";
import EditForm from './EditForm'



const ItemTabla = ({ usuario }) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);


    useEffect(() => {
        setShow(false)
    }, [usuario])

    return (
        <>

            <td>{usuario.firstName}</td>
            <td>{usuario.lastName}</td>
            <td>{usuario.email}</td>
            <td>
                <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}>  Editar </Tooltip>}>
                    <button onClick={() => setShow(true)} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip id={`tooltip-top`}> Eliminar </Tooltip>}>
                    <button onClick={async () => eliminar(dispatch, usuario.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
                </OverlayTrigger>


            </td>
            <EditForm usuario={usuario} show={show} setShow={setShow} />
        </>
    )
}

export default ItemTabla;