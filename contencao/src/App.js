import React from "react";
import Caixa from './componentes/Caixa'   // importando o componente 'Caixa'
import Nome from "./componentes/Nome";

export default function App() {
  return(
    <>
      <Caixa github = "https://github.com/Henricknen">   {/* ultilizando componente 'Caixa' */}
        <Nome/>
        <h1>Codificando React</h1>    {/* passando 'h1' para dentro de 'Caixa' */}
      </Caixa>    
    </>
  );
}