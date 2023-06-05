import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

function Header() {
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
          <Link to="/categories" className={clsx(styles.navItem, styles.link)}>
            Categories
          </Link>
          <Link to="/productpage" className={clsx(styles.navItem, styles.link)}>
            Product Page
          </Link>
          <FontAwesomeIcon icon={faShoppingCart} className={clsx(styles.navItem, styles.navCart)} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
