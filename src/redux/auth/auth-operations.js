import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        toast.success(`Hi ${data.user.name}, now you are registered!`);
        return data;
    } catch (error) {
        console.log(error);
        toast.error('Sorry... Something went wrong');
    }
})

export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        toast.success(`Hi ${data.user.name}, you've logged in!`);
        return data;
    } catch (error) {
        console.log(error);
        toast.error('Something went wrong, check your email o password');
    }
})