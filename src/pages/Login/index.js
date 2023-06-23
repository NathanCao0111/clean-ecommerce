import styles from './Login.module.scss';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import useProducts from '../../context/useProducts';

function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const navigate = useNavigate();
  const [incorrectNotify, setIncorrectNotify] = useState(false);
  const loggedinData = useProducts();
  const [loggedin, setLoggedin] = loggedinData.loggedinContext;
  const [, setNameLoggedin] = loggedinData.nameLoggedinContext;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIncorrectNotify(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [incorrectNotify]);

  useEffect(() => {
    if (loggedin) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loggedin]);

  const handleLoginSubmit = (values) => {
    const { email, password } = values;
    fetch('https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/users')
      .then((response) => response.json())
      .then((data) => {
        const validateUser = data.filter((element) => {
          if (element.email === email && element.password === password) {
            setNameLoggedin(element.name);
            const { id } = element;
            const token = JSON.stringify(id);
            localStorage.setItem('token', token);
            return element;
          }
          return;
        });
        if (validateUser.length !== 0) {
          setLoggedin(true);
        } else {
          setIncorrectNotify(true);
        }
      });
  };

  return (
    <section className={styles.container}>
      <div className={clsx(styles.notify, incorrectNotify === true ? styles.slideIn : '')}>
        <p>
          Incorrect email address or password &nbsp;
          <span>
            <FontAwesomeIcon icon={faXmarkSquare} />
          </span>
        </p>
      </div>
      <div className={styles.content}>
        <h3>LOGIN</h3>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleLoginSubmit}>
          {({ errors, touched }) => (
            <Form>
              <div className={styles.inputContainer}>
                <label htmlFor="email">Email address</label>
                <Field id="email" name="email" type="email" placeholder="E.g. johnsmith@gmail.com" spellCheck={false} />
                <ErrorMessage name="email">{(msg) => <div className={styles.error}>{msg}</div>}</ErrorMessage>
              </div>
              <div className={styles.inputContainer}>
                <label htmlFor="password">Password</label>
                <Field id="password" name="password" type="password" />
                <ErrorMessage name="password">{(msg) => <div className={styles.error}>{msg}</div>}</ErrorMessage>
              </div>
              <button type="submit">LOGIN</button>
              <p>
                <Link to="/signup">
                  Don't have an account? <span>Sign up</span>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Login;
