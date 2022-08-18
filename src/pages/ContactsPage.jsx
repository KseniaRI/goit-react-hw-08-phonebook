import { Box } from "components/Box"
import { ContactList } from "components/contact-list/ContactList";
import { Filter } from "components/filter/Filter";
import { SectionTitle } from "components/section-title/SectionTitle";
// import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/phonebook-operations";


export const ContactsPage = () => {
   
    const dispatch = useDispatch();
    
    // useEffect(() => dispatch(fetchContacts()), [dispatch]);

    dispatch(fetchContacts());

    return (
        <Box as="div">
            <SectionTitle title="Contacts"/>
            <Filter/>
            <ContactList /> 
        </Box>
    )
}