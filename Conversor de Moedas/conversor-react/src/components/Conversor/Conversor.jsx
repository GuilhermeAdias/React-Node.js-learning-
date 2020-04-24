import React, { Component } from 'react'
import './Conversor.css'

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: 0,
            moedaB_valor: 0,
        }
        this.converter = this.converter.bind(this);
    }

    converter() {

        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `http://free.currencyconverterapi.com/api/v5/convert?q=${de_para}&compact=y&apiKey=45428e33589a0e957bb8`;

        fetch(url).then(res => {
            return res.json()
        })
            .then(json => {
                let cotacao = json[de_para].val;
                let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao)).toFixed(2)
                this.setState({ moedaB_valor })
            })
    }

    render() {
        return (
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <div className="conversao">
                <input type="text" onChange={(e) => { this.setState({ moedaA_valor: e.target.value }) }} />
                <button type="button" value="Converter" onClick={this.converter}>converter</button>
                </div> 
                <p>Resultado: {this.state.moedaB_valor}</p>
            </div>
        )
    }
}
