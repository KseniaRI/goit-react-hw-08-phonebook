import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/phonebook-selectors';
import { Contacts, Contact, DeleteButton, Tel } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/phonebook-operations';



export const ContactList = () => {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    return (
        <Contacts>
            {contacts.map(({ id, name, number }) => { 
                
                return (
                        <Contact key={id}>{name}: <Tel>{number}</Tel>
                        <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteButton>
                        </Contact>
                )
            }
            )}
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