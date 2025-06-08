import { useDispatch } from 'react-redux';
import css from './ContactForm.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from '../../redux/contacts/operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    if (
      form.elements.name.value.trim() == '' ||
      form.elements.number.value.trim() == ''
    ) {
      toast.error('Please fill both fields.');
      return;
    }

    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      }),
    );
    form.reset();
  };

  return (
    <div className={css.card}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className={css.field} />

        <label htmlFor="number">Number</label>
        <input type="text" name="number" id="number" className={css.field} />

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
