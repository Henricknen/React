import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
let arrayDaLista = useState(["Tarefa 1", "Tarefa 2"]);    // 'useState' vai retorna o estado e a função de alteera o valor da lista de tarefas
let lista = arrayDaLista[0]
console.log(lista);   // lista que está dentro do estado
let funcaoAlterarLista = arrayDaLista[1];


  return (
    <button onClick={() => {
      funcaoAlterarLista (["Tarefa 3", "Tarefa 4"]);
      // console.log(lista);
    }}></button>
    
    // <ul>
    //   <li>Tarefa 1</li>
    //   <li>Tarefa 2</li>
    //   <li>Tarefa 3</li>
    //   <li>Tarefa 4</li>
    // </ul>
  );
}

export default App;
