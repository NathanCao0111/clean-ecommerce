import styles from './Proud.module.scss';
import { Link } from 'react-router-dom';
import useProducts from '../../../../context/useProducts';

function Proud() {
  const productsData = useProducts();
  const [products] = productsData;

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Products we are proud of</h2>
      <div className={styles.grid}>
        {products
          .filter((element) => element.id <= 8)
          .map((element) => {
            return (
              <div key={element.id} className={styles.item}>
                <Link to={`categories/product/${element.id}`}>
                  <div className={styles.itemHeader}>
                    <img src={element.image} alt={element.title} />
                  </div>
                  <div className={styles.itemDetails}>
                    <p className={styles.itemTitle}>{element.title}</p>
                    <p className={styles.itemPrice}>${element.price}</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default Proud;
