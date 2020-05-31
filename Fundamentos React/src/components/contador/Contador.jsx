import React, { Component } from 'react'
import './Contador.css'
import Dispaly from './Dispaly';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    };

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Dispaly numero={this.state.numero} setPasso={this.setPasso}></Dispaly>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}/>

                {/* <p>Valor Inicial: {this.props.numeroInicial}</p> */}
            </div>
        )
    }
}

export default Contador