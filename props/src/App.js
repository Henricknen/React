import React from 'react'
import Dados from './componentes/Dados'

export default function App() {

  const prop = 'Luis Henrique Silva Ferreira'
  const cid = 'Martinopolis'

  return(
    <>
      <Dados 
      proprietario = {prop}
      cidade = {cid} 
      biblioteca='React' 
      data_codificacao='28/10/2022'
    />
    </>
  )
}