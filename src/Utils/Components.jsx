import React from 'react';

const Button = ({type, text}) => {
    return (
        <button className='btns'>
            {text}
        </button>
    );
}

export {Button};