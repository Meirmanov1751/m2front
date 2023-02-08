import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import ShopGridV1 from "../components/shop-components/shop-grid-v1";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";


const ShopGrid_V1 = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Shop Grid"/>
    <ShopGridV1/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default ShopGrid_V1

