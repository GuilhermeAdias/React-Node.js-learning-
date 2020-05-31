import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default (props) => {

    function getProdutos() {
        return produtos.map((prod, i) => {
            return (
                <tr key={prod.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{prod.id}</td>
                    <td>{prod.nome}</td>
                    <td>R$ {prod.valor.toFixed(2)}</td>
                </tr>
            )
        })
    }

    return (
        <div className='TabelaProdutos'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>
                    {getProdutos()}
                </tbody>
            </table>
        </div>
    )
}
