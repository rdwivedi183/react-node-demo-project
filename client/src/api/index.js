import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000' });
const url = 'http://localhost:5000/posts';

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))}`
    }

    return req;
});

export const fetchPosts = () => API.get('/posts'); 

export const createPost = (newPost) => API.post('/posts', newPost);

export const likePost = (id) => API.patch(`/posts/${url}/${id}/likePost`);

export const updatePost = (id, updatedPost) => API.patch(`/posts/${url}/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${url}/${id}`);


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);