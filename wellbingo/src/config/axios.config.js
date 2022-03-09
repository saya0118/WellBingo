import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    responseType: 'json'
})