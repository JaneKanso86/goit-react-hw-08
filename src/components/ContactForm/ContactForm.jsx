import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from '../../redux/contacts/operations';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(
      addContact({
        name: value.name,
        number: value.number,
      }),
    )
      .unwrap()
      .then(() => {
        toast.success('Contact been successfully added');
        actions.resetForm();
      })
      .catch(() => {
        toast.error('Something went wrong...');
      });
  };

  return (
    <div className={css.card}>
      <Formik
        initialValues={{ name: '', number: '' }}
        validate={(values) => {
          const error = {};

          if (!values.number) {
            error.number = 'Required phone number';
          } else if (!/^\d{3}-\d{2}-\d{2}$/.test(values.number)) {
            error.number = 'Please enter phone format 999-99-99';
          }
          return error;
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.label}>
            Name
            <Field type="text" name="name" id="name" className={css.field} />
            <ErrorMessage
              name="name"
              component="span"
              className={css.message}
            />
          </label>

          <label htmlFor="number" className={css.label}>
            Number
            <Field
              type="text"
              name="number"
              id="number"
              className={css.field}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.message}
            />
          </label>

          <button type="submit" className={css.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
