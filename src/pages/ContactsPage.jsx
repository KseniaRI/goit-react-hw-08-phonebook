
import { ContactList } from "components/contact-list/ContactList";
import { Filter } from "components/filter/Filter";
import { SectionTitle } from "components/section-title/SectionTitle";
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
           <SectionTitle title="Contacts"/>
           <Filter/>
           <ContactList /> 
        </Container>    
    )
}

export default ContactsPage;