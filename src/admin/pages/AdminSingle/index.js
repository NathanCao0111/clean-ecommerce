import styles from './AdminSingle.module.scss';
import Progress from '../../components/Progress';
import BasicTable from '../../components/BasicTable';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../../context/useProducts';
import clsx from 'clsx';

function AdminSingle() {
  const params = useParams();
  const userId = params.adminUserId;
  const productId = params.adminProductId;
  const singlePageData = useProducts();
  const [users] = singlePageData.usersContext;
  const [products] = singlePageData.productsContext;
  const [user, setUser] = useState(users[userId - 1]);
  const [product, setProduct] = useState(products[productId - 1]);
  const [userPage, setUserPage] = useState(false);
  const [productPage, setProductPage] = useState(false);

  useEffect(() => {
    if (userId) {
      fetch(`https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/users/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setUserPage(true);
          setProductPage(false);
          setUser(data);
        });
    }
  }, [userId]);

  useEffect(() => {
    if (productId) {
      fetch(`https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/products/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProductPage(true);
          setUserPage(false);
          setProduct(data);
        });
    }
  }, [productId]);

  return (
    <section className={styles.single}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <button>Edit</button>
            <h3>Information</h3>
            <div className={styles.item}>
              <img
                src={(userPage ? user.img : '') || (productPage ? product.image.bigImg : '')}
                alt="information ava"
              />
              <div className={styles.details}>
                <p>{(userPage && user.name) || (productPage && product.title)}</p>
                <div className={styles.detail}>
                  <span className={styles.detailKey}>{(userPage && 'Email:') || (productPage && 'Texture:')}</span>
                  <span className={styles.detailValue}>
                    {(userPage && user.email) || (productPage && product.specs.texture)}
                  </span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailKey}>{(userPage && 'Status:') || (productPage && 'Weight:')}</span>
                  <span className={clsx(styles.detailValue, styles.status)}>
                    {(userPage && user.status) || (productPage && product.specs.weight)}
                  </span>
                </div>
                <div className={styles.detail}>
                  <span className={styles.detailKey}>{(userPage && 'Country:') || (productPage && 'Size')}</span>
                  <span className={styles.detailValue}>
                    {(userPage && user.country) || (productPage && product.specs.size)}
                  </span>
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
