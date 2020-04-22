import React, { Component } from 'react';
import './App.css';
import Conversor from './components/Conversor/Conversor'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="coversor">
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
        </div>
        <div className="coversor">
          <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
        </div>
        <div className="coversor">
          <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
        </div>
        <div className="coversor">
          <Conversor moedaA="USD" moedaB="EUR"></Conversor>
          <Conversor moedaA="EUR" moedaB="USD"></Conversor>
        </div>
        <div className="coversor">
          <Conversor moedaA="USD" moedaB="CAD"></Conversor>
          <Conversor moedaA="CAD" moedaB="USD"></Conversor>
        </div>
        <div className="coversor">
          <Conversor moedaA="CAD" moedaB="EUR"></Conversor>
          <Conversor moedaA="EUR" moedaB="CAD"></Conversor>
        </div>
      </div>
    );
  }
}

export default App;
