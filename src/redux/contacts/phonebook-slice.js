import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { saveContact, fetchContacts, deleteContact } from "./phonebook-operations";

const initialState = {
    contacts: [],
    isLoading: false,
    error: null,
}

export const contactsSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (state) => {
             state.isLoading = true;
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.contacts = action.payload;
            state.isLoading = false;
        },
        [fetchContacts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [saveContact.pending]: (state) => {
            state.isLoading = true;
        },
        [saveContact.fulfilled]: (state, action) => {
            state.contacts.push(action.payload);
            state.isLoading = false;
        }, 
        [saveContact.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.pending]: (state) => {
             state.isLoading = true;
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.contacts = state.contacts.filter(item => item.id !== action.payload);
            state.isLoading = false;
        },
        [deleteContact.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changeFilter(_, action) {
            return action.payload;
        }
    }
});

export const phonebookReducer = combineReducers({
    items: contactsSlice.reducer,
    filter: filterSlice.reducer,
})

