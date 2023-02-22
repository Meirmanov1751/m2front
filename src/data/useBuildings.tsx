import useSWR from 'swr';
import {Building} from "../store/models/building.interface";


export default function useBuildingsList(limit?: number, sort?: string):{
    loading: boolean,
    buildings: Building[],
    mutate: any
} {
    let params = '';
    if(limit) params += `?limit=${limit}`;
    else if(limit && sort) params += `?limit=${limit}&sort=${sort}`;
    else if(sort) params += `?sort=${sort}`;
    const { data, mutate, error } = useSWR(`/api/building${params}`);

    const loading = !data && !error;

    return {
        loading,
        buildings: data,
        mutate,
    };
}