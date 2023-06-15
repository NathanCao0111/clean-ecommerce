import styles from './Featured.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';
import useProducts from '../../../../context/useProducts';

function Featured() {
  const productsData = useProducts();
  const [, setCheckboxCategories] = productsData.checkboxCategoriesContext;

  return (
    <section className={styles.container}>
      <div className={clsx(styles.item, styles.gridOne)} onClick={() => setCheckboxCategories([1])}>
        <Link to="/categories">
          <div className={styles.overlay}></div>
          <img src={images.featuredOne} alt="Live Comfortably" className={styles.img} />
          <p className={styles.desc}>Live Comfortably</p>
        </Link>
      </div>
      <div className={clsx(styles.item, styles.gridTwo)} onClick={() => setCheckboxCategories([6])}>
        <Link to="/categories">
          <div className={styles.overlay}></div>
          <img src={images.featuredTwo} alt="Skincare" className={styles.img} />
          <p className={styles.desc}>Skincare</p>
        </Link>
      </div>
      <div className={clsx(styles.item, styles.gridThree)} onClick={() => setCheckboxCategories([4])}>
        <Link to="/categories">
          <div className={styles.overlay}></div>
          <img src={images.featuredThree} alt="Kitchen" className={styles.img} />
          <p className={styles.desc}>Kitchen</p>
        </Link>
      </div>
      <div className={clsx(styles.item, styles.gridThreeLow)} onClick={() => setCheckboxCategories([2])}>
        <Link to="/categories">
          <div className={styles.overlay}></div>
          <img src={images.featuredThreeLow} alt="Electronics" className={styles.img} />
          <p className={styles.desc}>Electronics</p>
        </Link>
      </div>
    </section>
  );
}

export default Featured;
