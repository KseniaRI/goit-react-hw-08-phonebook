import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getIsLoading, getVisibleContacts } from 'redux/contacts/phonebook-selectors';
import { Contacts, ListClipLoader} from './ContactList.styled';

import { ContactItem } from './ContactItem';


export const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);
    const isFetching = useSelector(getIsLoading);

    return (
        <Contacts>
            <ListClipLoader loading={isFetching} size={50} />
            {contacts && contacts.map(({ id, name, number }) => <ContactItem key={id} id={id} name={name} number={number}/>)}
        </Contacts>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}