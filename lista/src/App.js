import React from 'react'

export default function App() {

  const carros = [
    {categoria: "Esporte", preco: "10000.00", modelo: "Bmw 2345"},
    {categoria: "Esporte", preco: "12000.00", modelo: "Mercedes bens"},
    {categoria: "Ultilitario", preco: "9000.00", modelo: "Blazer"},
    {categoria: "Delaxe", preco: "75000.00", modelo: "Porche"},
    {categoria: "Esporte", preco: "15000.00", modelo: "Ferrari"}
  ];

  const listaCarros = carros.map(   // função 'map()' passa elemento por elemento para outra função
    (c, i)=>    // parametro 'c' equivale a 'carros' e o 'i' é o indice da lista
      <li key={i}>{i} - {c.categoria} {c.modelo} - R$: {c.preco}</li>    
  )

  return(
    <>
      <ul>{listaCarros}</ul>
    </>
  );
}