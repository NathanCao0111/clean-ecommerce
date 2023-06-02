import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={images.logo} alt="Clean logo"></img>
        </div>
        <nav className={styles.nav}>
          <button className={styles.cart}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
