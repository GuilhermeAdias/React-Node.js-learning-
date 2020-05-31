import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Daive" idade={20} nerd={true}/>
            <DiretaFilho nome="Alexandre" idade={17} nerd={false}/>
        </div>
    )
}
