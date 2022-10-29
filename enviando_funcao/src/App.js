import React from 'react'
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'

export default function App() {

  const proprietario = 'Luis Henrique Silva Ferreira'
  const cidade = 'Martinopolis'

  return(
    <>
      <Header/>   {/* componente */}
      <Corpo/>
      
    </>
  )
}