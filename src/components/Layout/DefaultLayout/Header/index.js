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
  const [loggedin, setLoggedin] = productsData.loggedinContext;
  const [nameLoggedin, setNameLoggedin] = productsData.nameLoggedinContext;

  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/" className={styles.link}>
            <img src={images.logo} alt="Clean logo"></img>
          </Link>
        </div>
        <nav className={styles.nav}>
          {loggedin === true ? (
            <p className={clsx(styles.navItem, styles.link)}>Welcome, &nbsp; {nameLoggedin}</p>
          ) : (
            <Link to="/login" className={clsx(styles.navItem, styles.link)}>
              Login
            </Link>
          )}
          <Link
            to="/categories"
            className={clsx(styles.navItem, styles.link)}
            onClick={() => setCheckboxCategories([])}
          >
            CATEGORIES
          </Link>
          <Link to="/product/1" className={clsx(styles.navItem, styles.link)}>
            PRODUCT PAGE
          </Link>
          <FontAwesomeIcon icon={faShoppingCart} className={clsx(styles.navItem, styles.navCart)} />
          {cartQuantVisible && <div>1</div>}
        </nav>
      </div>
    </header>
  );
}

export default Header;
