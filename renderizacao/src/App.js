import React from 'react'
import RelogioData from './componentes/RelogioData'
import './App.css'

export default function App() {

  const textoDestaque = {   // constante com formatação espeçifica
    color: 'blue',
    fontSize: '2em'
  }

  return(
    <>
    <section className='caixa'>
        <RelogioData/>
        <h1 style={{color: 'red', fontSize: '3em'}}>Análise e desenvolvimento de sistemas</h1>   {/* 'css' inline */}
        <h2 style={textoDestaque}>Técnico de informatica para internet</h2>   {/* ultilizando 'constate' para formatação */}
        <h3 className='texto3'>Técnico de Eletroeletrônica</h3>
        <h4 className='texto4'>Lógica de programação</h4>
        <h5 className='texto5'>Front end</h5>
      </section>
    </>
  )
}