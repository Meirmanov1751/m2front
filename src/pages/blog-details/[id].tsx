import React from 'react';
import NavbarV5 from "../../components/global-components/navbar-v5";
import PageHeader from "../../components/global-components/page-header";
import BlogDetails from "../../components/blog-components/blog-details";
import CallToActionV1 from "../../components/section-components/call-to-action-v1";
import Footer from "../../components/global-components/footer";
import {Meta} from "../../layouts/Meta";
import {Main} from "../../templates/Main";
import {useRouter} from "next/router";
import useNews from "../../data/useNews";

const BlogDetailsPage = () => {
  const router = useRouter();
  const {id} = router.query;
  const newsData = useNews()
  const newsDataId = newsData ? newsData.find((news: any) => news._id == id) : ""

  return <Main meta={
    <Meta
      title={newsDataId.id}
      description="M2."
    />
  }>
    <NavbarV5/>
    <PageHeader headertitle={newsDataId.title}/>
    <BlogDetails  data={newsDataId}/>
    <CallToActionV1/>
    <Footer/>
  </Main>
}

export default BlogDetailsPage

