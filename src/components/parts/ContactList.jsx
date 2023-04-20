import React, { lazy, useEffect, useState } from 'react';
import { selectAllContacts } from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import css from './/ContactList.module.css';

const Filter = lazy(() => import('./Filter'));

const ContactList = () => {
   const [filter, setFilter] = useState('');
   const dispatch = useDispatch();
   const contacts = useSelector(selectAllContacts);

   useEffect(() => {
      dispatch(fetchContacts());
   }, [dispatch ]);

   function changeFilter(e) {
      setFilter(e.currentTarget.value);
   };

   const normalizeFilter = filter.toLowerCase();

   const visibleContacts =
      contacts &&
      contacts.filter(contact =>
         contact.name.toLowerCase().includes(normalizeFilter)
      );

   return (
      <>
         <Filter value={filter} onChange={changeFilter} />
         <ul>
            {visibleContacts &&
               visibleContacts.map(({ id, name, number }) => {
                  return (
                     <li className={css.list__item} key={id}>
                        {name}: {number}{' '}
                        <button
                           className={css.list__btnDelete}
                           type="submit"
                           onClick={e => {
                              e.preventDefault();
                              dispatch(deleteContact(id));
                           }}
                        >
                           delete
                        </button>
                     </li>
                  );
               })}
         </ul>
      </>
   );
};

export default ContactList;
