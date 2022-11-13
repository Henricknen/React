import React, {useState} from 'react'

export default function App() {
  
  const[valorTela, setValorTela] = useState('')
  const[resultado, setResultado] = useState(0)
  const[acumulador, setAcumulador] = useState(0)
  const[operado, setOperado] = useState(false)

  const Tela =(valor, res)=> {
    return(
      <div style = "cssTela">
        <span style={cssTelaOper}>{valor}</span>
        <span style={cssTelaRes}>{res}</span>
      </div>
    )
  }

  // Funções
  const addDigitoTela=(d)=> {
    if((d == '+' || d == '-' || d == '*' ||d == '/') && operado) {
      console.log("+-*/")
      setOperado(false)
      setValorTela(resultado + d)
      return
    }

    if(operado) {
      setValorTela(d),
      setOperado(false)
      return
    }

    const valorDigitadoTela = valorTela + d
    setValorTela(valorDigitadoTela)
  }

  const imparMemoria=()=> {
    setOperado(false),
    setValorTela(''),
    setResultado(0),
    setAcumulador(0)
    return
  }

  // Estilo
  const cssTela = {
    displa: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#444',
    flexDirection: 'column',
    window: 260
  }

  const Btn = (label, onClick) => {
    return(
      <button style={cssBtn} onClick={onClick}>{label}</button>
    )
  }

  const cssTelaOper = {
    FontSize: 25,
    color: '#fff',
    height: 20
  }

  const cssTelaRes = {
    FontSize: 50,
    color: '#fff',
    height: 20
  }

  const cssBtn = {
    fontSize: 30,
    height: 75,
    with: 75,
    padding: 20,
    backgroundColor: '#000',
    color: '3fff',
    boderColor: '#000',
    textAlign: 'center',
    outLine: 'none'
  }


  return(
    <>
    
    </>
  );
}