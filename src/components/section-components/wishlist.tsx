import React, {Component} from 'react';
import Link from 'next/link';
import Image from 'next/image'


class WishList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'

    return <div className="liton__wishlist-area mb-105">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping-cart-inner">
              <div className="shoping-cart-table table-responsive">
                <table className="table">
                  <tbody>
                  <tr>
                    <td className="cart-product-remove">x</td>
                    <td className="cart-product-image">
                      <Link href="/product-details/"><Image   src={"assets/img/product/1.png"} fill={true} fill={true}
                                                            alt="#"/></Link>
                    </td>
                    <td className="cart-product-info">
                      <h4 className="go-top"><Link href="/product-details/">Brake Conversion Kit</Link></h4>
                    </td>
                    <td className="cart-product-price">$85.00</td>
                    <td className="cart-product-stock">In Stock</td>
                    <td className="cart-product-add-cart">
                      <Link className="submit-button-1" href="#" title="Add to Cart" data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal">Add to Cart</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="cart-product-remove">x</td>
                    <td className="cart-product-image">
                      {/*<Link href="/product-details/"><Image  src={"assets/img/product/2.png"} fill={true}*/}
                      {/*                                      alt="#"/></Link>*/}
                    </td>
                    <td className="cart-product-info">
                      <h4 className="go-top"><Link href="/product-details/">Shock Mount Insulator</Link></h4>
                    </td>
                    <td className="cart-product-price">$89.00</td>
                    <td className="cart-product-stock">In Stock</td>
                    <td className="cart-product-add-cart">
                      <Link className="submit-button-1" href="#" title="Add to Cart" data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal">Add to Cart</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="cart-product-remove">x</td>
                    <td className="cart-product-image">
                      {/*<Link href="/product-details/"><Image  src={"assets/img/product/4.png"} fill={true}*/}
                      {/*                                      alt="#"/></Link>*/}
                    </td>
                    <td className="cart-product-info">
                      <h4 className="go-top"><Link href="/product-details/">Tail Light Lens</Link></h4>
                    </td>
                    <td className="cart-product-price">$149.00</td>
                    <td className="cart-product-stock">In Stock</td>
                    <td className="cart-product-add-cart">
                      <Link className="submit-button-1" href="#" title="Add to Cart" data-bs-toggle="modal"
                            data-bs-target="#add_to_cart_modal">Add to Cart</Link>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  }
}

export default WishList
