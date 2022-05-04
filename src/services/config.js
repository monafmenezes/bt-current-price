import axios from "axios";

export const http = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3'
})