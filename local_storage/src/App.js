import React from 'react'

export default function App() {

  localStorage.setItem("nome", "LuisHenriqueSF")   //'localStorage' vai cria a chave chamada 'nome' com valor 'LuisHenriqueSF'
  localStorage.getItem("nome")    // recuperando a chave
  localStorage.removeItem("nome")   // removendo chave

  return(
    <>
       
    </>
  );
}