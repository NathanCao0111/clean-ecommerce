import styles from './Featured.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

function Featured() {
  return (
    <div className={styles.container}>
      <div className={clsx(styles.item, styles.gridOne)}>
        <Link to="/categories">
          <div className={styles.overlay}>
            <img src="" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Featured;
