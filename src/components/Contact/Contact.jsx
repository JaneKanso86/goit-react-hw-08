import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.card}>
      <div>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <div>
        <button className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
