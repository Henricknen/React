import React, {useState} from 'react'   // fazendo import do ''useState'

export default function App() {

  const [nome, setNome] = useState('')       // criação do 'state' com função que vai manipula-lo chamada 'setNome'
  const [carro, setCarro] = useState('HRV')   // o 'state' ja vai iniciar com um carro selecionado 'HRV'
  // const hanleChangNome =(e)=> {    // 'hanle' seria um manipulador que irá manipualar o changeNome com componente que manipulado 'e'
    // setNome(e.target.value)
  

  return (
    <>
      <label>Digite seu nome:</label> 
      <input type="text" name="fnome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
      <p>Nome digitado: {nome}</p>    {/* pegando o valor do 'state {nome}' */}
      <label>Seleçione um carro</label>
      <select value={carro} onChange={(e)=> setCarro (e.target.value)}>   {/* ultiizando 'select' com 'value' do estate 'carro' */} 
        <option value= "HRV">HRV</option>
        <option value= "Golf">Golf</option>
        <option value= "Cruze">Cruze</option>
        <option value= "Civic">Civic</option>
        <option value= "Argo">Argo</option>
      </select>
      <p>carro seleçionado: {carro}</p>
    </>
  );
}



