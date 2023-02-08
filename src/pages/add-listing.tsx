import React from 'react';
import NavbarV5 from "../components/global-components/navbar-v5";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import AddListing from "../components/section-components/add-listing";
import PageHeader from "../components/global-components/page-header";


const AddListing_V1 = () => {
  return <div>
    <NavbarV5/>
    <PageHeader headertitle="Add Listing"/>
    <AddListing/>
    <CallToActionV1/>
    <Footer/>
  </div>
}

export default AddListing_V1

