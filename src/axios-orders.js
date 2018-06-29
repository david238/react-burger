import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test2-cc3f1.firebaseio.com/'
});

export default instance;