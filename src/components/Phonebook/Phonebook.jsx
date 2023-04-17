import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// import ContactForm from './parts/ContactForm';
// import ContactList from './parts/ContactList';
// import Filter from './parts/Filter';
import { SharedLayout } from './parts/SharedLayout';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
// import { useFetchContactsQuery } from 'redux/dataContacts';

const Register = lazy(() => import('../../pages/Reqister'));
const Login = lazy(() => import('../../pages/Login'));

const Phonebook = () => {
   const dispatch = useDispatch();
   const { isRefreshing } = useAuth();

   useEffect(() => {
      dispatch(refreshUser());
   }, [dispatch]);
   // const [filter, setFilter] = useState('');

   // const { data } = useFetchContactsQuery();

   // function changeFilter(e) {
   //    setFilter(e.currentTarget.value);
   // }
   // const normalizeFilter = filter.toLowerCase();

   // const visibleContacts =
   //    data &&
   //    data.filter(contact =>
   //       contact.name.toLowerCase().includes(normalizeFilter)
   //    );
   return (
      !isRefreshing && (
         <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<div>contacts</div>} />
            {/* <Route
                  path="/contacts"
                  element={
                     <div>
                        <h1>Phonebook</h1>
                        <ContactForm />
                        <h2>Contacts</h2>
                        <Filter value={filter} onChange={changeFilter} />
                        <ContactList contactsAray={visibleContacts} />
                     </div>
                  }
               /> */}
         </Route>
      </Routes>
      )
   );
};

export default Phonebook;
