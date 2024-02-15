import axios from 'axios';

const token = localStorage.getItem('accessToken');

const client = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export default client;