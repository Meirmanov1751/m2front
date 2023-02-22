import React, {Component} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image'
import {Swiper, SwiperSlide} from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const ProductSliderV1 = ()=> {

    let publicUrl = process.env.PUBLIC_URL + '/'

    return <div className="mb-90">

        <Swiper className=" ltn__no-gutter-all" slidesPerView={2} navigation modules={[Navigation, Pagination, Scrollbar, A11y]}  centeredSlides={true}>
          <SwiperSlide>

                <img src={"/assets/img/img-slide/31.jpg"}  alt="Image"/>

          </SwiperSlide>
          <SwiperSlide>
            <img src={"/assets/img/img-slide/31.jpg"}  alt="Image"/>
          </SwiperSlide>
          <SwiperSlide>

            <img src={"/assets/img/img-slide/31.jpg"}  alt="Image"/>

          </SwiperSlide>
        </Swiper>
    </div>
}

export default ProductSliderV1
