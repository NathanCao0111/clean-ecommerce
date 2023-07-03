import styles from './Signup.module.scss';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too short!').max(70, 'Too long!').required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const navigate = useNavigate();
  const [userMatchWarning, setUserMatchWarning] = useState(false);

  useEffect(() => {
    if (userMatchWarning === true) {
      const timer = setTimeout(() => {
        setUserMatchWarning(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [userMatchWarning]);

  const handleSignupSubmit = async (values) => {
    const { name, email, password } = values;

    const response = await fetch('https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/users');
    const data = await response.json();
    const validateEmail = data.map((element) => element.email);
    if (validateEmail.includes(email)) {
      setUserMatchWarning(true);
      return;
    }

    await fetch('https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    navigate('/login');
  };

  return (
    <section className={styles.container}>
      <div className={clsx(styles.notify, userMatchWarning === true ? styles.slideIn : '')}>
        <p>
          Email address has already existed &nbsp;
          <span>
            <FontAwesomeIcon icon={faXmarkSquare} />
          </span>
        </p>
      </div>
      <div className={styles.content}>
        <h3>SIGN UP</h3>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSignupSubmit}>
          {({ errors, touched }) => (
            <Form>
              <div className={styles.inputContainer}>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" type="text" placeholder="E.g. John Smith" spellCheck={false} />
                <ErrorMessage name="name">{(msg) => <div className={styles.error}>{msg}</div>}</ErrorMessage>
              </div>
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
              <button type="submit">SIGN UP</button>
              <p>
                <Link to="/login">
                  Already have an account? <span>Log in</span>
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Signup;
