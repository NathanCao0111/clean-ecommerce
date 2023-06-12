import styles from './Trending.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import products from '../../../../data';
import { useState } from 'react';
import useProducts from '../../../../context/useProducts';

function Trending() {
  const productsData = useProducts();
  const [products] = productsData.productsContext;
  const [scroll, setScroll] = useState(0);

  const handlePrevScroll = () => {
    setScroll(scroll === 0 ? 8 : (prev) => prev - 1);
  };

  const handleNextScroll = () => {
    setScroll(scroll === 8 ? 0 : (prev) => prev + 1);
  };

  return (
    <section className={styles.container}>
      <div className={styles.upper}>
        <h3>Trending Now</h3>
        <div className={styles.btns}>
          <button className={styles.scrollLeft} onClick={handlePrevScroll}>
            <FontAwesomeIcon icon={faLeftLong} />
          </button>
          <button className={styles.scrollRight} onClick={handleNextScroll}>
            <FontAwesomeIcon icon={faRightLong} />
          </button>
        </div>
      </div>
      <div className={styles.lower}>
        {products
          .filter((element) => element.id >= 8)
          .map((element) => {
            return (
              <div key={element.id} className={styles.item} style={{ transform: `translateX(-${scroll * 23.2}rem)` }}>
                <Link to={`/categories/product/${element.id}`}>
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

export default Trending;
