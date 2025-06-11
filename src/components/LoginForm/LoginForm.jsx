import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log('Login success');
        actions.resetForm();
      })
      .catch(() => {
        console.log('Login error');
      });
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Email required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }

        if (!values.password) {
          errors.password = 'Password required';
        }

        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label className={css.label} htmlFor="email">
          Email
          <Field type="email" name="email" className={css.input} />
        </label>
        <ErrorMessage name="email" component="div" className={css.message} />

        <label className={css.label} htmlFor="password">
          Password
          <Field type="password" name="password" className={css.input} />
        </label>
        <ErrorMessage name="password" component="div" className={css.message} />

        <button type="submit" className={css.btn}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
