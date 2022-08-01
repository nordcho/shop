import React, {useState} from 'react';

const PurchaseButton = (props) => {

    return (
            <button 
                className="productPurchaseButton" 
                onClick={props.AddPurchase}
                >

                    Купить   
            </button>
    );
};

export default PurchaseButton;