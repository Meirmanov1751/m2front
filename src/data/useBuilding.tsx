import useSWR from 'swr';
import {Building} from "../store/models/building.interface";


export default function useBuilding(id: string):{
    loading: boolean,
    building: Building,
    mutate: any
} {
    const { data, mutate, error } = useSWR(`/api/building/${id}`);

    const loading = !data && !error;

    return {
        loading,
        building: data,
        mutate,
    };
}