import React from 'react';
import PageHeader from "../components/global-components/page-header";
import NavbarV5 from "../components/global-components/navbar-v5";
import ProductSliderV1 from "../components/shop-components/product-slider-v1";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import ShopDetails from "../components/shop-components/shop-details";


const Product_Details = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Product Details" customclass="mb-0"/>
    <ProductSliderV1/>
    <ShopDetails/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default Product_Details

