import useSWR from 'swr';
import {Building, City} from "../store/models/building.interface";


export default function useCity(id: string):{
    loading: boolean,
    city: City,
    mutate: any
} {
    const { data, mutate, error } = useSWR(`/api/city/${id}`);

    const loading = !data && !error;

    return {
        loading,
        city: data,
        mutate,
    };
}