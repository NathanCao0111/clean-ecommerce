import styles from './AdminNew.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/free-regular-svg-icons';

function AdminNew() {
  return (
    <section className={styles.new}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h3>Add New User</h3>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="empty" />
          </div>
          <div className={styles.right}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.input}>
                <label htmlFor="file">
                  <div className={styles.imgFile}>Image</div>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faFileImage} />
                    <span>No file chosen</span>
                  </div>
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <div className={styles.input}>
                <label>Name</label>
                <input type="text" placeholder="John Smith" />
              </div>
              <div className={styles.input}>
                <label>Email</label>
                <input type="email" placeholder="johnsmith@gmail.com" />
              </div>
              <div className={styles.input}>
                <label>Password</label>
                <input type="password" />
              </div>
              <div className={styles.input}>
                <label>Age</label>
                <input type="number" placeholder={18} />
              </div>
              <div className={styles.input}>
                <label>Phone</label>
                <input type="text" placeholder="+0123 456 789" />
              </div>
              <div className={styles.input}>
                <label>Country</label>
                <input type="text" placeholder="Vietnam" />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminNew;
