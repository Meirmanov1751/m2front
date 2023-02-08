import React from 'react';
import Location from "../components/section-components/location";
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";


const LocationPage = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Location" customclass="mb-0"/>
    <Location/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default LocationPage

