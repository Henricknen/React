import React, {useState} from 'react'
import Numero from './componentes/Numero'   // importando o componente 'Numero'
import './App.css'

export default function App() {
  
  const [num, setNum] = useState(10)    // 'state' num

  return(
    <>
      <p>Valor do 'state' num em App: {num}</p>    
      <Numero num = {num} setNum = {setNum}/>    {/*ultilizando o componente 'Numero' com atributo 'num' com o valor do state 'num' */}
    </>
  )
}