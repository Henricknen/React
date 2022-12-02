import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';     // importando três componentes
import Pg1 from './componentes/Pagina1'
import Pg2 from './componentes/Pagina2'
import Pg3 from './componentes/Pagina3'

export default function App() {
    return(
        <>
            <header>
            <Link to='/'>Home</Link>
                <Link to='/pag1'>Página 1</Link>   {/* criação do 'componente Link' */}
                <Link to='/pag2'>Página 2</Link>
                <Link to='/pag3'>Página 3</Link>
            </header>
            <main>
                <Switch>        {/* faz o controle das rotas */}
                    <Route path = 'pag1' component = {Pg1}/>
                    <Route path = 'pag2' component = {Pg2}/>     {/* definição das rotas */}
                    <Route path = 'pag3' component = {Pg3}/>
                </Switch>
            </main>

        </>
    );
}