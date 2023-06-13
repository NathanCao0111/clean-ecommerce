import styles from './Newsletter.module.scss';

function Newsletter() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2>Newsletter</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="your@email.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
