import React from 'react';
import Button from './Button';
import Price from './Price';
import ProductName from './ProductName';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';

const Product = () => {
    return (
        <div className='product'>
            <ProductImage />
            <Price />
            <ProductName />
            <ProductDescription />
            <Button />  
        </div>
    );
};

export default Product;