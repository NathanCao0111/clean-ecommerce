import styles from './Banner.module.scss';
import { Link } from 'react-router-dom';
import images from '../../../../assets/images';

function Banner(props) {
  const { reverse } = props;
  return (
    <section
      className={styles.container}
      style={
        reverse === 'reverse'
          ? {
              flexDirection: 'row-reverse',
            }
          : {}
      }
    >
      <div className={styles.text}>
        <h2>{reverse === 'reverse' ? 'Comfortable & Elegante Living' : 'Creative harmonious living'}</h2>
        <p>CLEAN Products are all made to standard sizes so that you can mix and match them freely</p>
        <Link to="/categories">
          <button>Shop now</button>
        </Link>
      </div>
      <div className={styles.img}>
        <img src={reverse === 'reverse' ? images.bannerTwo : images.bannerOne} alt="Creative harmonious living" />
      </div>
    </section>
  );
}

export default Banner;
