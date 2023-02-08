import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import Checkout from "../components/shop-components/checkout";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";

const CheckOuttV1 = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Checkout"/>
    <Checkout/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default CheckOuttV1

