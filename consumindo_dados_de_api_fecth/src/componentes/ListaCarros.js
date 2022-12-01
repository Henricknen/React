import React, {useState, useEffect} from "react"        // importando 'useState' e 'useEffect' que substituira a funções 'componentDidMount' e o 'state'
import axios from  'axios'      // importando 'axios'


export default function ListaCarros(){      // trasnformando a chamada em um componente 'funcional' com 'function'

    const [carros, setCarros] = useState([])
    
    useEffect(()=> {        // ultilizando hulk
        fetch('https://apireact.henricknen.repl.co')
            .then(res=> res.json())     // o retorno sreá em 'json'
            .then(
                (resultado)=> {
                    setCarros(resultado)    // 'setCarros' é o 'state' que faz a atualização    
                }
            )
        }
    )

       
    return(
        <div>
            {carros.map(       
                carro=> <div key = {carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
            )}     
        </div>
    )
    
}

