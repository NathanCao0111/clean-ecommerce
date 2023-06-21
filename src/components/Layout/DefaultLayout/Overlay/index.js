import styles from './Overlay.module.scss';
import clsx from 'clsx';
import useProducts from '../../../../context/useProducts';
import { useEffect, useRef } from 'react';

function Overlay() {
  const productsData = useProducts();
  const [isCart, setIsCart] = productsData.isCartContext;
  const overlayRef = useRef();

  useEffect(() => {
    if (isCart) {
      const isOverlay = overlayRef.current;

      const handleCloseOverlay = () => {
        setIsCart(false);
      };

      isOverlay.addEventListener('click', handleCloseOverlay);

      return () => isOverlay.removeEventListener('click', handleCloseOverlay);
    }
  }, [isCart]);

  return <div ref={overlayRef} className={clsx(styles.container, isCart === true ? styles.open : '')}></div>;
}

export default Overlay;
