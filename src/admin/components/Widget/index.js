import styles from './Widget.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1, faUser, faStar } from '@fortawesome/free-regular-svg-icons';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

function Widget({ type }) {
  let data;

  const amount = 100;
  const diff = 20;
  const num = 20;

  switch (type) {
    case 'sales':
      data = {
        icon: <FontAwesomeIcon icon={faMoneyBill1} />,
        title: 'Total sales',
        isMoney: true,
        isDefault: true,
      };
      break;
    case 'users':
      data = {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Users',
        isMoney: false,
        isDefault: false,
      };
      break;
    case 'orders':
      data = {
        icon: <FontAwesomeIcon icon={faStar} />,
        title: 'Total orders',
        isMoney: false,
        isDefault: false,
      };
      break;
    case 'refunded':
      data = {
        icon: <FontAwesomeIcon icon={faRotateLeft} />,
        title: 'Refunded',
        isMoney: false,
        isDefault: false,
      };
      break;
    default:
      break;
  }

  return (
    <section className={clsx(styles.widget, data.isDefault && styles.default)}>
      <div className={styles.top}>
        <span>{data.icon}</span>
        <p>{data.title}</p>
      </div>
      <div className={styles.center}>
        <h3>
          {data.isMoney && '$'}
          {amount}
        </h3>
      </div>
      <div className={styles.bottom}>
        <div className={clsx(styles.bottomLeft, styles.positive)}>
          <span>
            <FontAwesomeIcon icon={faArrowUpRightDots} />
          </span>
          <p>{diff}%</p>
        </div>
        <div className={styles.bottomRight}>
          <p>+{num}K this week</p>
        </div>
      </div>
    </section>
  );
}

export default Widget;
