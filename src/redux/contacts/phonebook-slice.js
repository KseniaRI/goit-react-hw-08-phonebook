import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { saveContact, fetchContacts, deleteContact } from "./phonebook-operations";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    extraReducers: {
        [fetchContacts.fulfilled](state, action) {
            return action.payload;
        },
        [saveContact.fulfilled](state, action) {
            state.push(action.payload);
        }, 
        [deleteContact.fulfilled](state, action) {
              return state.filter(item => item.id !== action.payload);
         }
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
    items: itemsSlice.reducer,
    filter: filterSlice.reducer,
})

