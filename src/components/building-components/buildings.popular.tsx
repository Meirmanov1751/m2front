import React from 'react';
import Link from "next/link";
import Image from "next/image";
import useBuildingsList from "../../data/useBuildings";
import {build} from "esbuild";
import PopularBuildingCard from "./popular-building-card";

function BuildingsPopular() {
    const {buildings, loading} = useBuildingsList(3)
    if(loading) return null;
    return (
        <div className="widget ltn__popular-product-widget">
            <h4 className="ltn__widget-title ltn__widget-title-border-2">Популярные предложения</h4>
            <div className="row ltn__popular-product-widget-active slick-arrow-1">
                {/* ltn__product-item */}
                {buildings.map(building=> <PopularBuildingCard building={building} key={building._id}/>)}


            </div>
        </div>
    );
}

export default BuildingsPopular;