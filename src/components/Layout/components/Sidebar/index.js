import styles from './Sidebar.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useProducts from '../../../../context/useProducts';
import { useEffect } from 'react';

function Sidebar() {
  const productsData = useProducts();
  const [products] = productsData.productsContext;
  const [checkboxCategories, setCheckboxCategories] = productsData.checkboxCategoriesContext;
  const [fromRange, setFromRange] = productsData.fromRangeContext;
  const [toRange, setToRange] = productsData.toRangeContext;
  const [, setUpdatedProducts] = productsData.updatedProductsContext;
  const [sortPrice, setSortPrice] = productsData.sortPriceContext;
  const [searchInput] = productsData.searchInputContext;

  const categories = [
    { id: 1, type: 'Furnitures' },
    { id: 2, type: 'Electronics' },
    { id: 3, type: 'Lamps' },
    { id: 4, type: 'Kitchen' },
    { id: 5, type: 'Chairs' },
    { id: 6, type: 'Skincare' },
  ];

  const handleCheckboxChange = (e) => {
    const idCheckbox = Number(e.target.value);

    if (checkboxCategories.includes(idCheckbox)) {
      setCheckboxCategories(checkboxCategories.filter((id) => id !== idCheckbox));
    } else {
      setCheckboxCategories((prev) => [...prev, idCheckbox]);
    }
  };

  const handleSortPrice = (e) => {
    setSortPrice(e.target.value);
  };

  const handleResetBtn = () => {
    setCheckboxCategories([]);
    setFromRange('');
    setToRange('');
    setSortPrice('');
  };

  useEffect(() => {
    const filteredData = products.filter((element) => {
      const categoryMatch = checkboxCategories.length === 0 || checkboxCategories.includes(element.category);
      const priceFrom = fromRange === '' || element.price >= parseInt(fromRange, 10);
      const priceTo = toRange === '' || element.price <= parseInt(toRange, 10);
      const search = searchInput === '' || element.title.toLowerCase().includes(searchInput.toLowerCase());

      return categoryMatch && priceFrom && priceTo && search;
    });
    const sortFilteredData = filteredData.sort((a, b) => {
      if (sortPrice === 'lowest') {
        return a.price - b.price;
      } else if (sortPrice === 'highest') {
        return b.price - a.price;
      } else {
        return filteredData;
      }
    });
    setUpdatedProducts(sortFilteredData);
  }, [checkboxCategories, fromRange, toRange, sortPrice, searchInput]);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <h2>Categories</h2>
        {categories.map((element) => {
          return (
            <div key={element.id} className={styles.input}>
              <input
                type="checkbox"
                id={element.id}
                checked={checkboxCategories.some((id) => id === element.id)}
                value={element.id}
                onChange={(e) => handleCheckboxChange(e)}
              />
              <label htmlFor={element.id}>{element.type}</label>
            </div>
          );
        })}
      </div>
      <div className={styles.filter}>
        <h2>Price range</h2>
        <div className={clsx(styles.input, styles.inputRange)}>
          <input type="text" placeholder="$ FROM" value={fromRange} onChange={(e) => setFromRange(e.target.value)} />
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <input type="text" placeholder="$ TO" value={toRange} onChange={(e) => setToRange(e.target.value)} />
        </div>
      </div>
      <div className={styles.filter}>
        <h2>Sort by</h2>
        <div className={styles.input}>
          <input
            type="radio"
            id="asc"
            name="sortPrice"
            value="lowest"
            checked={sortPrice === 'lowest'}
            onChange={handleSortPrice}
          />
          <label htmlFor="asc">Price (Lowest)</label>
        </div>
        <div className={styles.input}>
          <input
            type="radio"
            id="desc"
            name="sortPrice"
            value="highest"
            checked={sortPrice === 'highest'}
            onChange={handleSortPrice}
          />
          <label htmlFor="desc">Price (Highest)</label>
        </div>
      </div>
      <button className={styles.delete} onClick={handleResetBtn}>
        RESET
      </button>
    </div>
  );
}

export default Sidebar;
