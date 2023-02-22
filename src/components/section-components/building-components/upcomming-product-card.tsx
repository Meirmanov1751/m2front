import React from 'react';
import {Building} from "../../../store/models/building.interface";
import {SwiperSlide} from "swiper/react";
import Image from "next/image";
import img1 from "../../../assets/img/home3.jpg";
import Link from "next/link";
import useCity from "../../../data/useCity";
import moment from "utils/moment";
import {ChartComponent} from "./chart-component";

function UpcomingProductCard({building}: {building: Building}) {

    const {city, loading} = useCity(building.cityId)

    if(loading) {
        return <div></div>
    }
    let date = moment().add(building.passDate).calendar()
    return (
        <SwiperSlide className="col-lg-12">
            <div className="ltn__upcoming-project-item">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ltn__upcoming-project-img">
                            <Image src={img1}  className="w-full" layout="responsive" objectFit="contain" alt="#"/>
                        </div>
                        <ChartComponent building={building}/>
                    </div>
                    <div className="col-lg-7 ">

                            <div className="ltn__upcoming-project-info ltn__menu-widget  section-bg-1">
                                <h6 className="section-subtitle ltn__secondary-color mb-0">Про проект</h6>
                                <h1 className="mb-30">{building.name}</h1>
                                <ul className="mt">
                                    <li>1. Название проекта: <span>{building.name}</span></li>
                                    <li>2. Общая площадь: <span>{building.totalArea} м²</span></li>
                                    <li>3. Минимальная сумма инвестиций: <span>{building.totalArea} м²</span></li>
                                    <li>4. Местоположение: <span>{city.name}</span></li>
                                    <li>5. Срок сдачи: <span>{date}</span></li>
                                    <li>6. Возможность перепродажи доли: <span>есть</span></li>
                                    <li>7. Таргетированная доходность: <span>до {building.incomePercentage}%</span></li>
                                </ul>
                            </div>

                        <div className="btn-wrapper animated go-top">
                            <Link href={`/building/${building._id}`} className="theme-btn-1 btn btn-effect-1">Посмотреть</Link>
                        </div>
                    </div>

                </div>
            </div>
        </SwiperSlide>


    );
}

export default UpcomingProductCard;