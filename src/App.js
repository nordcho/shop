import React, {useState} from 'react';
import './App.css';
import ProductCard from './components/ProductCard';
import ProductContainer from './components/ProductContainer';
import productList from './products/ProductInfo';
import NightModeSwitcher from './components/NightModeSwitcher';

function App() {
  const [nightState, setnightState] = useState(() => {
    return 'whiteTheme';
})

const handleChange = event => {
  if (event.target.checked) {
    setnightState('nightTheme');
  } else {
    setnightState('whiteTheme');
  }
};

  return (
    <div className={nightState}>
      <NightModeSwitcher setTheme = {handleChange}/>
      <ProductContainer>
          {
            productList.map(productList => {
              return <ProductCard 
                      name={productList.name} 
                      image={productList.image} 
                      price={productList.price} 
                      description={productList.description} 
                      type='productCard'/>
            })
          }
      </ProductContainer>
    </div>
  );
}

export default App;
