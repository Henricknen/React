import React from 'react'

export default function Dados(props) {      // 'props' indica que este componente esta recebendo dados de 'App.js'
    let n1 = 10
    let n2 = 6
    return(
        <section>
            <p>Proprietario:{props.proprietario}</p>
            <p>Cidade:{props.cidade}</p>
            <p>Biblioteca:{props.biblioteca}</p>
            <p>Codificado:{props.data_codificacao}</p>
            <p>meensagem:{props.exibir()}</p>       {/* ultilizando o atributo 'exibir' como função'()' pois ele está carregando uma função */}
            <p>{"A soma de " + n1 + " com " + n2 + " é igual a: " + props.somar(n1, n2)}</p>
            <h1>{props.sobrenome}</h1>
        </section>
    )
}