import React from "react"
import axios from  'axios'      // importando 'axios'


export default class ListaCarros extends React.Component {

    state = {
        carros : []
    }

    componentDidMount() {       // este componente busca da 'api'
        axios.get('https://apireact.henricknen.repl.co')        // 'axios' é quem realmente faz a busca o gerenciamento
            .then(res => {
                const dadosCarros =  res.data
                this.setState({carros: dadosCarros})     // 'state' receberá 'dadosCarros'
            })
    }

    render() {
        return(
            <div>
                {this.state.carros.map(       
                    carro=> <div key = {carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
                )}     
            </div>
        )
    }
}
