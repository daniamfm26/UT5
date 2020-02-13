import React, {Component} from 'react';
import SelectoresAtributo from './SelectoresAtributo';
import TrabajoConFormularios from './TrabajoConFormularios';
import Animaciones from './Animaciones';
import Distribucion from './Distribucion';
import Medidafr from './Medidafr'; 


class App extends Component{
    render(){
        return(
            <div>
                {/* <SelectoresAtributo /> */}
                {/* <TrabajoConFormularios /> */}
                <Animaciones />
                <Distribucion />
                <Medidafr />
            </div>
        )
    }
}

export default App