import React, {useState, useEffect} from 'react'   // ultilizando dois hook
import Pagina1 from './componentes/Pagina1'   // fazendo impotação de 'Pagina1.js'
import Pagina2 from './componentes/Pagina2';     // fazendo impotação de 'Pagina2.js'

export default function App() {

  const [pagina, setPagina] = useState(0)    // 'state' pagina

  useEffect(
    ()=> {
      const url = window.location.href
      const res = url.split('?')
      setPagina(res[1])
    }
  )

  const LinksPaginas =(p)=> {     // função que acionará a mudança das páginas 'p' é um parâmetro de entrada
    if(p == 1) {
      window.open('http://localhost:3000?1', '_self')   // chamado a 'url' que será recarregada na mesma página
    } else if(p == 2) {
      window.open('http://localhost:3000?2', '_self')       // chamdo 'url' de parâmetro 2
    }
  }

  const retornaPagina =()=> {// está função vai retorna a página que será carregada
    if(pagina == 1) {     // mostrando o conteúdo da página retornada
      return <Pagina1/>
    } else if(pagina == 2) {     // se condição for satisfeita retorá o componente 'Pagina2'
      return <Pagina2/>
    } else {
      return  <div>
                <button onClick= {()=> LinksPaginas(1)}>Página 1</button>   {/* 'onClick' chamado função 'LinksPaginas' com o valor da 'Pagina1' */}
                <button onClick= {()=> LinksPaginas(2)}>Página 2</button>       {/* 'onClick' chamado função 'LinksPaginas' com o valor da 'Pagina2' */}
              </div>
    }
  }

  return(
    <>
      {retornaPagina()}    {/* pegando o resultado da função 'retornaPagina' */} 
    </>
  );
}