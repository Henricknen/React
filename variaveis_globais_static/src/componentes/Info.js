import React from 'react'
import Globais from './Globais';        // importando componente 'Globais.js'

export default function Info() {
    
    return(
        <>
            <p>{'Nome: ' + Globais.nome}</p>     {/* ultilizando as variaveis */}
            <p>{'Repositorio: ' + Globais.repositorio}</p>
            <p>{'Ano: ' + Globais.ano}</p>
        </>
    );
}