import React from 'react';

class Contador extends React.Component{
    constructor(props){
        super(props);
        this.state = {segundos:0}
    }
    render(){
        return(
            <div><p>Segundos: {this.state.segundos}</p></div>
        );
    }
    tick(){
        this.setState({segundos: this.state.segundos +1});
    }
    componentDidMount(){
        this.interval = setInterval (()=>this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
}

export default Contador;