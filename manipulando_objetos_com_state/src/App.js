import React, {useState} from 'react'   // fazendo import do ''useState'

export default function App() {

  const [form, setForm] = useState({"nome":"Luis henrique s f", "graduacao":"Analise e desenvolvimento de sistemaas", "ano":"2023"})       // passando os objetos 'nome', 'grauacao' e 'ano', iniçializados  

  return (
    <>
      <label>Nome:</label> 
      <input type="text" name="fnome" value={form.nome} onChange=""/><br/>    
      <label>Graduação:</label> 
      <input type="text" name="fgraduacao" value={form.graduacao} onChange=""/><br/>
      <label>Ano:</label> 
      <input type="text" name="fano" value={form.ano} onChange=""/><br/>

      <p>Nome digitado: {form.nome}</p>   {/* pegando os valores dos 'state'*/}
      <p>Graduação digitada: {form.graduacao}</p>
      <p>Ano digitado: {form.ano}</p>
      
    </>
  );
}



