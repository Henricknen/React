import React from 'react'
import Globais from './componentes/Globais';        // importando componente 'Globais.js'

export default function App() {
    
    return(
        <>
            <p>{'Nome: ' + Globais.nome}</p>     {/* ultilizando as variaveis */}
            <p>{'Repositorio: ' + Globais.repositorio}</p>
            <p>{'Ano: ' + Globais.ano}</p>
        </>
    );
}