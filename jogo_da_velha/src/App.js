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
        <div style={tabuLinha}>   
          <div style={casa} data-pos = '00' onClick= {(e)=> jogar(e)}>{j[0][0]}</div>{/* casa prenchida com o simbolo dessa posição */}
          <div style={casa} data-pos = '01' onClick= {(e)=> jogar(e)}>{j[0][1]}</div>   {/* linha '0' e coluna '1' */}
          <div style={casa} data-pos = '02' onClick= {(e)=> jogar(e)}>{j[0][2]}</div>       {/* linha '0' e coluna '2' */}
        </div>
        <div style={tabuLinha}>   
          <div style={casa} data-pos = '10' onClick= {(e)=> jogar(e)}>{j[1][0]}</div>   {/* casa prenchida com o simbolo dessa posição */}
          <div style={casa} data-pos = '11' onClick= {(e)=> jogar(e)}>{j[1][1]}</div>     {/* linha '1' e coluna '1' */}
          <div style={casa} data-pos = '12' onClick= {(e)=> jogar(e)}>{j[1][2]}</div>         {/* linha '1' e coluna '2' */}
        </div>
        <div style={tabuLinha}>   
          <div style={casa} data-pos = '20' onClick= {(e)=> jogar(e)}>{j[2][0]}</div> {/* casa prenchida com o simbolo dessa posição */}
          <div style={casa} data-pos = '21' onClick= {(e)=> jogar(e)}>{j[2][1]}</div>   {/* linha '2' e coluna '1' */}
          <div style={casa} data-pos = '22' onClick= {(e)=> jogar(e)}>{j[2][2]}</div>       {/* linha '2' e coluna '2' */}
        </div>
      </div>
    )
  }

  const BtnJogarNovmente =()=> {
    if(!jogando) {
      return <button onClick={()=>reiniciar()}>Jogar Novamente</button>
    }
  }

  const verificaVitoria =()=> {   // função que vai percorre e verificar as linhas
    let pontos = 0
    let vitoria = false
    for(let l = 0; l < 3; l++) {
      pontos = 0;
      for(let c = 0; c < 3; c++) {    // para cada verificação de linha existe um 'for' que percorre as colunas
        if(jogo[l][c] == simboloAtual) {    // se o 'state' jogo posição linha e couna for igual ao 'simboloAtual' se tem uma vitória 
          pontos++      
        }
      }
      if(pontos >= 3) {
        vitoria = true
        break
      }
    }

    for(let c = 0; c < 3; c++) {    // função que vai percorre e verificar as colunas  
      pontos = 0
      for(let l = 0; l <= 3; l++) {
        if(jogo[l][c] == simboloAtual) {    // se o 'state' jogo posição linha e couna for igual ao 'simboloAtual' se tem uma vitória 
          pontos++
        }
      }
      if(pontos >= 3) {
        vitoria = true
        break
      }
    }

    pontos = 0
    for(let d = 0; d < 3; d++) {    // função que vai percorre e verificar as diagonais
      if(jogo[d][d]) {
        if(jogo[l][c] == simboloAtual) {    // se o 'state' jogo posição linha e couna for igual ao 'simboloAtual' se tem uma vitória 
          pontos++
        }
      }
    }
    if(pontos >= 3) {
      vitoria = true
    }
    pontos = 0    // verificando a outra diagonal
    let l = 0
    for(let c = 2; c >= 0; c--) {
      if(jogo[l][c] == simboloAtual) {    
        pontos++
      }
      l++
    }
    if(pontos >= 3) {
      vitoria = true
    }
    return vitoria
  }

  const trocaJogador =()=> {
    setSimboloAtual == 'X'? setSimboloAtual('O'): setSimboloAtual('X')
  }

  const retPos =(e)=> {
    const p = e.target.getAttribute('data-pos')
    const pos = [parseInt(p.substring(0, 1)), parseInt(p.substring(1, 2))]
    return pos
  }

  const verificaEspacoVazio =(e)=> {
    if(jogo[retPos(e)[0]][retPos(e)[1]] == '') {
      return true
    } else {
      return false
    }
  }

  const jogar =(e)=> {
    if(jogando) {   // se jogo está rolando
      if(verificaEspacoVazio(e)) {
        jogo[retPos(e)[0]][retPos(e)[1]] = simboloAtual
        trocaJogador()
        if(verificaVitoria()) {
          trocaJogador()
          alert('Jogador' + simboloAtual + 'venceu')
          setJogando(false)
        }
      } else {
          alert('Este espaço não está disponivel, escolha outo')
      }
    }
  }

 const reiniciar =()=> {
  setJogando(true)
  setJogo(jogoInicial)
  setSimboloAtual('X')
 }



  return(
    <>
    <div>
      <p>Quem joga: {simboloAtual}</p>
    </div>
    <div>
      {tabuleiro(jogo)}
    </div>
    <div>
      {BtnJogarNovmente()}
    </div>
    </>
  );
}