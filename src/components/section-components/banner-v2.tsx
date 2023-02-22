import React, {Component} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import HomeImg1 from '../../assets/img/Luxemburg.jpg'
import HomeImg2 from '../../assets/img/home2.jpg'
import HomeImg3 from '../../assets/img/home4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class BannerV2 extends Component {
  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <Swiper
        slidesPerView={1}
      className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
      <div className="ltn__slider-11-inner">
        <div className="ltn__slider-11-active">
          {/* slide-item */}
          <SwiperSlide
            className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11 slick-current">
            <div className="ltn__slide-item-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <a className="ltn__video-icon-2 ltn__video-icon-2-border"
                             href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                            <i className="fa fa-play"/>
                          </a>
                        </div>
                        <h6 className="slide-sub-title white-color--- animated"><span><i
                          className="fas fa-home"/></span>DIGITAL REAL ESTATE PORTFOLIO
                        </h6>
                        <h1 className="slide-title animated "><span>M<sup>2</sup></span> - новый мир инвестиций в
                          недвижимость</h1>
                        <div className="slide-brief animated">
                          <p>
                            Инвестиции в недвижимость от 1м2
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          <Link href="/about" className="theme-btn-1 btn btn-effect-1">Зарегистрироваться</Link>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item-img">
                      <Image src={HomeImg1} alt="#" fill={true} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide-item */}
          <SwiperSlide
            className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
            <div className="ltn__slide-item-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <a className="ltn__video-icon-2 ltn__video-icon-2-border"
                             href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                            <i className="fa fa-play"/>
                          </a>
                        </div>
                        <h6 className="slide-sub-title white-color--- animated"><span><i
                          className="fas fa-home"/></span>DIGITAL REAL ESTATE PORTFOLIO
                        </h6>
                        <h1 className="slide-title animated "><span>M<sup>2</sup></span> - новый мир инвестиций в
                          недвижимость</h1>
                        <div className="slide-brief animated">
                          <p>
                            Инвестиции в недвижимость от 1м2
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          <Link href="/about" className="theme-btn-1 btn btn-effect-1">Зарегистрироваться</Link>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item-img">
                      <Image src={HomeImg2} alt="#"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide-item */}
          <SwiperSlide
            className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
            <div className="ltn__slide-item-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50 d-none">
                          <a className="ltn__video-icon-2 ltn__video-icon-2-border"
                             href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
                            <i className="fa fa-play"/>
                          </a>
                        </div>
                        <h6 className="slide-sub-title white-color--- animated"><span><i
                          className="fas fa-home"/></span>DIGITAL REAL ESTATE PORTFOLIO
                        </h6>
                        <h1 className="slide-title animated "><span>M<sup>2</sup></span> - новый мир инвестиций в
                          недвижимость</h1>
                        <div className="slide-brief animated">
                          <p>
                            Инвестиции в недвижимость от 1м2
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          <Link href="/about" className="theme-btn-1 btn btn-effect-1">Зарегистрироваться</Link>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item-img">
                      <Image src={HomeImg3} alt="#"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        {/* slider-4-pagination */}
        <div className="ltn__slider-11-pagination-count">
          <span className="count"/>
          <span className="total"/>
        </div>
        {/* slider-sticky-icon */}
        <div className="slider-sticky-icon-2">
          <ul>
            <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"/></a></li>
            <li><a href="#" title="Twitter"><i className="fab fa-twitter"/></a></li>
            <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"/></a></li>
          </ul>
        </div>
        {/* slider-4-img-slide-arrow */}
        <div className="ltn__slider-11-img-slide-arrow">
          <div className="ltn__slider-11-img-slide-arrow-inner">
            <div className="ltn__slider-11-img-slide-arrow-active">
              <div className="image-slide-item">
                <Image src={HomeImg1} alt="Flower Image"/>
              </div>
              <div className="image-slide-item">
                <Image src={HomeImg2} alt="Flower Image"/>
              </div>
              <div className="image-slide-item">
                <Image src={HomeImg3} alt="Flower Image"/>
              </div>
            </div>
            {/* slider-4-slide-item-count */}
            <div className="ltn__slider-11-slide-item-count">
              <span className="count"/>
              <span className="total"/>
            </div>
          </div>
        </div>
      </div>
    </Swiper>

  }
}

export default BannerV2
