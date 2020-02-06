import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from "@reach/router";
// import Img form 'react-image';
import Estilo1 from './Estilo1.css'

/*
const Aplicacion = () => {
    return (
        <div>
            <h1>Manejo de rutas en React</h1>
            <nav>
                <Link to='/'>Inicio</Link>{" "}
                <Link to="AcercaDe">Acerca De</Link>
            </nav>

            <Router>
                <Inicio path="/" />
                <AcercaDe path="/AcercaDe" />
            </Router>

        </div>

    )
}

const Inicio = () => {
    return (
        <div>
            <h2>Estás en Inicio</h2>
        </div>
    )
}

const AcercaDe = () => (
        <div>
            <h2>Estás en Acerca De</h2>
        </div>
)

ReactDOM.render(<Aplicacion/>, document.getElementById('root'));
*/


const Aplicacion = () => {
    return (
        <div>
            <h1>Manejo de rutas en React</h1>
            <nav>
                <Link to='/'>Inicio</Link>{" "}
                <Link to="Pagina1">Página 1</Link>{" "}
                <Link to="Pagina2">Página 2</Link>
            </nav>

            <Router>
                <Inicio path="/" />
                <Pagina1 path="/Página1" />
                <Pagina2 path="/Página2" />
            </Router>

        </div>

    )
}

const Inicio = () => {
    return (
        <div className='inicio'>
            <img src="./img/imagen1" alt="imagen 1" />
        </div>
    )
}

const Pagina1 = () => (
        <div>
            <h2>Página 1</h2>
        </div>
)

const Pagina2 = () => (
        <div>
            <h2>Página 2</h2>
        </div>
)

ReactDOM.render(<Aplicacion/>, document.getElementById('root'));