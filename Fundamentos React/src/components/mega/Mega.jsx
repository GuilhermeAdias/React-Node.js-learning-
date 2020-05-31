import React, { useState } from 'react'
import './Mega.css'

export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                //console.log([ ...nums, novoNumero ])
                return [...nums, novoNumero] //operador spread
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numeros
    }
    const [qtde, setQuantidade] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div className='GerarNumero'>
                <label>Quantidade de números: </label>
                <input
                    min='4'
                    max='14'
                    type='number'
                    value={qtde}
                    onChange={e => {
                        setQuantidade(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                    }}
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}