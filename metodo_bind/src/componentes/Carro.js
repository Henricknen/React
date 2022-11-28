import React from 'react'

export default class Carro extends React.Componet {      // classe 'extends' herdando de React.Componet
constructor(props) {     // método contrutor 'props' pega as propriedades que estão sendo passada pelo objeto instanciado
    super(props)            // 'super' chama o construtor da classe pai
    this.modelo = 'Golf'
    this.state = {
        ligado: false,
        velAtual:0,
    }
    this.ld = ligarDesligar.bind(this)      
}

ligarDesligar() {       // método 
this.setSatate({ligado:!this.state.ligado})        // 'ligado' é o 'state' que será manipulado
// this.setState(      // forma mais segura de fazer a chamada de atualização do valor da tela
//     (state)=> (
//         { ligado: !state.ligado }
//     )
// )
}

acelerar() {
    this.setState(
        (state, props)=> (
            {velAtual: this.state.velAtual + props.fator}
        )
    )
}
    render(){        // chamando o método 'render'
        return(
            <div>
                <h1>Meu carro</h1>       {/* componente em modo de classe */} 
                <p>Modelo: {this.modelo}</p>         {/** usando a variável */}
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>vel.Atual: {this.state.velAtual}</p>
                <button onClick={()=>this.ld}>         {/* botão chama função que fiz a conexão */}
                    {this.state.ligado ? 'Desligar carro' : 'Ligar carro'}
                </button>
                <button onClick={()=>this.acelerar()}>
                    Acelerar
                </button>      
            </div>
        )
    }   
}
