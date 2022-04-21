import axios from 'axios';

export default axios.create({
    baseURL: "https://wellbingo.herokuapp.com/api",
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    responseType: 'json'
})