import React, {useEffect, useState} from 'react'        // importando 'useEffect' e 'useState'


export default function App() {

    const [contagem, setContagem] = useState(0)

    useEffect(              // 'useEffect' é chamado toda vez que a página for atualizada
        ()=> {
            console.log("Página carregada")
            document.title = 'Contagem: ' + contagem
        }
    )

    return(
        <>
            <p>Contagem: {contagem}</p>     {/* texo com um a expressão '{contagem}' */} 
            <button onClick={()=>setContagem(contagem+1)}>Contar</button>       {/* botão com o valor de 'contagem + 1' */}
        </>
    );
}
