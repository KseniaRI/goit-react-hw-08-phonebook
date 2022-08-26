import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/contacts/phonebook-operations";
import { getIsLoading } from "redux/contacts/phonebook-selectors";
import PropTypes from 'prop-types';
import { ClipLoader } from "react-spinners"
import { DeleteButton, ItemWrap, StyledListGroupItem} from "./ContactList.styled"
import { OverlayTrigger, Tooltip } from "react-bootstrap";


export const ContactItem = ({ id, name, number }) => {
    const isDeleting = useSelector(getIsLoading);
    const dispatch = useDispatch();

    const [selectedId, setSelectedId] = useState(null);

    // function Trigger() {
    //     const renderTooltip = (props) => (
    //         <Tooltip id="button-tooltip" {...props}>
    //             The contact will be deleted defenetly
    //         </Tooltip>
    //     );
    // }
   
    return (
        <StyledListGroupItem as="li"
            action>
            <ItemWrap>{name}:</ItemWrap><ItemWrap>{number}</ItemWrap>
            <ItemWrap>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={   <Tooltip id="button-tooltip">
                                    Are you sure? The contact will be deleted.
                                </Tooltip>}
                >
                    <DeleteButton type="button"
                        onClick={() => {
                        setSelectedId(id);
                        dispatch(deleteContact(id));
                         }}
                        disabled={isDeleting}>
                        {id === selectedId && <ClipLoader loading={isDeleting} size={10} />}  
                        Delete
                    </DeleteButton>
                </OverlayTrigger>
            </ItemWrap>
        </StyledListGroupItem>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}