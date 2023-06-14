import styles from './Sidebar.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import useProducts from '../../../../context/useProducts';

function Sidebar() {
  const productsData = useProducts();
  const [checkboxCategories, setCheckboxCategories] = productsData.checkboxCategoriesContext;
  const categories = [
    { id: 0, type: 'All' },
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
          <input type="text" placeholder="$ FROM" />
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
          <input type="text" placeholder="$ TO" />
        </div>
        <button className={styles.apply}>APPLY</button>
      </div>
      <div className={styles.filter}>
        <h2>Sort by</h2>
        <div className={styles.input}>
          <input type="radio" id="asc" value="asc" name="price" />
          <label htmlFor="asc">Price (Lowest)</label>
        </div>
        <div className={styles.input}>
          <input type="radio" id="desc" value="desc" name="price" />
          <label htmlFor="desc">Price (Highest)</label>
        </div>
      </div>
      <button className={styles.delete}>DELETE ALL</button>
    </div>
  );
}

export default Sidebar;
