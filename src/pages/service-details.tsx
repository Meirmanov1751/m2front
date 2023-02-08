import React from 'react';
import Navbar from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import ServiceDetails from "../components/section-components/service-details";


const Service_Details = () => {
  return <div>
    <Navbar/>
    <PageHeader headertitle="Service Details" subheader="Property Management"/>
    <ServiceDetails/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default Service_Details

