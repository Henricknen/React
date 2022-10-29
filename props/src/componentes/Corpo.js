import React from 'react'
import Dados from './Dados'     // fazendo a importação do componente 'Dados'

export default function Corpo() {
    const proprietario = 'Luis Henrique Silva Ferreira'
    const cidade = 'Martinopolis'
    return(
        <section>
            <h1>Lluis henrique</h1>

            <Dados      // componente 'Dados' dentro do compoente 'Corpo'
                proprietario = {proprietario}
                cidade = {cidade} 
                biblioteca='React' 
                data_codificacao='28/10/2022'
            />
        </section>
    )
}