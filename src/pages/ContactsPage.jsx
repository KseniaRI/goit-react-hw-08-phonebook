
import { ContactList } from "components/contact-list/ContactList";
import { ContactsHeader } from "components/contacts-header/ContactsHeader";
import { Filter } from "components/filter/Filter";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { fetchContacts } from "redux/contacts/phonebook-operations";


const ContactsPage = () => {
   
    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <Container>
           <ContactsHeader/>
           <Filter/>
           <ContactList /> 
        </Container>    
    )
}

export default ContactsPage;