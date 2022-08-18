import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = null;
    }
}

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        toast.success(`Hi ${data.user.name}, now you are registered!`);
        token.set(data.token);
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
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error);
        toast.error('Something went wrong, check your email o password');
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        toast.info(`Bye, see you next time!`);
        token.unset();
    } catch (error) {
        console.log(error);
    }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken) {
        token.set(persistedToken);
        try {
            const response = await axios.get('/users/current');
            return response.data;
        } catch (error) {
            console.log(error);
        }
        
    }
})