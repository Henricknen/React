import React, {useState} from 'react'   // importando um holk 'useState'
import LedVerde from './imgs/Led_Verde.png'
import LedVermelho from './imgs/Led_Vermelho.png'

export default function Led() {

  const [ligado, setLigado] = useState(false);    // criação do 'holk'

  return(
    <>
    <img style={{width: '100px'}} src = {ligado ?LedVerde : LedVermelho}/><br/>
    <button onClick={()=>setLigado(!ligado)}>{ligado ?"Desigar" : "Ligar"}</button>
    </>
  );
}