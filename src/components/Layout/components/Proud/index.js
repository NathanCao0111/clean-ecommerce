import styles from './Proud.module.scss';
import { Link } from 'react-router-dom';
import useProducts from '../../../../context/useProducts';
import { useState, useEffect } from 'react';

function Proud() {
  const productsData = useProducts();
  const [products] = productsData.productsContext;
  const [checkboxCategories] = productsData.checkboxCategoriesContext;
  const [categoryProducts] = productsData.categoryProductsContext;
  const [updatedProducts, setUpdatedProducts] = useState(products);

  useEffect(() => {
    if (checkboxCategories[0] === undefined || checkboxCategories.includes(0)) {
      setUpdatedProducts(products);
    } else {
      const res = products.filter((product) => {
        return checkboxCategories.some((id) => product.category === id);
      });
      setUpdatedProducts(res);
    }
  }, [checkboxCategories]);

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Products we are proud of</h2>
      <div className={styles.grid}>
        {categoryProducts === true
          ? updatedProducts?.map((element) => {
              return (
                <div key={element.id} className={styles.item}>
                  <Link to={`/product/${element.id}`}>
                    <div className={styles.itemHeader}>
                      <img src={element.image.bigImg} alt={element.title} />
                    </div>
                    <div className={styles.itemDetails}>
                      <p className={styles.itemTitle}>{element.title}</p>
                      <p className={styles.itemPrice}>${element.price}</p>
                    </div>
                  </Link>
                </div>
              );
            })
          : updatedProducts
              .filter((element) => element.id <= 8)
              ?.map((element) => {
                return (
                  <div key={element.id} className={styles.item}>
                    <Link to={`/product/${element.id}`}>
                      <div className={styles.itemHeader}>
                        <img src={element.image.bigImg} alt={element.title} />
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
