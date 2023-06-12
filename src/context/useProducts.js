import { useContext } from 'react';
import ProductsContext from './Context';

function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}

export default useProducts;
