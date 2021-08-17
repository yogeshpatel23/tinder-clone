import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-server0.herokuapp.com',
});

export default instance;