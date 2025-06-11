import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import toast from 'react-hot-toast';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    )
      .unwrap()
      .then(() => {
        console.log('registration success');
        resetForm();
      })
      .catch(() => {
        toast.error(
          'This email might be already in use. Please try another one!',
        );
      });
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Name required';
        }

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
        <label className={css.label} htmlFor="name">
          Username
          <Field type="text" name="name" className={css.input} />
        </label>
        <ErrorMessage name="name" component="div" className={css.message} />

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
          Register
        </button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
