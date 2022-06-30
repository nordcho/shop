import React from 'react';
import productList from  '../products/product-list'

const Price = () => {
    return (
        <div className='price'>
            {productList.prise}
        </div>
    );
};

export default Price;