import React from 'react'       // importa a biblioteca 'react'
import Fatec from './componentes/img/fatec.jfif'
import Ads from './componentes/img/ads.jfif'    // caminho da imagem

export default function() {     // fazendo a exportação para 'index.js'

  const nome = 'Luis henrique silva fereira'                                // constante
  const formacao = 'Análise e desenvolvimento de sistemas'       // constante

  const exibir=()=> {     // arrow function
    return ('Olá Mundo')
  }

  return(
    <section>
      <header>
      <p>Me chamo:  {nome}</p>
      <p>{'Formado em: ' + formacao}</p>
      <p>{'Mensagem: ' + exibir()}</p>
      </header>
      <section>
      <img src={Fatec}/> 
      <img src={Ads}/>  

      <img src='/img/adsss.jfif'/>
      </section>
    </section>
  )
}

