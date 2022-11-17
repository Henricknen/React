import React, {useState} from 'react'   // fazendo import do ''useState'

export default function App() {

  const [form, setForm] = useState({"nome":"", "graduacao":"", "ano":""})       // passando os objetos 'nome', 'grauacao' e 'ano', iniçializados  
  const handlFormChange=(e)=> {    // função manipuladora 'handl' com elemento 'e'
    if(e.target.getAttribute('name') == 'fnome' ) {
      setForm({"nome":e.target.value, "graduacao":form.graduacao, "ano":form.ano})
    } else if(e.target.getAttribute('name') == 'fgraduacao' ) {
      setForm({"nome":form.nome, "graduacao":e.target.value, "ano":form.ano})
  } else if(e.target.getAttribute('name') == 'fano' ) {
    setForm({"nome":form.nome, "graduacao":form.graduacao, "ano":e.target.value})
  }
}

  return (
    <>
      <label>Nome:</label> 
      <input type="text" name="fnome" value={form.nome} onChange={(e)=>handlFormChange(e)}/><br/>    
      <label>Graduação:</label> 
      <input type="text" name="fgraduacao" value={form.graduacao} onChange={(e)=>handlFormChange(e)}/><br/>
      <label>Ano:</label> 
      <input type="text" name="fano" value={form.ano} onChange={(e)=>handlFormChange(e)}/><br/>

      <p>Nome digitado: {form.nome}</p>   {/* pegando os valores dos 'state'*/}
      <p>Graduação digitada: {form.graduacao}</p>
      <p>Ano digitado: {form.ano}</p>
      
    </>
  );
}