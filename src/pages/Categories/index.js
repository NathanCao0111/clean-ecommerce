import styles from './Categories.module.scss';
import Sidebar from '../../components/Layout/components/Sidebar';
import Proud from '../../components/Layout/components/Proud';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import useProducts from '../../context/useProducts';

function Categories() {
  const productsData = useProducts();
  const [, setCategoryProducts] = productsData.categoryProductsContext;
  const [searchInput, setSearchInput] = productsData.searchInputContext;

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
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
              <button disabled type="submit">
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
