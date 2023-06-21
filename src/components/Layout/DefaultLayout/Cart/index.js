import styles from './Cart.module.scss';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useProducts from '../../../../context/useProducts';
import { useSelector, useDispatch } from 'react-redux';
import { cartProductDecrement, cartProductIncrement, removeCartProduct } from '../../../../redux/cartReducer';

function Cart() {
  const productsData = useProducts();
  const [isCart, setIsCart] = productsData.isCartContext;

  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();

  const subtotal = () => {
    let total = 0;
    cartProducts.forEach((element) => (total += element.quantity * element.price));
    return total.toFixed(2);
  };

  return (
    <section className={clsx(styles.container, isCart === true ? styles.open : '')}>
      <div className={styles.title}>
        <h2>Your Shopping Cart ({cartProducts.length})</h2>
        <span>
          <FontAwesomeIcon icon={faXmark} onClick={() => setIsCart(false)} />
        </span>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <div className={styles.cart}>
            {cartProducts?.map((element) => (
              <div key={element.id} className={styles.item}>
                <div className={styles.img}>
                  <img src={element.image} alt={element.title} />
                </div>
                <div className={styles.middle}>
                  <p className={styles.name}>{element.title}</p>
                  <div className={styles.btns}>
                    <button onClick={() => dispatch(cartProductDecrement(element.id))}>-</button>
                    <p>{element.quantity}</p>
                    <button onClick={() => dispatch(cartProductIncrement(element.id))}>+</button>
                  </div>
                </div>
                <div className={styles.right}>
                  <p>${element.quantity * element.price}</p>
                  <span>
                    <FontAwesomeIcon icon={faXmark} onClick={() => dispatch(removeCartProduct(element.id))} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.subtotal}>
          <div className={styles.left}>
            <p>Subtotal</p>
            <p>${subtotal()}</p>
          </div>
          <div className={styles.right}>
            <Link to="">Go to checkout</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
