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
  const [ascPrice, setAscPrice] = productsData.ascPriceContext;
  const [descPrice, setDescPrice] = productsData.descPriceContext;

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

  const handleAscPrice = (e) => {
    console.log(e.target.value);
  };

  const handleDescPrice = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    // if (checkboxCategories[0] === undefined && fromRange === '' && toRange === 1000) {
    //   setUpdatedProducts(products);
    // } else {
    //   const res = products.filter((element) => {
    //     if (checkboxCategories[0] === undefined) {
    //       setCheckboxCategories([1, 2, 3, 4, 5, 6]);
    //     }
    //     return (
    //       checkboxCategories.some((id) => element.category === id) &&
    //       element.price >= Number(fromRange) &&
    //       element.price <= Number(toRange)
    //     );
    //   });
    //   setUpdatedProducts(res);
    // }
    const filteredData = products.filter((item) => {
      const categoryMatch = checkboxCategories.length === 0 || checkboxCategories.includes(item.category);
      const priceFrom = fromRange === '' || item.price >= parseInt(fromRange, 10);
      const priceTo = toRange === '' || item.price <= parseInt(toRange, 10);

      return categoryMatch && priceFrom && priceTo;
    });
    setUpdatedProducts(filteredData);
  }, [checkboxCategories, fromRange, toRange]);

  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <h2>Categories</h2>
        {categories.map((element) => {
          return (
            <div key={element.id} className={styles.input}>
              <input type="checkbox" id={element.id} value={element.id} onChange={(e) => handleCheckboxChange(e)} />
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
          <input type="radio" id="asc" value={ascPrice} name="price" onChange={(e) => handleAscPrice(e)} />
          <label htmlFor="asc">Price (Lowest)</label>
        </div>
        <div className={styles.input}>
          <input type="radio" id="desc" value={descPrice} name="price" onChange={(e) => handleDescPrice(e)} />
          <label htmlFor="desc">Price (Highest)</label>
        </div>
      </div>
      <button className={styles.delete}>RESET</button>
    </div>
  );
}

export default Sidebar;
