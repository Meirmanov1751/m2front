import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import PageHeader from "../components/global-components/page-header";
import Cart from "../components/shop-components/cart";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";

const Cart_V1 = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Cart"/>
    <Cart/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default Cart_V1

