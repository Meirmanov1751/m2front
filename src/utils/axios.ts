import axios from 'axios';
let token;
if (typeof window !== 'undefined') {
   token =  window.localStorage ? window.localStorage.getItem('token') : null;
}
const axiosData = {
    baseURL: process.env["NEXT_PUBLIC_BASE_URL"],
    headers: {
        'Content-Type': 'application/json'
    }
};
if (token) {
    // @ts-ignore
    axiosData.headers['x-access-token'] = token;
}
const api = axios.create(axiosData);

export default api;
const fetcher = (url: string) => api.get(url).then(res => res.data)
export {fetcher}