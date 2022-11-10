import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
let [lista, setLista] = useState(["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"]);    // 'useState' vai retorna o estado e a função de alteera o valor da lista de tarefas
let [novoItem, setNovoItem] = useState("") // outro 'estado'

return(
  <div>
    <input value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text"/>   
    <button onClick={() => adicionarNovoItem()}>Adicionar</button>
      <ul>
        {lista.map(item => <li>{item}</li>)}
      </ul>
  </div>
  );

  function adicionarNovoItem() {
    setLista([...lista, novoItem]);   // adiciona novo intem em baixo dos itens ja existentes
    setNovoItem("");    // zera o input depois de item adicionadao
  }
}

export default App;
