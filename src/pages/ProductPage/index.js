import styles from './ProductPage.module.scss';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Trending from '../../components/Layout/components/Trending';
import useProducts from '../../context/useProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

function ProductPage() {
  const productsData = useProducts();
  const [products] = productsData.productsContext;
  const [, setCartQuantVisible] = productsData.cartQuantVisibleContext;
  const params = useParams();
  const id = params.productId;
  const [product, setProduct] = useState(products[id - 1]);
  const [quantity, setQuantity] = useState(1);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    fetch(`https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleSubtract = () => {
    setQuantity(quantity <= 1 ? 1 : (prev) => prev - 1);
  };

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAtc = () => {
    setNotify(true);
    setCartQuantVisible(true);
  };

  useEffect(() => {
    if (notify === true) {
      const notifyTimer = setTimeout(() => {
        setNotify(false);
      }, 2000);

      return () => clearTimeout(notifyTimer);
    }
  }, [notify]);

  return (
    <section className={styles.container}>
      <div className={clsx(styles.notify, notify === true ? styles.slideIn : '')}>
        <p>
          Item has been added to the cart &nbsp;
          <span>
            <FontAwesomeIcon icon={faCheckSquare} />
          </span>
        </p>
      </div>
      <div className={styles.product}>
        <h3>{product.title}</h3>
        <div className={styles.left}>
          <div className={styles.bigImg}>
            <img src={product.image.bigImg} alt={product.title} />
          </div>
          <div className={styles.smallImgs}>
            <img src={product.image.smallImgs.smallImg1} alt={product.title} />
            <img src={product.image.smallImgs.smallImg2} alt={product.title} />
            <img src={product.image.smallImgs.smallImg3} alt={product.title} />
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.desc}>{product.description}</p>
          <div className={styles.quant}>
            <p>Quantity</p>
            <div className={styles.btns}>
              <button onClick={handleSubtract}>-</button>
              <p>{quantity}</p>
              <button onClick={handleAdd}>+</button>
            </div>
            <p>${product.price * quantity}</p>
          </div>
          <div className={styles.atcBuy}>
            <button className={styles.atc} onClick={handleAtc}>
              ADD TO CART
            </button>
            <button className={styles.buy}>BUY NOW</button>
          </div>
        </div>
      </div>
      <div className={styles.specs}>
        <div className={styles.spec}>
          <p className={styles.specTitle}>Texture:</p>
          <p className={styles.specDesc}>{product.specs.texture}</p>
        </div>
        <div className={styles.spec}>
          <p className={styles.specTitle}>Weight:</p>
          <p className={styles.specDesc}>{product.specs.weight}</p>
        </div>
        <div className={styles.spec}>
          <p className={styles.specTitle}>Size:</p>
          <p className={styles.specDesc}>{product.specs.size}</p>
        </div>
      </div>
      <Trending />
    </section>
  );
}

export default ProductPage;
