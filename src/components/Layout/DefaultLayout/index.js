import styles from './DefaultLayout.module.scss';
import Overlay from './Overlay';
import Cart from './Cart';
import Header from './Header';
import Footer from './Footer';
import Newsletter from './Newsletter';

function DefaultLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Overlay />
      <Cart />
      <Header />
      <div className={styles.container}>{children}</div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
