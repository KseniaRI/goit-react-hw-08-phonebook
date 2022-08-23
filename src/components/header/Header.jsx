import PropTypes from 'prop-types';
import { PageTitle } from "components/page-title/PageTitle";
import { StyledHeader } from "./Header.styled"

export const Header = () => {
    return (
        <StyledHeader>
            <PageTitle title="Phonebook"/>
        </StyledHeader>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}