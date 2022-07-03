import axios from "axios";

/**
 * para facilitar as requisições para o backend
 * biblioteca axios.
 */
export const api = axios.create({
    baseURL: 'http://localhost:3000/api',//url base

})