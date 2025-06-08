import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter, selectNameFilter } from '../../redux/filters/slice.js';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div>
      <label className="contact_form">
        Find contacts by name
        <input
          className="contact_form_field"
          type="text"
          value={filter}
          onChange={(e) => dispatch(setNameFilter(e.target.value))}
          placeholder="Search contacts"
        />
      </label>
    </div>
  );
}
