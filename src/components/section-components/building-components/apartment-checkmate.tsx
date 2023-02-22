import React from 'react';
import ApartmentCard from "./apartment-card";
import {Building} from "../../../store/models/building.interface";
import useApartments from "../../../data/useApartments";

function ApartmentCheckmate({building}: {building: Building}) {

    const {apartments, loading} = useApartments(building._id)
    if(loading) return null;
    return (
        <div className="row">
            {apartments.map(apartment=><ApartmentCard apartment={apartment} key={apartment._id}/>)}
        </div>
    );
}

export default ApartmentCheckmate;