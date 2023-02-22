import React, {Component} from 'react';
import Link from 'next/link';
import Image from "next/image";
import bg from '../../../public/assets/img/home_bg.jpg'
import img1 from '../../assets/img/home3.jpg'
import {Swiper, SwiperSlide} from "swiper/react";
import useBuildingsList from "../../data/useBuildings";
import UpcomingProductCard from "./building-components/upcomming-product-card";


const UpcomingProductV1 = () =>{
    const {buildings, loading,} = useBuildingsList();

    return <div className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-115 pb-65" style={{backgroundImage: `url(/assets/img/home_bg.jpg)`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center---">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Инвестиционные
                проекты</h6>
              <h1 className="section-title  white-color">Откройте для себя инвестиционные <br/>
                возможности вместе с <span>M<sup>2</sup></span></h1>
            </div>
          </div>
        </div>
        <Swiper className="row ltn__upcoming-project-slider-1-active slick-arrow-3">
          {!loading && buildings.map(building=><UpcomingProductCard building={building} key={building._id}/>)}
        </Swiper>
      </div>
    </div>

}

export default UpcomingProductV1
