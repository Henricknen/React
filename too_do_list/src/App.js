import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
let [lista, setLista] = useState(["Tarefa 1", "Tarefa 2", "Tarefa 3", "Tarefa 4"]);    // 'useState' vai retorna o estado e a função de alteera o valor da lista de tarefas
let [novoItem, setNovoItem] = useState("") // outro 'estado'

useEffect(() => {   // 'hook' com uma função com array de dependeçia vazio que ira executa a função apenas uma vez
  setLista(["Tarefa1", "Tarefa2", "Tarefa3", "Tarefa4", "Tarefa5", ])
}, []);   // '[]' array de dependeçia vazio

return(
  <div className='container'>
    <input placeholder='Tarefas' value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text"/>   
    <button onClick={() => adicionarNovoItem()}>Adicionar</button>
      <ul className='todo-list'>
        {lista.map((item,index) => (
        <li key = {index} className='todo-item'>
          {item}
          <button onClick={() => deletarItem(index)}>
            Deletar
            </button>
          </li>
          ))}
      </ul>
  </div>
  );

  function adicionarNovoItem() {
    if(novoItem.length <= 0) {
      alert("Digite alguma tarefa...");
      return;
    }

    let itemIndex = lista.indexOf(novoItem);
    if(itemIndex >= 0) {
      alert("Esta tarefa ja está adicionada");
      return;
    }

    setLista([...lista, novoItem]);   // adiciona novo intem em baixo dos itens ja existentes
    setNovoItem("");    // zera o input depois de item adicionadao
  }

  function deletarItem(index) {
    let tmpArray = [...lista];
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  }
}

export default App;
