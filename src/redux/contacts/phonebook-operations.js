import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
    try {
        const { data } = await axios.get('/contacts');
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const saveContact = createAsyncThunk('contact/save', async contact => {
    try {
        const { data } = await axios.post('/contacts', contact);
        toast.success(`New contact was added!`);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const deleteContact = createAsyncThunk('contact/delete', async id => {
    try {
        await axios.delete(`/contacts/${id}`);
        toast.info(`The contact was deleted!`);
        return id;
    } catch (error) {
        console.log(error);
    }
})

