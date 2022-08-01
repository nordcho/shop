import React, {useState} from 'react';
import PurchaseButton from './PurchaseButton';
import PurchaseCounter from './PurchaseCounter';

const ProductCard = ({name, price, image, description, type}) => {

    const [purchaseState, setPurchaseState] = useState(() => {
        return 'button'
    })

    return (
        <div className={type}>
            <div className="productImage">
                <img src={image} alt={name}></img>
            </div>
            <div className="productPrice" onClick={() => {setPurchaseState('button')}}>
                    <span>{price}</span>
            </div>
            <div className="productName">
                <span>{name}</span>
            </div>
            <div className="productDescription">
                {description.map(element => {
                    return (
                        <span>{element}</span>
                    )
                }
                    )}
            </div>
            <> {purchaseState === 'button' 
                   ? <PurchaseButton AddPurchase = {() => {setPurchaseState('counter')}}/>
                   : <PurchaseCounter />
                }
            </>
        </div>
        
    );
};

export default ProductCard;