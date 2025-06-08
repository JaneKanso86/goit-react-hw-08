import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';

export default function RegistrationForm({ onSubmit }) {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Please enter your name')
      .min(3, 'Name must be at least 3 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter your email'),
    password: Yup.string()
      .required('Please enter your password')
      .min(6, 'Password must be at least 6 characters'),
  });

  const handleSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form} autoComplete="off">
          <div className={styles.fieldGroup}>
            <label htmlFor={nameId}>Name</label>
            <Field
              id={nameId}
              name="name"
              type="text"
              className={styles.formField}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={styles.error}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor={emailId}>Email</label>
            <Field
              id={emailId}
              name="email"
              type="email"
              className={styles.formField}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={styles.error}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor={passwordId}>Password</label>
            <Field
              id={passwordId}
              name="password"
              type="password"
              className={styles.formField}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={styles.error}
            />
          </div>

          <button type="submit" className={styles.button}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
