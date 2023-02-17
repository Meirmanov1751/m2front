import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import useNews from "../../data/useNews";
import useNewsImage from "../../data/useNewsImage";

const BlogGrid = function () {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(9)
  let publicUrl = process.env.PUBLIC_URL + '/'
  let imagealt = 'image'
  let newsData: any[] = useNews(page, limit)
  let newsimageData: any[] = useNewsImage()



  console.log(newsData)
  return <div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
      <div className="container">
        <div className="row">

          {newsData?
            newsData.map((state: any) => {
              const date = new Date(state.createdAt)
              const formattedDate = date.toLocaleDateString("ru", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })



               let newsImage: any = newsimageData? newsimageData.find((image) => image.NewsId == state._id): ""
               let baseUrl: any = newsImage.bucket? newsImage.bucket.split('public'):""
              let imageUrl: any = process.env["NEXT_PUBLIC_BASE_URL"] + `${baseUrl}/${newsImage.s3Key}`

              let imageURL: any = imageUrl? imageUrl.replace(',',''): "";

              console.log(newsImage)
              return(
                <div key={state._id} className="col-lg-4 col-sm-6 col-12">
                  <div className="ltn__blog-item ltn__blog-item-3">
                    <div className="ltn__blog-img">
                      <Link href={`/blog-details/${state._id}`}><Image src={imageURL} alt="#"/></Link>
                    </div>
                    <div className="ltn__blog-brief">
                      <div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-tags go-top">
                            <Link href="/service"><i className="fas fa-tags"/>{state.title}</Link>
                          </li>
                        </ul>
                      </div>
                      <h3 className="ltn__blog-title"><Link href={`/blog-details/${state._id}`}>{state.shortDescription}</Link></h3>
                      <div className="ltn__blog-meta-btn">
                        <div className="ltn__blog-meta">
                          <ul>
                            <li className="ltn__blog-date"><i className="far fa-calendar-alt"/>{formattedDate}</li>
                          </ul>
                        </div>
                        <div className="ltn__blog-btn">
                          <Link href={`/blog-details/${state._id}`}>Подробнее</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              )}
            ): ""
          }
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="ltn__pagination-area text-center">
              <div className="ltn__pagination">
                <ul>
                  <li onClick={() => setPage(page - 1)}><Link href="#"><i className="fas fa-angle-double-left"/></Link></li>
                  {/*{news?*/}
                  {/*  news.map((n:any) => {*/}
                  {/*    var i = 0;*/}
                  {/*    i++*/}
                  {/*    let newsCount =news ? (news.length * 1)/(limit * 1) : 0;*/}
                  {/*    var l: any = 0*/}
                  {/*    for(l; l < newsCount; l++){*/}
                  {/*    }*/}

                  {/*    return(*/}
                  {/*      <li key={l} className="active" onClick={() => setPage(l)}><Link href="#">{l + 1}</Link></li>*/}
                  {/*    )*/}
                  {/*  } )*/}
                  {/* : ""*/}
                  {/*}*/}
                  <li onClick={() => setPage(page + 1)}><Link href="#"><i className="fas fa-angle-double-right"/></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
}

export default BlogGrid;
