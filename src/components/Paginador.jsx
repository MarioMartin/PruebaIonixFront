import { useState, useEffect } from 'react';


const Paginador = ({ paginas, setPaginaActual }) => {


    const numOfPages = [];

    for (let i = 1; i <= paginas; i++) {
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {
        setPaginaActual(currentButton);
    }, [currentButton, setPaginaActual])

    return (
        <div className="clearfix">
            <ul className="pagination">
                <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}><a href="#!"
                    onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                >Previos</a></li>
                {
                    numOfPages.map((page, index) => {
                        return (
                            <li key={index} className={`${currentButton === page ? 'page-item active' : 'page-item'}`}><a href="#!" className="page-link"
                                onClick={() => setCurrentButton(page)}
                            >{page}</a></li>
                        )
                    })

                }

                <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'}`}><a href="#!"
                    onClick={() => setCurrentButton((next) => next === numOfPages.length ? next : next + 1)}
                >Siguiente</a></li>
            </ul>
        </div>
    )
}


export default Paginador;