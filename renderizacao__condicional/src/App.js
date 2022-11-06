import React, {useState} from 'react'

export default function App() {

  const [cor, setCor] = useState(1)    // 'state' chamdo cor iniciara em '1'

  const vermelho = {color: "red"}

  const amarelo = {color: "yellow"}       // constante de formatação

  const azul = {color: "blue"}

  const retCor =(c)=> {    // função que ira retornar a cor alterada ultilizando o parametro 'c'
    if(c == 1) {
      return vermelho
    } else if(c == 2) {
      return amarelo
    } else {
      return azul
    }

  }

  const mudaCor =()=> {   // fazeno a manipulação do 'stateCor' para o alterar quando o botão for clicado
    setCor(cor + 1)   // a cada click no botão é adiçionado '1' no valor de 'cor'
    if(cor > 2) {       
      setCor(1)   // se 'cor' for maior que '2' retorna par '1'
    }
  }

  return(
    <>
    <h1 style={retCor(cor)}>Click no botão para mudar a cor...</h1>
      <button onClick= {()=>mudaCor()}>Mudar cor</button>     {/* 'onClick' do botão chama a função 'mudaCor()' que alterara a cor da variável */}
    </>
  )
}