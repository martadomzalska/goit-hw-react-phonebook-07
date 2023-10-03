import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';
import css from './Form.module.css';

export const ContactForm = ({ onSubmit }) => {
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const existingContact = contacts.find(contact => contact.name === name);

    if (existingContact) {
      alert(`${existingContact.name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }

    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.form_input}
            type="text"
            // value={name}
            // onChange={handleChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.form_input}
            type="tel"
            // value={number}
            // onChange={handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add to contacts
        </button>
      </form>
    </>
  );
};
