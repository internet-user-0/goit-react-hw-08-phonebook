import { lazy } from "react";

const ContactForm = lazy(() => import('../components/parts/ContactForm'))
const ContactList = lazy(() => import('../components/parts/ContactList'))

const PhoneBook = () => {
   return (
      <div>
         <ContactForm/>
         <ContactList/>
      </div>
      )
}

export default PhoneBook;
