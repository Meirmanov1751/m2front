import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import useNews from "../../data/useNews";
import useNewsImage from "../../data/useNewsImage";
import defaultImage from "../../assets/img/logo.png"

const BlogGrid = function (props: any) {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(9)
  let newsData: any[] = useNews(page, limit)
  let newsimageData: any[] = useNewsImage()
  let pageCount: any[] = []
  let newsLength: any = props.news && (props.news.length / limit)

  for (let i = 0; i < newsLength; i++) {
    pageCount.push(i)
  }

  return <div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
    <div className="container">
      <div className="row">
        {/*blog-item-*/}
        {newsData &&
          newsData.map((state: any) => {
              const date = new Date(state.createdAt)
              const formattedDate = date.toLocaleDateString("ru", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })
              let newsImage: any = newsimageData && newsimageData.find((image) => image.NewsId == state._id)
              let baseUrl: string = newsImage && newsImage.bucket.split('public')
              let imagePath: string = newsImage && process.env["NEXT_PUBLIC_BASE_URL"] + `${baseUrl}/${newsImage.s3Key}`
              let imageURL: string = imagePath && imagePath.replace(',', '');

              return (
                <div key={state._id} className="col-12">
                  <div className="ltn__blog-item ltn__blog-item-3">
                    <div className="ltn__blog-img"
                         style={{display: "flex", justifyContent: "center", background: "black"}}>
                      <Link href={`/blog-details/${state._id}`} style={{width: "100%"}}><Image
                        src={imageURL ? imageURL : defaultImage} alt={state.title} style={{width: "100%"}}/></Link>
                    </div>
                    <div className="ltn__blog-brief">
                      {/*<div className="ltn__blog-meta">
                        <ul>
                          <li className="ltn__blog-tags go-top" style={{overflow: "hidden"}}>
                            <Link href="/service" style={{overflow: "hidden"}}><i className="fas fa-tags"/>{state.title}
                            </Link>
                          </li>
                        </ul>
                      </div>*/}
                      <h3 className="ltn__blog-title"><Link
                        href={`/blog-details/${state._id}`}>{state.title}</Link></h3>
                      <p>{state.shortDescription}</p>
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
              )
            }
          )
        }
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="ltn__pagination-area text-center">
            <div className="ltn__pagination">
              <ul>
                <li onClick={() => setPage((page < 1)? page : page - 1)}><Link href="#"><i className="fas fa-angle-double-left"/></Link>
                </li>
                {pageCount &&
                  pageCount.map((n: any) => {
                        return (
                          <li key={n} className={(page == n)? "active": ""} onClick={() => setPage(n)}><Link href="#">{n + 1}</Link></li>
                        )
                    }
                  )
                }
                <li onClick={() => setPage((page == (pageCount.length-1)) ? page : page + 1)}><Link href="#"><i className="fas fa-angle-double-right"/></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default BlogGrid;
