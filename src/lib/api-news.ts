import axios from '../utils/axios';
import {AxiosError} from "axios";

export async function fetchNewsData() {
  try{
    const response = await axios.get('/api/news')
    const data = response.data

    return {data: data}
  }
  catch(err){
    return {error: err}
  }
}

export async function fetchNewsimageData() {
  try{
    const response = await axios.get('/api/newsImage/')
    const data = response.data

    return {data: data}
  }
  catch(err){
    return {error: err}
  }
}
