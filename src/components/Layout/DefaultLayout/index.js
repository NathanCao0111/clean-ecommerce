import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';
import Newsletter from './Newsletter';

function DefaultLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>{children}</div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default DefaultLayout;
