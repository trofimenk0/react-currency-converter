import axios from 'axios';

const axiosFastforexApiInstance = axios.create({
    baseURL: 'https://api.fastforex.io/',
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        'api_key': '32632ba376-6fd2bbc0e5-rhqy6l'
    },
});

const axiosPrivatbankApiInstance = axios.create({
    baseURL: 'https://api.privatbank.ua/p24api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export { axiosFastforexApiInstance, axiosPrivatbankApiInstance };