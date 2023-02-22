import useSWR from 'swr';
import {Building, City} from "../store/models/building.interface";


export default function useCities():{
    loading: boolean,
    cities: City[],
    mutate: any
} {
    const { data, mutate, error } = useSWR('/api/city');

    const loading = !data && !error;

    return {
        loading,
        cities: data,
        mutate,
    };
}