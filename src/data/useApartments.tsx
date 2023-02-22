import useSWR from 'swr';
import {Building} from "../store/models/building.interface";
import {Apartment} from "../store/models/apartment.interface";


export default function useApartments(buildingId:string):{
    loading: boolean,
    apartments: Apartment[],
    mutate: any
} {
    const { data, mutate, error } = useSWR(`/api/apartment?building_id=${buildingId}`);

    const loading = !data && !error;

    return {
        loading,
        apartments: data,
        mutate,
    };
}