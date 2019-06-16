import React from 'react';

const Reset =(props) => {
    return(
        <div className='button-reset' onClick={props.handleClear}>
            {props.children}
        </div>
    )
}

export default Reset;