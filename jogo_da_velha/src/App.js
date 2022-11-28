import React, {useState} from 'react'   // importando 'state'

export default function App() {

  // estilos
  const tabu = {
    display: 'flex',
    flexDirection: 'column'
  }

  const tabuLinha = {
    display: 'flex',
    flexDirection: 'row'
  }

  const casa = {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    fontSize: 60,
    border: '1px solid #000'
  }

  const jogoInicial = [['', '', ''], ['', '', ''], ['', '', '']]   // constante 'jogoInicial' com arrays que indica as colunas do 'jogo  da velha'
  const [jogo, setJogo] = useState([['', '', ''], ['', '', ''], ['', '', '']])   // 'state' jogo onde as jogadas vão ser guardadas aqui ou seja onde o jogo vai acontecer
  const [simboloAtual, setSimboloAtual] =  useState('X')    // 'state' que controla os simbos 'X' ou 'O' que iniciará com 'X'
  const [jogando,setJogando] = useState(true)      // 'state' indica se o jogo está rolando ou não

  const tabuleiro =(j)=> {     // função que retornará o tabuleiro ja preenchido
    return(
      <div style={tabu}>
        <div style={tabuLinha}>   {/* 'div' com tres linhas e tres colunas */
          <div stye={casa} data-pos = '00' onClick= "">{j[0][0]}</div>// casa prenchida com o simbolo dessa posição
          <div stye={casa} data-pos = '01' onClick= "">{j[0][1]}</div>   // linha '0' e coluna '1'
          <div stye={casa} data-pos = '02' onClick= "">{j[0][2]}</div>       // linha '0' e coluna '2'
        </div>
        <div style={tabuLinha}>   {/* 'div' com tres linhas e tres colunas */
          <div stye={casa} data-pos = '10' onClick= "">{j[1][0]}</div>// casa prenchida com o simbolo dessa posição
          <div stye={casa} data-pos = '11' onClick= "">{j[1][1]}</div>   // linha '1' e coluna '1'
          <div stye={casa} data-pos = '12' onClick= "">{j[1][2]}</div>       // linha '1' e coluna '2'
        </div>
        <div style={tabuLinha}>   {/* 'div' com tres linhas e tres colunas */
          <div stye={casa} data-pos = '20' onClick= "">{j[2][0]}</div>// casa prenchida com o simbolo dessa posição
          <div stye={casa} data-pos = '21' onClick= "">{j[2][1]}</div>   // linha '2' e coluna '1'
          <div stye={casa} data-pos = '22' onClick= "">{j[2][2]}</div>       // linha '2' e coluna '2'
        </div>
      </div>
    )
  }

  return(
    <>

    </>
  );
}