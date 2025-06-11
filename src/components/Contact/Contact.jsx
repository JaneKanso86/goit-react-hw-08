import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { UserIcon } from '@heroicons/react/24/solid';
import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';
import toast from 'react-hot-toast';
import EditContactModal from '../EditContact/EditContact';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [showModal, setModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
      .unwrap()
      .then(() => {
        toast.success(`Contact ${contact.name} been delited`);
        setModal(false);
      })
      .catch(() => {
        toast.error('Something went wrong...');
      });
  };

  return (
    <div className={css.card}>
      <div>
        <UserIcon className={css.icon} />
      </div>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <div className={css.operation}>
        <button
          className={css.btn}
          onClick={() => {
            setModal(true);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => setShowEdit(true)}
          className={css.btn}
          style={{ width: '78px' }}
        >
          Edit
        </button>
      </div>

      {showModal && (
        <ConfirmModal
          message={`Are you sure you want to delete ${contact.name}?`}
          onConfirm={handleDelete}
          onCancel={() => setModal(false)}
        />
      )}

      {showEdit && (
        <EditContactModal
          contact={contact}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  );
}
