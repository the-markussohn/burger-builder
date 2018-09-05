import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sohn-burger-builder.firebaseio.com/'
});

export default instance;