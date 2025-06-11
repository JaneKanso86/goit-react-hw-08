import css from './ConfirmModal.module.css';

export const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={css.modalBackdrop}>
      <div className={css.modal}>
        <p className={css.text}>{message}</p>
        <div className={css.actions}>
          <button className={css.button} onClick={onCancel}>
            Cancel
          </button>
          <button className={css.button} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};
