import React from 'react'
 
export default function App() {

  const cumprimento =()=> {   // arrow function 'cumprimento'
    const hora = new Date().getHours()    // obtenção da hora atual
    if(hora >= 0 && hora < 13) {
      return <p>Bom Dia</p>
    } else if(hora >= 13 && hora < 18) {
      return <p>Boa Tarde</p>
    } else {
      return <p>Boa Noite</p>
    }
  }

  return(
    <>
       {cumprimento()}     {/* chamada da função 'cumprimento' */}
    </>
  );
 }