import React, {useState} from 'react'   // fazendo import do ''useState'

export default function App() {

  const [nome, setNome] = useState('')       // criação do 'state' com função que vai manipula-lo chamada 'setNome'
  const hanleChangNome =(e)=> {    // 'hanle' seria um manipulador que irá manipualar o changeNome com componente que manipulado 'e'
    setNome(e.target.value)
  }

  return (
    <>
      <label>Digite seu nome:</label> 
      <input
       type="text"
        name="fnome"
        value={nome}
        onChange={(e)=> hanleChangNome(e)}   // 'onChange' ultilizando a função 'hanleChangNome'
      />
      <p>Nome digitado: {nome}</p>    {/* pegando o valor do 'state {nome}' */}
    </>
  );
}


