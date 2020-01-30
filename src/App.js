import React, { Component } from 'react';
import Tabla from './Tabla';
import TablaComponentesSimples from './TablaComponentesSimples';
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps';
import TablaComponentesSimplesState from './TablaComponentesSimplesState';

class App extends Component {
    /*Objeto para utilizar en state*/
    state ={
        personajes:[
            { nombre: 'Payton Hobart'},
            { nombre: 'Wendy Carr'},
            { nombre: 'Mina'},
            { nombre: 'Jonathan Harker'},
            { nombre: 'Drácula'},
            { nombre: 'Once'},
            { nombre: 'Jim Hopper'},
        ]
    }
    /*Método para borrar personajes */
    borrarPersonaje= indice=>{
        const {personajes}=this.state

        this.setState({
            personajes: personajes.filter((personaje,i)=>{
                return i !== indice
                /*Devuelve todo los que no tiene que borrar.Es decir, todos los distintos del indice */
            })
        })
    }
    render() {
        /*Coleccionn de objetos con nomenclatura JSON para utiliar con props */ 
        const actoresactrices = [ 
            { 
                nombre: 'Joel', 
                apellidos: 'Edgerton',
            },
            { 
                nombre: 'Carmen', 
                apellidos: 'Maura', 
            }, 
            { nombre: 'Luis', 
            apellidos: 'Tosar', 
            }, 
            { 
                nombre: 'Chloe', 
                apellidos: 'Grace Moretz', 
            } 
        ]

        /*Inicializamos el objeto de personajes */
        const {personajes}=this.state
        return (
        <div className="App"> 
            <h2>Tabla creada mediante un componente de clase que no utiliza componentes simples</h2>
            <Tabla /> 
            <h2>Tabla creada mediante un componente de clase utilizando componentes simples</h2> 
            <TablaComponentesSimples />
            <h2>Tabla cread mediante un componente de clase que utiliza paso de parametros con props</h2>
            <TablaComponentesSimplesProps datosActoresActrices={actoresactrices}/>
            <h2>Tabla creada con componentes simples (con state y permite eliminar elementos),
                 que utilizados elementos simples </h2>
            <TablaComponentesSimplesState datosPersonaje={personajes} borrarPersonaje={this.borrarPersonaje}/>
        </div>
        ) 
    } 
}
export default App