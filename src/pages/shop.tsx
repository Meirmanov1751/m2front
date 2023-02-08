import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import ShopGridV1 from "../components/shop-components/shop-grid-v1";


const Shop_V1 = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Shop"/>
    <ShopGridV1/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default Shop_V1

