import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import {Apartment} from "../../../store/models/apartment.interface";
function ApartmentCard({apartment}: {apartment: Apartment}) {
    return (
        <div className="widget col-lg-6">
            <img src="/assets/img/apartment/placeholder.png"  className="w-full" alt={''}/>
            <ul>
            <li>Количество комнат: {apartment.name}</li>
            <li>Площадь: {apartment.area}m2 </li>
            <li>Выкуплено: {apartment.soldArea}m2/{apartment.area}m2 </li>
            </ul>
            <div className="btn-wrapper animated go-top">
                <button className="theme-btn-1 btn btn-effect-1">Инвестировать</button>
            </div>
        </div>
    );
}

export default ApartmentCard;