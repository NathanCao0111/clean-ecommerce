import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

  const handleLoginSubmit = (values) => {
    const { email, password } = values;
    console.log(values);
    fetch('https://6448a5c1e7eb3378ca32d196.mockapi.io/api/clean-ecommerce/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const validateUser = data.filter((element) => {
          if (element.email === email && element.password === password) {
            console.log(element);
            return element;
          }
          return;
        });
        console.log(validateUser);
        if (validateUser.length !== 0) {
          navigate('/');
        }
      });
  };

  return (
    <section className={styles.container}>
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
