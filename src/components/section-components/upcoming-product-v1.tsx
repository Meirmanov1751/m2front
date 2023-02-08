import React, {Component} from 'react';
import Link from 'next/link';
import Image from "next/image";
import bg from '../../assets/img/home_bg.jpg'
import img1 from '../../assets/img/home3.jpg'


class UpcomingProductV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return <div className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-115 pb-65" data-bs-bg={bg}>
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
        <div className="row ltn__upcoming-project-slider-1-active slick-arrow-3">
          {/* upcoming-project-item */}
          <div className="col-lg-12">
            <div className="ltn__upcoming-project-item">
              <div className="row">
                <div className="col-lg-7">
                  <div className="ltn__upcoming-project-img">
                    <Image src={img1} fill={true} alt="#"/>
                  </div>
                </div>
                <div className="col-lg-5 section-bg-1">
                  <div className="ltn__upcoming-project-info ltn__menu-widget">
                    <h6 className="section-subtitle ltn__secondary-color mb-0">Про проект</h6>
                    <h1 className="mb-30">Проект N1</h1>
                    <ul className="mt">
                      <li>1. Название проекта: <span>Quarter</span></li>
                      <li>2. Тип проекта: <span>Инвестиция</span></li>
                      <li>3. Местоположение: <span>Алматы</span></li>
                      <li>4. Длительность: <span>24 месяцев</span></li>
                      <li>5. Доходность: <span>до 30%</span></li>
                    </ul>
                    <div className="btn-wrapper animated go-top">
                      <Link href="/contact" className="theme-btn-1 btn btn-effect-1">Посмотреть</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="ltn__upcoming-project-item">
              <div className="row">
                <div className="col-lg-7">
                  <div className="ltn__upcoming-project-img">
                    <Image src={img1} alt="#"/>
                  </div>
                </div>
                <div className="col-lg-5 section-bg-1">
                  <div className="ltn__upcoming-project-info ltn__menu-widget">
                    <h6 className="section-subtitle ltn__secondary-color mb-0">Про проект</h6>
                    <h1 className="mb-30">Проект N2</h1>
                    <ul className="mt">
                      <li>1. Название проекта: <span>Quarter</span></li>
                      <li>2. Тип проекта: <span>Инвестиция</span></li>
                      <li>3. Местоположение: <span>Алматы</span></li>
                      <li>4. Длительность: <span>24 месяцев</span></li>
                      <li>5. Доходность: <span>до 30%</span></li>
                    </ul>
                    <div className="btn-wrapper animated go-top">
                      <Link href="/contact" className="theme-btn-1 btn btn-effect-1">Посмотреть</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/*  */}
        </div>
      </div>
    </div>
  }
}

export default UpcomingProductV1
