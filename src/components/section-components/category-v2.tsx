import React, {Component} from 'react';
import Link from 'next/link';


class CategoryV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Начни сейчас</h6>
              <h1 className="section-title">4 простых шага к идеальному портфолио</h1>
            </div>
          </div>
        </div>
        <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center go-top">
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
              <Link href="/shop">
                <span className="category-icon"><i className="flaticon-user"/></span>
                <span className="category-number">01</span>
                <span className="category-title">Зарегистрируйся</span>
                <span className="category-brief">
			              Зарегистрируйся и получи доступ к платформе
			            </span>
                <span className="category-btn d-none"><i className="flaticon-right-arrow"/></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
              <Link href="/shop">
                <span className="category-icon"><i className="flaticon-buy-online"/></span>
                <span className="category-number">02</span>
                <span className="category-title">Получи бонус</span>
                <span className="category-brief">
			              Бонусы для каждого пользователя
			            </span>
                <span className="category-btn d-none"><i className="flaticon-right-arrow"/></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
              <Link href="/shop">
                <span className="category-icon"><i className="flaticon-building"/></span>
                <span className="category-number">03</span>
                <span className="category-title">Выбери проект</span>
                <span className="category-brief">
			              Огромное количество проектов для выбора
			            </span>
                <span className="category-btn d-none"><i className="flaticon-right-arrow"/></span>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
              <Link href="/shop">
                <span className="category-icon"><i className="flaticon-buy-home"/></span>
                <span className="category-number">04</span>
                <span className="category-title">Инвестируй</span>
                <span className="category-brief">
			              Инвестируй и получи дивиденды
			            </span>
                <span className="category-btn d-none"><i className="flaticon-right-arrow"/></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  }
}

export default CategoryV2
