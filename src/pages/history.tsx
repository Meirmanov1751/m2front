import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import BlogSlider from "../components/blog-components/blog-slider-v1";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import HistoryV1 from "../components/section-components/history";
import WhyChooseUs from "../components/section-components/why-choose-us";
import CallToActonV4 from "../components/section-components/call-to-action-v4";


const History = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Our History" subheader="History"/>
    <HistoryV1/>
    <WhyChooseUs/>
    <CallToActonV4/>
    <BlogSlider customClass="pt-120"/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default History

