import styles from './Featured.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';

function Featured() {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.item, styles.gridOne)}>
        <Link to="/categories">
          <div className={styles.overlay}></div>
          <img src={images.featuredOne} alt="Live Comfortably" className={styles.img} />
          <p className={styles.desc}>Live Comfortably</p>
        </Link>
      </div>
      <div className={clsx(styles.item, styles.gridTwo)}>
        <Link to="/categories">
          <div className={styles.overlay}></div>
          <img src={images.featuredTwo} alt="Skincare" className={styles.img} />
          <p className={styles.desc}>Skincare</p>
        </Link>
      </div>
      <div className={clsx(styles.item, styles.gridThree)}>
        <Link to="/categories">
          <div className={styles.overlay}></div>
          <img src={images.featuredThree} alt="Kitchen" className={styles.img} />
          <p className={styles.desc}>Kitchen</p>
        </Link>
      </div>
      <div className={clsx(styles.item, styles.gridThreeLow)}>
        <Link to="/categories">
          <div className={styles.overlay}></div>
          <img src={images.featuredThreeLow} alt="Electronics" className={styles.img} />
          <p className={styles.desc}>Electronics</p>
        </Link>
      </div>
    </div>
  );
}

export default Featured;
