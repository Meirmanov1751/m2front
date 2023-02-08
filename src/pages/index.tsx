import {useRouter} from 'next/router';
import {Meta} from '../layouts/Meta';
import {Main} from '../templates/Main';
import Navbar from "../components/global-components/navbar-v5";
import Footer from "../components/global-components/footer";
import UpComingProduct from "../components/section-components/upcoming-product-v1"
import CategoryV2 from "../components/section-components/category-v2";
import Testimonial from "../components/section-components/testimonial-v2";
import BlogSlider from "../components/blog-components/blog-slider-v1";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import BannerV2 from "../components/section-components/banner-v2";

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Home"
          description="M2."
        />
      }
    >
      <Navbar/>
      <BannerV2/>
      <CategoryV2/>
      <UpComingProduct/>
      <BlogSlider customClass="section-subtitle-2"/>
      <Testimonial/>

      <CallToActionV1/>
      <Footer/>
    </Main>
  );
};

export default Index;
