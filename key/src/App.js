import React from "react";

function ListaNumeros(props) {
  const num = props.numeros   // 'const num' está recebendo a lista de 'numeros'
  const lista_numeros = num.map(      // lista de numeros ultilizando 'map' para operar todos os numeros desta lista
    (n)=><li key = {n.toString()}>{n}</li>    // ultilizando atributo 'key' dentro da lista e ultilizando 'toString' para converter 'n' em string 
  )
  return (<ul>{lista_numeros}</ul>)
}

const array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]     // lista de numeros

export default function App() {
  return(
    <>
      <ListaNumeros numeros = {array_numeros}/>   {/* ultilizando função 'ListaNumeros' com propriedade 'numeros' com o 'array_numeros' */}
    </>
  );
}