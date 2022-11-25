import React, {useState} from 'react'   // imoprtando 'useState'

export default function App() {

  const [nome, setNome] = useState()    // criação de 'state' chamado nome vazio

  const armazenar =(chave, valor)=> {       // arrow function 'armazenar'
    localStorage.setItem(chave, valor)
  }

  const consutar =(chave)=> {   // arrow function 'consultará' uma chave
    alert(localStorage.getItem(chave))
  }

  const apagar =(chave)=> {   // arrow function 'apagará' uma chave
    localStorage.removeItem(chave)
  }

  return(
    <>
      <label>Digite seu Nome:</label><br/>
      <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/><br/>    {/* 'input text' associado com oa state nome por meio do 'value={nome}' */}
      <button onClick={()=>armazenar('ls_nome', nome)}>Gravar nome</button>    {/* botão cham a função armazenar */}
      <button onClick={()=>consutar('ls_nome')}>Consutar nome</button>    {/* botão consultar recebe o parametrô ls_nome' que é a chave */}
      <button onClick={()=>apagar('ls_nome')}>Remover nome</button>
       
    </>
  );
}