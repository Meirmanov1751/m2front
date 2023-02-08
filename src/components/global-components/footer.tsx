import React, {Component} from 'react';
import Copyright from './copyright';

class Footer_v1 extends Component {

  componentDidMount() {

    // const $ = window.$;

    // let publicUrl = process.env.PUBLIC_URL + '/'
    // const minscript = document.createElement("script");
    // minscript.async = true;
    // minscript.src = "/assets/js/main.js";
    //
    // document.body.appendChild(minscript);

    //      $('.go-top').find('a').on('click', function () {
    //
    // 	$(".quarter-overlay").fadeIn(1);
    //
    // 		$(window).scrollTop(0);
    //
    // 	setTimeout(function(){
    // 	    	$(".quarter-overlay").fadeOut(300);
    // 		}, 800);
    //
    //     });
    //
    //
    // $(document).on('click','.theme-btn-1 ', function(){
    //         $( 'div' ).removeClass( 'modal-backdrop' );
    //         $( 'div' ).removeClass( 'show' );
    //         $( 'div' ).removeClass( 'fade' );
    // 	$('body').attr("style", "");
    //     });
  }

  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imgattr = "Footer logo"

    return (
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <h2 style={{color: "var(--ltn__secondary-color)", fontSize: 30}}>M<sup>2</sup></h2>
                    </div>
                  </div>
                  <p>Инвестиции в недвижимость от 1м2
                    Возможность зарабатывать на приросте стоимости недвижимости и на ренте (аренда)</p>

                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-6 col-12">
                <div className="footer-address">
                  <ul>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-placeholder"/>
                      </div>
                      <div className="footer-address-info">
                        <p>Астана, Казахстан</p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-call"/>
                      </div>
                      <div className="footer-address-info">
                        <p><a href="tel:+0123-456789">+0123-456789</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="footer-address-icon">
                        <i className="icon-mail"/>
                      </div>
                      <div className="footer-address-info">
                        <p><a href="mailto:example@example.com">example@example.com</a></p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ltn__social-media mt-20">
                  {/*<Social />*/}
                </div>
              </div>

            </div>
          </div>
        </div>
        <Copyright/>
      </footer>
    )
  }
}


export default Footer_v1
