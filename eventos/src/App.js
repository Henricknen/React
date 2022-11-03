import React, {useState} from 'react'   // importando um holk 'useState'
import Led from './componentes/Led'       // importando o componente 'Led.js'
export default function App() {

  const [ligado, setLigado] = useState(false);    // criação do 'holk'

  return(
    <>
      <Led/>
    </>
  );
}