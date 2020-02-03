// 1. Crear varios componentes de clase o simples para utilizar en la Aplicacion Princpal que permita realizar
// una distribucion mediante Grid :
// - Header
// - Main 
//     -3 capas que entre todas ocupen el 100% del ancho del navegador
// - Footer
// 2. REalizar las hojas de estilo utilizando Sass
// 3. Gestionar las versiones de Software con GIt

import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';



class App2 extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
export default App2