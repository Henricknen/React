import React, {useState} from 'react'   // ultilizando 'useState'
 
export default function App() {

  const [log, setlog] = useState(false)

  const msglogin =()=> {    // 'arrow fuction' que retorna 'Usuario Logado'
    return 'Usuario Logado'
  }

  const msglogoff =()=> {     //'arrow fuction' que retorna 'Favor Logar'
    return 'Favor Logar'
  }

  const cumprimento =()=> {   // arrow function 'cumprimento'
    const hora = new Date().getHours()    // obtenção da hora atual
    if(hora >= 0 && hora < 13) {
      return <p>Bom Dia</p>
    } else if(hora >= 13 && hora < 18) {
      return <p>Boa Tarde</p>
    } else {
      return <p>Boa Noite</p>
    }
  }

  return(
    <>
       {cumprimento()}     {/* chamada da função 'cumprimento' */}
       <p>{log? msglogin() : msglogoff()}</p>    {/* verificando usuario esta logado */}
       <button onClick={()=>setlog(!log)}>{log? 'Logoff' : 'Login'}</button>    {/* botão chama o 'setlog' e passa o contrario de log com '!log'que realiza o 'login' ou o 'logoff' */}
    </>
  );
 }