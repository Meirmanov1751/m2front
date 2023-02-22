import React, {Component} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import img1 from '../../assets/img/3.jpg'
import {Swiper, SwiperSlide} from "swiper/react";

class BlogSlider extends Component <any> {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let customClass = this.props.customClass ? this.props.customClass : ''
    let sectionClass = this.props.sectionClass ? this.props.sectionClass : ''
    return (
      <div className={"ltn__blog-area pt-115--- pb-70 go-top " + sectionClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className={"section-subtitle ltn__secondary-color " + customClass}>Новости</h6>
                <h1 className="section-title">Последние наши новости</h1>
              </div>
            </div>
          </div>
          <Swiper slidesPerView={3} className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
            {/* Blog Item */}
            <SwiperSlide className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <Link href="/blog-details"><Image src={img1}  className="w-full" layout="responsive" objectFit="contain" alt="#"/></Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <Link href="/team-details"><i className="far fa-user"/>Админ</Link>
                      </li>
                      <li className="ltn__blog-tags">
                        <Link href="/blog-grid"><i className="fas fa-tags"/>Инвестиции</Link>
                        <Link href="/blog-grid"><i className="fas fa-tags"/>Проект</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><Link href="/blog-details">10 проектов для начинающих</Link></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"/>Январь 01, 2023</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <Link href="/blog-details">Подробнее</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Blog Item */}
            {/* Blog Item */}
            <SwiperSlide className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <Link href="/blog-details"><Image src={img1}  className="w-full" layout="responsive" objectFit="contain" alt="#"/></Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <Link href="/team-details"><i className="far fa-user"/>Админ</Link>
                      </li>
                      <li className="ltn__blog-tags">
                        <Link href="/blog-grid"><i className="fas fa-tags"/>Инвестиции</Link>
                        <Link href="/blog-grid"><i className="fas fa-tags"/>Проект</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><Link href="/blog-details">10 проектов для начинающих</Link></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"/>Январь 01, 2023</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <Link href="/blog-details">Подробнее</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Blog Item */}
            {/* Blog Item */}
            <SwiperSlide className="col-lg-12">
              <div className="ltn__blog-item ltn__blog-item-3">
                <div className="ltn__blog-img">
                  <Link href="/blog-details"><Image src={img1}  className="w-full" layout="responsive" objectFit="contain" alt="#"/></Link>
                </div>
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <Link href="/team-details"><i className="far fa-user"/>Админ</Link>
                      </li>
                      <li className="ltn__blog-tags">
                        <Link href="/blog-grid"><i className="fas fa-tags"/>Инвестиции</Link>
                        <Link href="/blog-grid"><i className="fas fa-tags"/>Проект</Link>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title"><Link href="/blog-details">10 проектов для начинающих</Link></h3>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date"><i className="far fa-calendar-alt"/>Январь 01, 2023</li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <Link href="/blog-details">Подробнее</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Blog Item */}

          </Swiper>
        </div>
      </div>
    )
  }
}

export default BlogSlider;
