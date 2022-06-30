import React from 'react';
import productList from  '../products/product-list'

const ProductName = () => {
    return (
        <div className='name_of_product'>
            {productList.name}         
        </div>
    );
};

export default ProductName;