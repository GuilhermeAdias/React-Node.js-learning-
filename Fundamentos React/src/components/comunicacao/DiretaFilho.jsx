import React from 'react'

export default props => {
    return (
        <div>
            <span><strong>{props.nome}, </strong> </span>
            <span>{props.idade }.</span>
            <span> {props.nerd ? 'É Nerd' : 'Não é Nerd'} !</span>
        </div>
    )
}
