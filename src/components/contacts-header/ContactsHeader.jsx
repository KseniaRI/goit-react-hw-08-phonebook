import { PageTitle } from "components/page-title/PageTitle";
import PropTypes from 'prop-types';
import { StyledContactsHeader } from "./ContactsHeader.styled";

export const ContactsHeader = () => {
    return (
        <StyledContactsHeader>
            <PageTitle title="Contacts"/>
        </StyledContactsHeader>
    )
}

ContactsHeader.propTypes = {
    title: PropTypes.string.isRequired,
}