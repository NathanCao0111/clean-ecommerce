import { useState, useEffect } from 'react';
import ProductsContext from './Context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState(false);

  useEffect(() => {
    fetch('https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const value = {
    productsContext: [products, setProducts],
    categoryProductsContext: [categoryProducts, setCategoryProducts],
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export default Provider;
