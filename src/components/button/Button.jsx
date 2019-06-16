import React from 'react'

const isOperator = (val) =>{
    return !isNaN(val) || val ==='.' || val ==='=';
} 

const Button =(props) => {
    return(
        <div className={`my-button ${isOperator(props.children) ? null : 'sign'}`} onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}

export default Button;