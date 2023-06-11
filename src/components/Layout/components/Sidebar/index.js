import styles from './Sidebar.module.scss';
import clsx from 'clsx';

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <h2>Categories</h2>
        <div className={styles.input}>
          <input type="checkbox" id="1" value={1} />
          <label htmlFor="1">All</label>
        </div>
        <div className={styles.input}>
          <input type="checkbox" id="2" value={2} />
          <label htmlFor="2">Furnitures</label>
        </div>
        <div className={styles.input}>
          <input type="checkbox" id="3" value={3} />
          <label htmlFor="3">Electronics</label>
        </div>
        <div className={styles.input}>
          <input type="checkbox" id="4" value={4} />
          <label htmlFor="4">Lamps</label>
        </div>
        <div className={styles.input}>
          <input type="checkbox" id="5" value={5} />
          <label htmlFor="5">Kitchen</label>
        </div>
        <div className={styles.input}>
          <input type="checkbox" id="6" value={6} />
          <label htmlFor="6">Chairs</label>
        </div>
        <div className={styles.input}>
          <input type="checkbox" id="7" value={7} />
          <label htmlFor="7">Skincare</label>
        </div>
      </div>
      <div className={styles.filter}>
        <h2>Price range</h2>
        <div className={clsx(styles.input, styles.inputRange)}>
          <input type="text" placeholder="$ FROM" />
          <span>&nbsp; - &nbsp;</span>
          <input type="text" placeholder="$ TO" />
        </div>
        <button className={styles.apply}>APPLY</button>
      </div>
      <div className={styles.filter}>
        <h2>Sort by</h2>
        <div className={styles.input}>
          <input type="radio" id="asc" value="asc" name="price" />
          <label htmlFor="asc">Price (Lowest)</label>
        </div>
        <div className={styles.input}>
          <input type="radio" id="desc" value="desc" name="price" />
          <label htmlFor="desc">Price (Highest)</label>
        </div>
      </div>
      <button className={styles.delete}>DELETE ALL</button>
    </div>
  );
}

export default Sidebar;
