import React, {Component} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import {Building} from "../../store/models/building.interface";
import moment from "../../utils/moment";
import useCity from "../../data/useCity";
import {ChartComponent} from "../section-components/building-components/chart-component";
import ApartmentCheckmate from "../section-components/building-components/apartment-checkmate";
import ReactPlayer from "react-player";
import useSWR from "swr";
import BuildingAdditional from "../building-components/building.additional";
import {IBuildingAdditional} from "../../store/models/building.additional.interface";
import BuildingsPopular from "../building-components/buildings.popular";


const ShopDetails = ({building}: {building: Building}) => {

    let publicUrl = process.env.PUBLIC_URL + '/'
    const {city, loading} = useCity(building.cityId)
    const {data: additionals, isLoading: isAdditionalLoading} = useSWR<IBuildingAdditional[]>(`/api/building-additional?building_id=${building._id}`)
    if(loading) {
      return <div></div>
    }
    return <div className="ltn__shop-details-area pb-10 pt-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-category">
                    <a className="bg-orange" >Инвестиция</a>
                  </li>
                  <li className="ltn__blog-date">
                    <i className="far fa-calendar-alt"/>{moment(building.passDate).format("DD MMMM YYYY") }
                  </li>
                </ul>
              </div>
              <h1>{building.name}</h1>
              <label><span className="ltn__secondary-color"><i className="flaticon-pin"/></span> {building.address}, {city.name}
                </label>
              <div className="property-detail-info-list section-bg-1 clearfix mb-60 mt-50">
                <ul>
                  <li><label>Доходность:</label> <span>{building.incomePercentage}%</span></li>
                  <li><label>Срок: </label> <span>24 месяцев</span></li>
                </ul>
                <ul>
                  <li><label>Тип:</label> <span>Инвестиции </span></li>
                  <li><label>Класс здания:</label> <span>Комфорт</span></li>
                </ul>
              </div>
              <h4 className="title-2">Изменение цен на проект</h4>
              <ChartComponent building={building}/>
              <h4 className="title-2">Описание</h4>
              <p>{building.description}</p>
              { !isAdditionalLoading && additionals && additionals.map(additional=><BuildingAdditional additional={additional} key={additional._id}/>)}
              <h4 className="title-2">Квартиры на инвестицию</h4>
              <ApartmentCheckmate building={building}/>
            </div>
          </div>
          <div className="col-lg-4">
            <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
              {/* Author Widget */}
              <div className="widget ltn__author-widget">
                <div className="ltn__author-widget-inner text-center">
                  {/*<Image  src={"/assets/img/team/4.jpg"} fill={true} alt="Image"/>*/}
                  <h5>Наша команда доступна в любое время</h5>
                  <small>Звоните/пишите удобным для вас способом</small>
                  <p>Так же в наших соц сетях в можете следить за последними новостями и акциями, подпишись чтобы быть в курсе</p>
                  <div className="ltn__social-media">
                    <ul>
                      <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"/></a></li>
                      <li><a href="#" title="Twitter"><i className="fab fa-twitter"/></a></li>
                      <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"/></a></li>
                      <li><a href="#" title="Youtube"><i className="fab fa-youtube"/></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Search Widget */}
              {/*<div className="widget ltn__search-widget">*/}
              {/*  <h4 className="ltn__widget-title ltn__widget-title-border-2">Search Objects</h4>*/}
              {/*  <form action="#">*/}
              {/*    <input type="text" name="search" placeholder="Search your keyword..."/>*/}
              {/*    <button type="submit"><i className="fas fa-search"/></button>*/}
              {/*  </form>*/}
              {/*</div>*/}
              {/* Form Widget */}
              <div className="widget ltn__form-widget">
                <h4 className="ltn__widget-title ltn__widget-title-border-2">Оставьте заявку</h4>
                <form action="#">
                  <input type="text" name="yourname" placeholder="Ваше имя*"/>
                  <input type="text" name="youremail" placeholder="Ваш электронный адрес*"/>
                  <textarea name="yourmessage" placeholder="Комментарий..." defaultValue={""}/>
                  <button type="submit" className="btn theme-btn-1">Отправить</button>
                </form>
              </div>

              {/* Popular Product Widget */}
              <BuildingsPopular/>
            </aside>
          </div>
        </div>
      </div>
    </div>
}

export default ShopDetails
