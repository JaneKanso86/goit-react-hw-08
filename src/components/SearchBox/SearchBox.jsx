import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filters/selectors';
import { setFilter } from '../../redux/filters/slice';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const debounced = useDebouncedCallback(
    (value) => dispatch(setFilter(value.trim())),
    400,
  );

  return (
    <div>
      <input
        type="text"
        className={css.filter}
        value={filter}
        onChange={(e) => debounced(e.target.value)}
        placeholder="Search contacts..."
      />
    </div>
  );
}
