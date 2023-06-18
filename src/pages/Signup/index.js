import styles from './Signup.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSignupBtn = () => {};

  console.log(userData);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3>SIGN UP</h3>
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
        <div className={styles.inputContainer}>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            spellCheck={false}
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          />
        </div>
        <button onClick={handleSignupBtn}>SIGN UP</button>
        <p>
          <Link to="/login">
            Already have an account? <span>Log in</span>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Signup;
