import React, {useState} from 'react'   // fazendo import do ''useState'

export default function App() {

  const [nome, setNome] = useState('Digite seu nome')       // criação do 'state' com valor 'Digite seu nome' e função que vai manipula-lo chamada 'setNome'

  return (
    <>
      <label>Digite seu nome:</label> 
      <input
       type="text"
        name="fnome"
        value={nome}
        onChange={(e)=> setNome(e.target.value)}   // 'onChange' quando for alterado chamará a função de manipulação de 'state'
      />
      <p>Nome digitado: {nome}</p>    {/* pegando o valor do 'state {nome}' */}
    </>
  );
}


