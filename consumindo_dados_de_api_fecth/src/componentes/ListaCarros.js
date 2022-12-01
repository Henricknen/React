import React, {useState, useEffect} from "react"        // importando 'useState' e 'useEffect' que substituira a funções 'componentDidMount' e o 'state'
import axios from  'axios'      // importando 'axios'


export default function ListaCarros(){      // trasnformando a chamada em um componente 'funcional' com 'function'

    const [carros, setCarros] = useState([])
    
    useEffect(()=> {        // ultilizando hulk
        axios.get('https://apireact.henricknen.repl.co')        // 'axios' é quem realmente faz a busca o gerenciamento
            .then(res => {                                                 // função anonima
                const dadosCarros =  res.data
                this.setCarros({dadosCarros})       // não precisa indicar o 'state' apenas o valor 'dadosCarros'
            // this.setState({carros: dadosCarros})     // 'state' receberá 'dadosCarros'
            })
        }
    )

    // componentDidMount() {       // este componente busca da 'api'

    // }


    return(
        <div>
            {carros.map(       
                carro=> <div key = {carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
            )}     
        </div>
    )
    
 }

