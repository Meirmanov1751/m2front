import React from 'react';
import Navbar from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import AboutV4 from "../components/section-components/about-v4";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import BlogSlider from "../components/blog-components/blog-slider-v1";
import ServiceV1 from "../components/section-components/service-v1";


const Service_V1 = () => {
  return <div>
    <Navbar/>
    <PageHeader headertitle="What We Do" subheader="Service"/>
    <AboutV4/>
    <ServiceV1/>
    <BlogSlider sectionClass="pt-120"/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default Service_V1

