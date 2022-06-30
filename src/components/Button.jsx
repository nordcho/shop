import React from 'react';
import buttonName from '../products/button-name';

function Button() {
    return (
            <button className='purchase_button'>{buttonName.name}</button>
    );
}

export default Button;