import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import ShopLeftSidebar from "../components/shop-components/shop-left-sidebar";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";


const ShopLeftSidebarPage = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Shop Left Sidebar"/>
    <ShopLeftSidebar/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default ShopLeftSidebarPage

