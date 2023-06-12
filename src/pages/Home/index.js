import styles from './Home.module.scss';
import Featured from '../../components/Layout/components/Featured';
import Proud from '../../components/Layout/components/Proud';
import Banner from '../../components/Layout/components/Banner';
import Trending from '../../components/Layout/components/Trending';
import { useEffect } from 'react';
import useProducts from '../../context/useProducts';

function Home() {
  const productsData = useProducts();
  const [, setCategoryProducts] = productsData.categoryProductsContext;

  useEffect(() => {
    setCategoryProducts(false);
  }, []);

  return (
    <div className={styles.home}>
      <Featured />
      <Proud />
      <Banner />
      <Trending />
      <Banner reverse="reverse" />
    </div>
  );
}

export default Home;
