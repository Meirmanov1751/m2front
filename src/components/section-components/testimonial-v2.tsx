import React, {Component} from 'react';
import Image from 'next/image'



class TestimonialV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-65" style={{background: `url(/assets/img/23.jpg)`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area ltn__section-title-2--- text-center---">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Отзывы от
                клиентов</h6>
              <h1 className="section-title white-color">Что наши клиенты говорят <br/>
                об <span>M<sup>2</sup></span></h1>
            </div>
          </div>
        </div>
        <div className="row ltn__testimonial-slider-6-active slick-arrow-3">
          <div className="col-lg-4">
            <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
              <div className="ltn__testimoni-info">
                <div className="ltn__testimoni-author-ratting">
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      {/*<Image  src={"assets/img/testimonial/1.jpg"} fill={true} alt="#"/>*/}
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>Ғалижан Толыбаев</h5>
                      <label>Клиент</label>
                    </div>
                  </div>
                  <div className="ltn__testimoni-rating">
                    <div className="product-ratting">
                      <ul>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>
                  Строят качественно, проекты уникальные. Даже типовые здания имеют какую-то свою изюминку, отличающую
                  их от от типовых серых зданий. Пока ни от кого не слышал, чтобы застройщик сдал квартиру с
                  откровенными косяками.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
              <div className="ltn__testimoni-info">
                <div className="ltn__testimoni-author-ratting">
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      {/*<Image  src={"assets/img/testimonial/1.jpg"} fill={true} alt="#"/>*/}
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>Ғалижан Толыбаев</h5>
                      <label>Клиент</label>
                    </div>
                  </div>
                  <div className="ltn__testimoni-rating">
                    <div className="product-ratting">
                      <ul>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>
                  Строят качественно, проекты уникальные. Даже типовые здания имеют какую-то свою изюминку, отличающую
                  их от от типовых серых зданий. Пока ни от кого не слышал, чтобы застройщик сдал квартиру с
                  откровенными косяками.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
              <div className="ltn__testimoni-info">
                <div className="ltn__testimoni-author-ratting">
                  <div className="ltn__testimoni-info-inner">
                    <div className="ltn__testimoni-img">
                      {/*<Image  src={"assets/img/testimonial/1.jpg"} fill={true} alt="#"/>*/}
                    </div>
                    <div className="ltn__testimoni-name-designation">
                      <h5>Ғалижан Толыбаев</h5>
                      <label>Клиент</label>
                    </div>
                  </div>
                  <div className="ltn__testimoni-rating">
                    <div className="product-ratting">
                      <ul>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                        <li><a href="#"><i className="fas fa-star"/></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p>
                  Строят качественно, проекты уникальные. Даже типовые здания имеют какую-то свою изюминку, отличающую
                  их от от типовых серых зданий. Пока ни от кого не слышал, чтобы застройщик сдал квартиру с
                  откровенными косяками.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  }
}

export default TestimonialV2
