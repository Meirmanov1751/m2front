import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { Building } from 'store/models/building.interface';
import useCity from "../../data/useCity";

function PopularBuildingCard({building}: {building: Building}) {
    const {city} = useCity(building.cityId)
    return (
        <div className="col-12">
            <div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
                <div className="product-img go-top">
                    <Link href="/shop"><Image  src={"assets/img/product-3/6.jpg"} fill={true} alt="#"/></Link>
                    <div className="real-estate-agent">
                        <div className="agent-img">
                            <Link href="/team-details"><Image src={"assets/img/product-3/1.jpg"} fill={true}
                                                              alt="#"/></Link>
                        </div>
                    </div>
                </div>
                <div className="product-info pb-10">
                    <div className="product-price">
                        <span>{building.averagePrice}<label> ₸/m <sup>2</sup></label></span>
                    </div>
                    <h2 className="product-title"><Link href="/shop">{building.name}</Link></h2>
                    <div className="product-img-location">
                        <ul>
                            <li>
                                <Link href="/shop"><i className="flaticon-pin"/> {building.address}, {city.name}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularBuildingCard;