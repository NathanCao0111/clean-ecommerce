import styles from './Home.module.scss';
import Featured from '../../components/Layout/components/Featured';
import Proud from '../../components/Layout/components/Proud';
import Banner from '../../components/Layout/components/Banner';
import Trending from '../../components/Layout/components/Trending';
import Newsletter from '../../components/Layout/components/Newsletter';

function Home() {
  return (
    <div className={styles.home}>
      <Featured />
      <Proud />
      <Banner />
      <Trending />
      <Banner reverse="reverse" />
      <Newsletter />
    </div>
  );
}

export default Home;
