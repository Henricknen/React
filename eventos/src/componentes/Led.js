import React, {useState} from 'react'   // importando um holk 'useState'
import LedVerde from './imgs/Led_Verde.png'
import LedVermelho from './imgs/Led_Vermelho.png'

export default function Led(props) {        // 'props' indica que estou recebendo propriedades
  return(
    <>
    <img style={{width: '100px'}} src = {props.ligado ?LedVerde : LedVermelho}/><br/>
    <button onClick={()=>props.setLigado(!props.ligado)}>
        {props.ligado ?"Desigar" : "Ligar"}
      </button>
    </>
  );
}