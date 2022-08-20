import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetch', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
    }
});

export const saveContact = createAsyncThunk('contact/save', async (contact, thunkAPI) => {
    try {
        const { data } = await axios.post('/contacts', contact);
        toast.success(`New contact was added!`);
        return data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk('contact/delete', async (id, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${id}`);
        toast.info(`The contact was deleted!`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

