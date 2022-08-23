import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/phonebook-selectors';
import { filterSlice } from 'redux/contacts/phonebook-slice';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Form, InputGroup } from 'react-bootstrap';

export const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <Box as="div"
        display="flex"
        flexDirection="column"
            alignItems="center"
            width="280px"
        m="0 auto">
            <InputGroup className="mb-3">
                <InputGroup.Text><AiOutlineSearch size="24" /></InputGroup.Text>
                <Form.Control 
                    value={value}
                    onChange={(evt) => dispatch(filterSlice.actions.changeFilter(evt.target.value))}
                    placeholder="Find Contact by name"/>
            </InputGroup>
        </Box>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
}
   