import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter, selectNameFilter } from '../../redux/filters/slice.js';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div>
      <label className={css.contact_form}>
        Find contacts by name
        <input
          className={css.contact_form_field}
          type="text"
          value={filter}
          onChange={(e) => dispatch(setNameFilter(e.target.value))}
          placeholder="Search contacts"
        />
      </label>
    </div>
  );
}
