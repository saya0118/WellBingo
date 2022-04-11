import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:7777/api",
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    responseType: 'json'
})