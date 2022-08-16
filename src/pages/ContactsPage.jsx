import { Box } from "components/Box"
import { ContactList } from "components/contact-list/ContactList";
import { Filter } from "components/filter/Filter";
import { SectionTitle } from "components/section-title/SectionTitle";


export const ContactsPage = () => {
    return (
        <Box as="div">
            <SectionTitle title="Contacts"/>
            <Filter/>
           <ContactList/> 
        </Box>
    )
}