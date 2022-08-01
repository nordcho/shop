import React, {useState} from 'react';

const PurchaseCounter = () => {
    const [purchaseCount, setpurchaseCount] = useState(() => {
        return 1;
    })

    const plus = () => {
        let result = setpurchaseCount(parseInt(purchaseCount) + 1);
        return result;
    }

    const minus = () => {
        let result = setpurchaseCount(parseInt(purchaseCount) - 1);
        return result;
    }

    return (
        <div className='productCounter'>
            <button onClick={() => minus()}>
                <span>-</span>
            </button>
            <input id='counter' type='number' value={purchaseCount} onChange={(e) => setpurchaseCount(e.target.value)}/>
            <button onClick={() => plus()}>
                <span>+</span>
            </button>
        </div>
    );
};

export default PurchaseCounter;