import { lazy } from "react";

const ContactForm = lazy(() => import('../components/parts/ContactForm'))
const ContactList = lazy(() => import('../components/parts/ContactList'))

const PhoneBook = () => {
   return (
      <div>
         <h1>Phonebook</h1>
         <ContactForm/>
         <h2>Contacts</h2>
         <ContactList/>
      </div>
      )
}

export default PhoneBook;
