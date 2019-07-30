import axios from 'axios';

const Instance = axios.create({
    baseURL: 'https://react-my-burger-a07fe.firebaseio.com/' 
});

export default Instance;