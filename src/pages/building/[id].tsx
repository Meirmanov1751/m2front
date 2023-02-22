import React from 'react';
import PageHeader from "components/global-components/page-header";
import NavbarV5 from "components/global-components/navbar-v5";
import ProductSliderV1 from "components/shop-components/product-slider-v1";
import CallToActionV1 from "components/section-components/call-to-action-v1";
import Footer from "components/global-components/footer";
import ShopDetails from "components/shop-components/shop-details";
import {Main} from "templates/Main";
import useBuilding from "../../data/useBuilding";
import {useRouter} from "next/router";
import {Meta} from "../../layouts/Meta";

interface BuildingParams{
    id: string
}
const Product_Details = () => {
    const router = useRouter()
    let id = ''
    if (typeof router.query.id === "string") {
        id = router.query.id;
    }
    const {building, loading} = useBuilding(id);
    if(loading || !building) return <div>qweqwe</div>;

    return <Main meta={<Meta title={building.name} description={building.description}/>}>
        <NavbarV5/>
        <PageHeader headertitle={building.name} customclass="mb-0"/>
        <ProductSliderV1/>
        <ShopDetails building={building}/>
        <CallToActionV1/>
        <Footer/>
    </Main>
}

export default Product_Details

