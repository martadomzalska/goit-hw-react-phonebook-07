import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const inputValue = e.target.value;
    dispatch(filterContacts(inputValue));
  };

  return (
    <>
      <label>
        Find contacts by name
        <input className={css.input} type="name" onChange={handleChange} />
      </label>
    </>
  );
};