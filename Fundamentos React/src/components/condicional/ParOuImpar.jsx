import React from 'react'

export default props => {

    const getNumero = props.numero % 2 === 0

    return (
        <div>
            {getNumero ? <span>Par</span> : <span>Impar </span>}
        </div>
    )
}
