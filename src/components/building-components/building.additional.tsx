import React from 'react';
import ReactPlayer from "react-player";
import {BUILDING_ADDITIONAL_TYPES, IBuildingAdditional} from "../../store/models/building.additional.interface";

function BuildingAdditional({additional}: {additional: IBuildingAdditional}) {
    if(additional.type === BUILDING_ADDITIONAL_TYPES.IMAGE){
        return (
            <div>
                <h4 className="title-2">{additional.title}</h4>
                <img src={additional.url} className="w-full" />
            </div>
        )
    }
    return (
        <div>
            <h4 className="title-2">{additional.title}</h4>
            <ReactPlayer url={additional.url} />
        </div>
    );
}

export default BuildingAdditional;