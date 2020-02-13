import React, { Component } from 'react';

class Distribucion extends Component {
    render() {
        return (
            <div className='general'>
                <header className='general__cabecera'>
                    <nav className='general__cabecera__menu'>
                        <div >Ítem 1</div>
                        <div >Ítem 2</div>
                        <div >Ítem 3</div>
                    </nav>

                </header>
                <aside className='general__aside'>
                    Aside 1
                </aside>
                <main className='general__cuerpo'>
                    Main
                </main>
                <aside className='general__aside2'>
                    Aside 2
                </aside>
                <footer className='general__footer'>
                    Pie de Página
                </footer>
            </div>
        )

    }
}


export default Distribucion
