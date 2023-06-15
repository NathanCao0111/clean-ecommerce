import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useProducts from '../../../../context/useProducts';

function Header() {
  const productsData = useProducts();
  const [cartQuantVisible] = productsData.cartQuantVisibleContext;
  const [, setCheckboxCategories] = productsData.checkboxCategoriesContext;

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.link}>
            <img src={images.logo} alt="Clean logo"></img>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link to="/login" className={clsx(styles.navItem, styles.link)}>
            Login
          </Link>
          <Link
            to="/categories"
            className={clsx(styles.navItem, styles.link)}
            onClick={() => setCheckboxCategories([])}
          >
            Categories
          </Link>
          <Link to="/product/1" className={clsx(styles.navItem, styles.link)}>
            Product Page
          </Link>
          <FontAwesomeIcon icon={faShoppingCart} className={clsx(styles.navItem, styles.navCart)} />
          {cartQuantVisible && <div>1</div>}
        </nav>
      </div>
    </header>
  );
}

export default Header;
