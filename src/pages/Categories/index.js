import styles from './Categories.module.scss';
import Sidebar from '../../components/Layout/components/Sidebar';
import Proud from '../../components/Layout/components/Proud';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Categories() {
  return (
    <section className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>ALL</h3>
          <div className={styles.search}>
            <form>
              <input type="text" spellCheck={false} placeholder="Search products" />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
        <Proud />
      </div>
    </section>
  );
}

export default Categories;
