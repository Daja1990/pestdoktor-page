import axios from 'axios';

const axiosInstanceTwo = axios.create({
    baseURL: `https://corona.lmao.ninja`
});

export default axiosInstanceTwo;