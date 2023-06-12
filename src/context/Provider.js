import { useState, useEffect } from 'react';
import ProductsContext from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return <ProductsContext.Provider value={[products, setProducts]}>{children}</ProductsContext.Provider>;
}

export default Provider;
