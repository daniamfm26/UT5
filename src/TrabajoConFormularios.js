import React, {Component} from 'react';
import Imagen from 'react-image';

class TrabajoConFormularios extends Component{
    render(){
        return(
            <div>
                <form name="formulario1" id="formularioid" action="">
                    <fieldset>
                        <legend>Formulario con React</legend>
                        <label for="campotext1id">Nombre: </label>
                        <input type="text" name="campotext1" id="campotext1id" 
                            placeholder="Introduce tu nombre aqui" /> <br/>
                        <label for="campotext2id">Campo de busqueda: </label>
                        <input type="text" name="campotext2" id="campotext2id" className="claseinput-1"
                            placeholder="Termino de busqueda" />
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default TrabajoConFormularios
