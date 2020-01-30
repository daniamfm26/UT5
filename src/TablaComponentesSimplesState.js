import React from "react";


const TablaCabecera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre: </th>
                <th>Borrar: </th>
            </tr>
        </thead>
    )
}

const TablaCuerpo=props =>{
    const filaDeDatos=props.datosPersonaje.map((fila, indice)=>{
        return(
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td> <button onClick={()=> props.borrarPersonaje(indice)}>Borrar</button></td>
            </tr>
        )
    })
    return(
        <tbody>
            {filaDeDatos}
        </tbody>
    )
}

const TablaComponentesSimplesState = (props)=>{
    const {datosPersonaje,borrarPersonaje}=props
    return (
        <table>
            <TablaCabecera />
            <TablaCuerpo datosPersonaje={datosPersonaje} borrarPersonaje={borrarPersonaje} />
        </table>
    )
}

export default TablaComponentesSimplesState
// Crear varios componentes de clase o simples para utilizar en la Aplicacion Princpal que permita realizar una distribucion mediante Grid :
// - Header
// - Main 
//     -3 capas que entre todas ocupen el 100% del ancho del navegador
// - Footer
// REalizar las hojas de estilo utilizando Sass
// Gestionar las versiones de Software con GIt