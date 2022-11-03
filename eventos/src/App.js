import React, {useState} from 'react'   // importando um holk 'useState'
import Led from './componentes/Led'       // importando o componente 'Led.js'
export default function App() {

  const [ligado, setLigado] = useState(false);    // criação do 'holk'

  const cancelar =(obj)=>{
    return obj.preventDefault()
  }

  return(
    <>
      <Led ligado= {ligado} setLigado = {setLigado}/>
      <a href='https://github.com/Henricknen/React'
      target='blank'
      onClick={(e)=>cancelar(e)}    // chamando a unção 'cncelar()'
      >
        Repositorio de REACT
      </a>
    </>
  );
}