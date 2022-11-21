import React, {useState} from 'react'
import Nota from './componentes/Nota'
import Resultado from './componentes/Resultado'

export default function App() {

  const [notas, setNotas] = useState({"nota1":"0", "nota2":"0", "nota3":"0", "nota4":"0"})
  const handleSetNotas=(e)=> {
    if(e.target.getAttribute('name') == 'nota1') {
      setNotas({"nota1": e.target.value, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": notas.nota4})
    } else if(e.target.getAttribute('name') == 'nota2') {
      setNotas({"nota1": notas.nota1, "nota2": e.target.value, "nota3": notas.nota3, "nota4": notas.nota4})
    } else if(e.target.getAttribute('name') == 'nota3') {
      setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": e.target.value, "nota4": notas.nota4})
    } else if(e.target.getAttribute('name') == 'nota4') {
      setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": e.target.value})
    }
  }

  return (
    <>
      <Nota num = {1} nome={'nota1'} nota = {notas.nota1} setNota = {handleSetNotas}/>
      <Nota num = {2} nome={'nota2'} nota = {notas.nota1} setNota = {handleSetNotas}/>
      <Nota num = {3} nome={'nota3'} nota = {notas.nota1} setNota = {handleSetNotas}/>
      <Nota num = {4} nome={'nota4'} nota = {notas.nota1} setNota = {handleSetNotas}/>
      <Resultado somaNotas = {parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)}/>
    </>
  );
}