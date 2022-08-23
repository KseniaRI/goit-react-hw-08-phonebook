import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector} from "react-redux";
import { fetchContacts } from "redux/contacts/phonebook-operations";
import { Filter } from "components/filter/Filter";
import { ContactList } from "components/contact-list/ContactList";
import { ContactsHeader } from "components/contacts-header/ContactsHeader";
import { getVisibleContacts } from "redux/contacts/phonebook-selectors";
import { NavLink } from "react-router-dom";
import { Message } from "./auth-pages/AuthPages.styled";

const ContactsPage = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
      <Container>
         <ContactsHeader/>
         <Filter/>
      {contacts.length === 0 ? <Message>There are no contacts yet. <NavLink to='/'>Add contacts</NavLink></Message>
                : <ContactList />}
      </Container>    
  )
}

export default ContactsPage;