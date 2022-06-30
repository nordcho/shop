import React from 'react';
import productList from '../products/product-list';

const ProductDescription = () => {
    return (
        <div className='product_description'>
            <div>Цвет товара: {productList.productDescription.color}</div>
            <div>Экран: {productList.productDescription.screen}</div>
            <div>Встроенная память: {productList.productDescription.rom}</div>
            <div>Оперативная память: {productList.productDescription.ram}</div>
        </div>
    );
};

export default ProductDescription;