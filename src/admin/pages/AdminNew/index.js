import styles from './AdminNew.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileImage } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

function AdminNew({ inputs, title }) {
  const [file, setFile] = useState('');

  return (
    <section className={styles.new}>
      <div className={styles.container}>
        <div className={styles.top}>
          <h3>{title}</h3>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <img
              src={
                file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
              alt="avatar"
            />
          </div>
          <div className={styles.right}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={styles.input}>
                <label htmlFor="file">
                  <div className={styles.imgFile}>Image</div>
                  <div className={styles.icon}>
                    <FontAwesomeIcon icon={faFileImage} />
                    {file ? <span>Choose another file</span> : <span>No file chosen</span>}
                  </div>
                </label>
                <input type="file" id="file" style={{ display: 'none' }} onChange={(e) => setFile(e.target.files[0])} />
              </div>
              {inputs.map((element) => {
                return (
                  <div key={element.id} className={styles.input}>
                    <label>{element.label}</label>
                    <input type={element.type} placeholder={element.placeholder} />
                  </div>
                );
              })}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminNew;
