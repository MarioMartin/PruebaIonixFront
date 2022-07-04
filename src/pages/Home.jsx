import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { listar } from "./../redux/actions/TablaActions";
import TablaUsuarios from './../components/TablaUsuarios';




const Home = () => {

    const dispatch = useDispatch();
    const usuarios = useSelector((state) => state.redTabla.listaUsuarios);

    useEffect(() => {
        const lista = listar(dispatch);
    }, [])

    return (
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <TablaUsuarios />
                </div>
            </div>
        </div>
    )
}


export default Home;