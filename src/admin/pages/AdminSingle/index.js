import styles from './AdminSingle.module.scss';
import Progress from '../../components/Progress';
import BasicTable from '../../components/BasicTable';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../../context/useProducts';

function AdminSingle() {
  const params = useParams();
  const id = params.adminUserId;
  const usersData = useProducts();
  const [users] = usersData.usersContext;
  const [user, setUser] = useState(users[id - 1]);

  useEffect(() => {
    fetch(`https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  return (
    <section className={styles.single}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <button>Edit</button>
            <h3>Information</h3>
            <div className={styles.item}>
              <img src={user.img} alt="user ava" />
              <div className={styles.details}>
                <p>{user.name}</p>
                <div className={styles.detail}>
                  <span className={styles.detailKey}>Email:</span>
                  <span className={styles.detailValue}>{user.email}</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailKey}>Phone:</span>
                  <span className={styles.detailValue}>{user.phone}</span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailKey}>Country:</span>
                  <span className={styles.detailValue}>{user.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Progress />
          </div>
        </div>
        <div className={styles.bottom}>
          <h3>Latest transactions</h3>
          <BasicTable />
        </div>
      </div>
    </section>
  );
}

export default AdminSingle;
