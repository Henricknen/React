import React from 'react'

export default function Dados(props) {      // 'props' indica que este componente esta recebendo dados de 'App.js'
    return(
        <section>
            <p>Proprietario:{props.proprietario}</p>
            <p>Cidade:{props.cidade}</p>
            <p>Biblioteca:{props.biblioteca}</p>
            <p>Codificado:{props.data_codificacao}</p> 
        </section>
    )
}