import React, {useState} from 'react'
import Globais from './componentes/Globais';        // importando componente 'Globais.js'
import Info from './componentes/Info';

export default function App() {

    const [resumo, setResumo] = useState(Globais.resumo)         // 'state' que mudará o valor em telas

    const gravarResumo =()=> {      // função que gravará o valor do 'resumo'
        Globais.resumo = resumo;
    }

    const verResumo =()=> {     // função que mostrará o valo que está em resumo
        alert(Globais.resumo)
    }
    
    return(
        <>
            <Info/>     {/* primeiro esta chamando o componente 'Info' */}
            <br/>
            <p>{'Nome: ' + Globais.nome}</p>     {/* ultilizando as variaveis */}
            <p>{'Repositorio: ' + Globais.repositorio}</p>
            <p>{'Ano: ' + Globais.ano}</p>
            <hr/>
            <input type = "text" size= '100' value = {resumo} onChange = {(e)=> setResumo(e.target.value)}/>
            <br/>
            <button onClick={()=>gravarResumo()}>Gravar Resumo</button>
            <button onClick={()=>verResumo()}>Ver Resumo</button>
            
        </>
    );
}