import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import toast from 'react-hot-toast';
import css from './EditContact.module.css';

export default function EditContactModal({ contact, onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact({ id: contact.id, data: { name, number } }))
      .unwrap()
      .then(() => {
        toast.success('Contact updated');
        onClose();
      })
      .catch(() => toast.error('Unexpected error'));
  };

  return (
    <div className={css.modalBackdrop} onClick={onClose}>
      <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Number
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
