import styles from './Categories.module.scss';
import Sidebar from '../../components/Layout/components/Sidebar';

function Categories() {
  return (
    <section className={styles.container}>
      <Sidebar />
      <div className={styles.content}></div>
    </section>
  );
}

export default Categories;
