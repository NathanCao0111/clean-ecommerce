import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useProducts from '../../../../context/useProducts';
import { useSelector } from 'react-redux';

function Header() {
  const productsData = useProducts();
  const [, setCheckboxCategories] = productsData.checkboxCategoriesContext;
  const [loggedin, setLoggedin] = productsData.loggedinContext;
  const [nameLoggedin, setNameLoggedin] = productsData.nameLoggedinContext;
  const [, setIsCart] = productsData.isCartContext;

  const [isDropdown, setIsDropdown] = useState(false);

  const cartProducts = useSelector((state) => state.cart.cartProducts);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedin(false);
  };

  useEffect(() => {
    const id = Number(JSON.parse(localStorage.getItem('token')));

    if (id !== 0) {
      fetch(`https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setLoggedin(true);
          setNameLoggedin(data.name);
        });
    }
  }, []);

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
            <>
              <p className={clsx(styles.navItem, styles.link)} onClick={() => setIsDropdown(!isDropdown)}>
                Welcome, &nbsp; {nameLoggedin}
              </p>
              {isDropdown && (
                <ul className={styles.dropdown}>
                  <li>
                    <Link to="">
                      <span>
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" onClick={handleLogout}>
                      <span>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                      </span>
                      Log out
                    </Link>
                  </li>
                </ul>
              )}
            </>
          ) : (
            <Link to="/login" className={clsx(styles.navItem, styles.link)}>
              LOGIN
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
          <FontAwesomeIcon
            icon={faShoppingCart}
            className={clsx(styles.navItem, styles.navCart)}
            onClick={() => setIsCart(true)}
          />
          <div>{cartProducts.length}</div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
