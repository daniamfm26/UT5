import React, { Component } from 'react';
import Estilo from './Estilo.css';

class Main extends Component{
    render(){
        return(
            <header>
                  <div className='cuerpo'>
                      <div className='cuerpo__contenedor1'>
                          Contenedor 1
                      </div >
                      <div className='cuerpo__contenedor2'>
                          Contenedor 2
                      </div>
                      <div className='cuerpo__contenedor3'>
                          Contenedor 3
                      </div>
                  </div>
            </header>
        )
    }
}
export default Main