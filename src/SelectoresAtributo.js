import React, {Component} from 'react';
import Imagen from 'react-image';

class SelectoresAtributo extends Component{
    render(){
        return(
            <div>
                <a href="https://www.google.es" target="_blank" rel="noopener noreferrer">
                    Enlace a Google que cumple un selector de atributos
                </a>
                <br/>
                <br/>
                <a href="https://www.google.es" target="_self" >
                    Enlace a Google que cumple un selector de atributos
                     con el valor self
                </a>
                <br/>
                <br/>
                <Imagen alt="K2" src={require('./img/k2.jpg')}/>
                <br/><br/>
                <p className="claseparrafo-1" >
                    Este párrafo va a cumplir un selector de atributos
                    para elementos con el atributo class y cuyo valor comience por claseparrafo
                </p>
                <br/><br/>
                <p className="claseselector1">
                    Este párrafo va a cumplir un selector de atributos para elementos
                    con el atributo class y cuyo valor comience por una palabra y puede ir seguida
                    de cualquier conjunto de caracteres
                </p>
                <p className="clasetexto">
                    Este párrafo va a cumplir un selector de atributos para elementos
                    con el atributo class y cuyo valor comience por una palabra y puede ir seguida
                    de cualquier conjunto de caracteres
                </p>
                
            </div>
        )
    }
}
export default SelectoresAtributo