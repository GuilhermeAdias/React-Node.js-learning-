import React, { cloneElement } from 'react'
//import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            {props.children.map((child, i )=> {
                return cloneElement(child, { ...props, key: i });
            })}
            {/* {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props);
                })
            } */}
            {/* {cloneElement(props.children, {...props})} */}

            {/* <FamiliaMembro nome='Pedro' sobrenome={props.sobrenome}/>
            <FamiliaMembro nome='Ana' {...props}/> { ==>spred<== }
            <FamiliaMembro nome='Alberto' sobrenome='Silva'/> */}
        </div>
    )
}
