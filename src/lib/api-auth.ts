// mock login and logout
import axios from '../utils/axios';
import {AxiosError} from "axios";

export async function login(params: {username: string, password: string}):Promise<{success: any, error: any}> {
    try{
        const response = await axios.post('/api/auth/signin/', params)
        localStorage.setItem('token', response.data.accessToken)
        localStorage.setItem('refToken', response.data.refreshToken)
        axios.defaults.headers['x-access-token'] = response.data.accessToken
        return {success: response.data, error: undefined}
    }
    catch(err){
        return {success: undefined, error: err}
    }
}

export async function register(params: {
    "username": string,
    "password": string,
    "firstname": string,
    "lastname": string,
    "email": string}):Promise<{success: any, error: any}> {
    try{
        await axios.post('/api/auth/signup/', params)
        const {success, error} = await login(params)
        return {success: success, error: error}
    }
    catch(err){
        return {success:undefined, error: err};
    }
}
export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('refToken')
}