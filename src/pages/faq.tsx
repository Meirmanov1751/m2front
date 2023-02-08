import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import BlogSlider from "../components/blog-components/blog-slider-v1";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import CounterV1 from "../components/section-components/counter-v1";
import FaqV1 from "../components/section-components/faq-v1";


const Faq = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Frequently asked questions" subheader="FAQ"/>
    <FaqV1/>
    <CounterV1/>
    <BlogSlider sectionClass="pt-120"/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default Faq

