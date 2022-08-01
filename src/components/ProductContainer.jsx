import React, {useState} from 'react';

const ProductContainer = (props) => {

    const [viewType, setViewType] = useState(() => {
        return 'productList'
    })

    return (
    <div className='productContainer'>
        <div className='productTypeButton'>
            <button onClick={() => {setViewType('productList')}}>Карточки</button>
            <button onClick={() => {setViewType('productListRow')}}>Список</button>
        </div>
        <div className={viewType}>
            {props.children}
        </div>
    </div>
    );
};

export default ProductContainer;