import styles from './AdminSidebar.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableColumns, faCartShopping, faUser, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';

function AdminSidebar(props) {
  return (
    <aside className={clsx(styles.sidebar, props.className)}>
      <div className={styles.top}>
        <Link to="/admin">
          <img src={images.cleanAdmin} alt="Clean logo"></img>
        </Link>
      </div>
      <div className={styles.center}>
        <ul>
          <li>
            <span>
              <FontAwesomeIcon icon={faTableColumns} />
            </span>
            <p>Dashboard</p>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <p>Products</p>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <p>Users</p>
          </li>
          <li>
            <span>
              <FontAwesomeIcon icon={faGear} />
            </span>
            <p>Settings</p>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.colorContainer}>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
        </div>
        <div className={styles.logout}>
          <span>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </span>
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;
