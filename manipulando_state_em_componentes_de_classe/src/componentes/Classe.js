import React from 'react'

export default class Classe extends React.Componet {      // classe 'extends' herdando de React.Componet
constructor(props) {     // método contrutor 'props' pega as propriedades que estão sendo passada pelo objeto instanciado
    super(props)            // 'super' chama o construtor da classe pai
}
    render(){        // chamando o método 'render'
        return(
            <div>
                <h1>Primeiro Componente de Classe</h1>       // componente em modo de classe
                <p>Repositorio: {props.repositorio}</p>
                <p>Me chamo: {props.nome}</p>
            </div>
        )
    }   
}
