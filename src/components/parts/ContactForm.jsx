import css from './/ContactForm.module.css';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
   const dispatch = useDispatch();
   const contactNames = useSelector(selectAllContacts).map(
      contact => contact.name
   );

   const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      const name = form.elements.name.value;
      const number = form.elements.number.value;

      if (contactNames.includes(name)) {
         alert(name + ' is already in contacts');
         form.reset();
         return;
      }
      if (name !== '' && number !== '') {
         dispatch(addContact({ name, number }));
         form.reset();
         return;
      }
      alert('Contact cannot be empty. Enter some text');
   };

   return (
      <div>
         <form className={css.form__addContacts} onSubmit={handleSubmit}>
            <label className={css.form__label}>
               <p className={css.form__text}>Name</p>
               <input
                  className={css.form__input}
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
               />
            </label>
            <label className={css.form__label}>
               <p className={css.form__text}>Number</p>
               <input
                  className={css.form__input}
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
               />
            </label>
            <br />
            <button className={css.form__btn} type="submit">
               Add contact
            </button>
         </form>
      </div>
   );
};

export default ContactForm;
