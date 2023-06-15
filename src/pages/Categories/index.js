import styles from './Categories.module.scss';
import Sidebar from '../../components/Layout/components/Sidebar';
import Proud from '../../components/Layout/components/Proud';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import useProducts from '../../context/useProducts';

function Categories() {
  const productsData = useProducts();
  const [, setCategoryProducts] = productsData.categoryProductsContext;
  const [products] = productsData.productsContext;
  const [, setUpdatedProducts] = productsData.updatedProductsContext;
  const [searchInput, setSearchInput] = useState('');

  const handleSearchBtn = () => {
    const res = products.filter((element) => {
      return element.title.toLowerCase().includes(searchInput.toLowerCase());
    });
    setUpdatedProducts(res);
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === '') {
      setUpdatedProducts(products);
    }
  };

  useEffect(() => {
    setCategoryProducts(true);
  }, []);

  return (
    <section className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>ALL</h3>
          <div className={styles.search}>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                spellCheck={false}
                placeholder="Search products"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <button onClick={handleSearchBtn} type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
        <Proud />
      </div>
    </section>
  );
}

export default Categories;
