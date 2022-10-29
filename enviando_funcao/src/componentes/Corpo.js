import React from 'react'
import Dados from './Dados'     // fazendo a importação do componente 'Dados'

export default function Corpo() {
    const mensagem=()=> {       // arrow function 'mensagem'
        return ' Olá Mundo...'
    }

    const somar=(v1, v2)=> {
        return v1 + v2
    }

    const proprietario = 'Luis Henrique Silva Ferreira'
    const cidade = 'Martinopolis'
    return(
        <section>
            <h1> henrique</h1>

            <Dados      // componente 'Dados' dentro do compoente 'Corpo'
                proprietario = {proprietario}
                cidade = {cidade}       // constante formatção em azul é 'constante'
                biblioteca ='React' 
                data_codificacao = '28/10/2022'
                exibir = {mensagem}         // o atributo 'exibir' recebe a função 'mensagem'
                somar = {somar}     // constante formatção em amarelo é una 'função'
                sobrenome = 'Siva Ferrira'
            />
        </section>
    )
}