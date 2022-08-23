import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners"
import { deleteContact } from "redux/contacts/phonebook-operations";
import { getIsLoading } from "redux/contacts/phonebook-selectors";
import { DeleteButton, ItemWrap, StyledListGroupItem} from "./ContactList.styled"

export const ContactItem = ({ id, name, number }) => {
    const isDeleting = useSelector(getIsLoading);
    const dispatch = useDispatch();

    const [selectedId, setSelectedId] = useState(null);
   
    return (
        <StyledListGroupItem as="li"
            action>
            <ItemWrap>{name}:</ItemWrap><ItemWrap>{number}</ItemWrap>
            <ItemWrap>
            <DeleteButton type="button" onClick={() => {
                setSelectedId(id);
                dispatch(deleteContact(id));
                }
            }
                disabled={isDeleting}>
                {id === selectedId && <ClipLoader loading={isDeleting} size={10} />}  
                Delete
                </DeleteButton>
                </ItemWrap>
        </StyledListGroupItem>
    )
}