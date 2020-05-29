import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {

    const [nome, setNome] = useState('?')

    const [idade, setIdade] = useState(0)

    const [nerd, setNerd] = useState(false)

    function fornecerInformações(no, ida, nd) {
        setNome(no)
        setIdade(ida)
        setNerd(nd)
    }
    return (
        <div>
            <span><strong>{nome}, </strong></span>
            <span>{idade}. </span>
            <span>{nerd ? 'É Nerd' : 'Não é Nerd'} !</span>
            <IndiretaFilho quandoClicar={fornecerInformações} />
        </div>
    )
}
