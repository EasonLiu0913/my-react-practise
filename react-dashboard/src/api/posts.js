import axios from 'axios';

const postsApi = axios.create({
    baseURL: 'https://dummyjson.com/posts',
});

export const getPosts = async () => {
    const res = await postsApi.get('');
    return res.data;
};

export default postsApi;
