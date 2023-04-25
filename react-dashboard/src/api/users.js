import axios from 'axios';

const usersApi = axios.create({
    baseURL: 'https://randomuser.me/api/',
});

export const getUsers = async () => {
    const res = await usersApi.get('?results=10');
    return res.data;
};

export default usersApi;
