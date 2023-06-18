import styles from './Login.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleLoginBtn = () => {};

  console.log(userData);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3>LOGIN</h3>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            spellCheck={false}
            value={userData.email}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            spellCheck={false}
            value={userData.password}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
        </div>
        <button onClick={handleLoginBtn}>LOGIN</button>
        <p>
          <Link to="/signup">
            Don't have an account? <span>Sign up</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
