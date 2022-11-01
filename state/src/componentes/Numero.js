import React from 'react'

export default function Numero(props) {
    return(
        <p>
            <p>Valor do 'state' num em Numero: {props.num}</p>
            <button onClick ={()=>props.setNum(props.num + 10)}>Soma 10</button>    {/* quando o botão for clicado o 'state' será laterado e somará o valor 10 com o 'state' num */}
        </p>
    )
}