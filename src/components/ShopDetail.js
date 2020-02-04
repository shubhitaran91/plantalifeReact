import React, { Component } from "react";
import Background from "../static/img/bg-img/24.jpg";
import Background1 from "../static/img/bg-img/Ficus.jpeg";

import TabsHead from "./TabsHead";
class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="breadcrumb-area">
          <div
            class="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${Background})` }}
          >
            <h2>SHOP DETAILS</h2>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a href="#">
                        <i class="fa fa-home"></i> Home
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="#">Shop</a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Shop Details
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section class="single_product_details_area mb-50">
          <div class="produts-details--content mb-50">
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-12 col-md-6 col-lg-5">
                  <div class="single_product_thumb">
                    <div
                      id="product_details_slider"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <a
                            class="product-img"
                            href="img/bg-img/49.jpg"
                            title="Product Image"
                          >
                            <img
                              class="d-block w-100"
                              src={require("../static/img/bg-img/Ficus.jpeg")}
                              alt="1"
                            />
                          </a>
                        </div>
                        <div class="carousel-item">
                          <a
                            class="product-img"
                            href="img/bg-img/49.jpg"
                            title="Product Image"
                          >
                            <img
                              class="d-block w-100"
                              src={require("../static/img/bg-img/Ficus.jpeg")}
                              alt="1"
                            />
                          </a>
                        </div>
                        <div class="carousel-item">
                          <a
                            class="product-img"
                            href="img/bg-img/49.jpg"
                            title="Product Image"
                          >
                            <img
                              class="d-block w-100"
                              src={require("../static/img/bg-img/Ficus.jpeg")}
                              alt="1"
                            />
                          </a>
                        </div>
                      </div>
                      <ol class="carousel-indicators">
                        <li
                          class="active"
                          data-target="#product_details_slider"
                          data-slide-to="0"
                          style={{ backgroundImage: `url(${Background1})` }}
                        ></li>
                        <li
                          data-target="#product_details_slider"
                          data-slide-to="1"
                          style={{ backgroundImage: `url(${Background1})` }}
                        ></li>
                        <li
                          data-target="#product_details_slider"
                          data-slide-to="2"
                          style={{ backgroundImage: `url('${Background1})` }}
                        ></li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="single_product_desc">
                    <h4 class="title">Recuerdos Plant</h4>
                    <h4 class="price">$9.99</h4>
                    <div class="short_overview">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus pellem malesuada in nibh selama euismod.
                        Curabitur a rhoncus dui. Nunc lobortis cursus magna
                        utrum faucibus. Vivamus justo nibh, pharetra non risus
                        accumsan, tincidunt suscipit leo.
                      </p>
                    </div>

                    <div class="cart--area d-flex flex-wrap align-items-center">
                      <form
                        class="cart clearfix d-flex align-items-center"
                        method="post"
                      >
                        <div class="quantity">
                          <span
                            class="qty-minus"
                            onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"
                          >
                            <i class="fa fa-minus" aria-hidden="true"></i>
                          </span>
                          <input
                            type="number"
                            class="qty-text"
                            id="qty"
                            step="1"
                            min="1"
                            max="12"
                            name="quantity"
                            value="1"
                          />
                          <span
                            class="qty-plus"
                            onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"
                          >
                            <i class="fa fa-plus" aria-hidden="true"></i>
                          </span>
                        </div>
                        <button
                          type="submit"
                          name="addtocart"
                          value="5"
                          class="btn plantalife-btn ml-15"
                        >
                          Add to cart
                        </button>
                      </form>

                      <div class="wishlist-compare d-flex flex-wrap align-items-center">
                        <a href="#" class="wishlist-btn ml-15">
                          <i class="icon_heart_alt"></i>
                        </a>
                        <a href="#" class="compare-btn ml-15">
                          <i class="arrow_left-right_alt"></i>
                        </a>
                      </div>
                    </div>

                    <div class="products--meta">
                      <p>
                        <span>SKU:</span> <span>CT201807</span>
                      </p>
                      <p>
                        <span>Category:</span> <span>Outdoor Plants</span>
                      </p>
                      <p>
                        <span>Tags:</span> <span>plants, green, cactus </span>
                      </p>
                      <p>
                        <span>Share on:</span>
                        <span>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-pinterest"></i>
                          </a>
                          <a href="#">
                            <i class="fa fa-google-plus"></i>
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <TabsHead />
          </div>
        </section>

        <div class="related-products-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="section-heading text-center">
                  <h2>Related Products</h2>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-product-area mb-100">
                  <div class="product-img">
                    <a href="shop-details.html">
                      <img src="img/bg-img/40.png" alt="" />
                    </a>

                    <div class="product-tag">
                      <a href="#">Hot</a>
                    </div>
                    <div class="product-meta d-flex">
                      <a href="#" class="wishlist-btn">
                        <i class="icon_heart_alt"></i>
                      </a>
                      <a href="cart.html" class="add-to-cart-btn">
                        Add to cart
                      </a>
                      <a href="#" class="compare-btn">
                        <i class="arrow_left-right_alt"></i>
                      </a>
                    </div>
                  </div>

                  <div class="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Cactus Flower</p>
                    </a>
                    <h6>$10.99</h6>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-product-area mb-100">
                  <div class="product-img">
                    <a href="shop-details.html">
                      <img src="img/bg-img/41.png" alt="" />
                    </a>
                    <div class="product-meta d-flex">
                      <a href="#" class="wishlist-btn">
                        <i class="icon_heart_alt"></i>
                      </a>
                      <a href="cart.html" class="add-to-cart-btn">
                        Add to cart
                      </a>
                      <a href="#" class="compare-btn">
                        <i class="arrow_left-right_alt"></i>
                      </a>
                    </div>
                  </div>

                  <div class="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Cactus Flower</p>
                    </a>
                    <h6>$10.99</h6>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-product-area mb-100">
                  <div class="product-img">
                    <a href="shop-details.html">
                      <img src="img/bg-img/42.png" alt="" />
                    </a>
                    <div class="product-meta d-flex">
                      <a href="#" class="wishlist-btn">
                        <i class="icon_heart_alt"></i>
                      </a>
                      <a href="cart.html" class="add-to-cart-btn">
                        Add to cart
                      </a>
                      <a href="#" class="compare-btn">
                        <i class="arrow_left-right_alt"></i>
                      </a>
                    </div>
                  </div>

                  <div class="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Cactus Flower</p>
                    </a>
                    <h6>$10.99</h6>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-product-area mb-100">
                  <div class="product-img">
                    <a href="shop-details.html">
                      <img src="img/bg-img/43.png" alt="" />
                    </a>

                    <div class="product-tag sale-tag">
                      <a href="#">Hot</a>
                    </div>
                    <div class="product-meta d-flex">
                      <a href="#" class="wishlist-btn">
                        <i class="icon_heart_alt"></i>
                      </a>
                      <a href="cart.html" class="add-to-cart-btn">
                        Add to cart
                      </a>
                      <a href="#" class="compare-btn">
                        <i class="arrow_left-right_alt"></i>
                      </a>
                    </div>
                  </div>

                  <div class="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Cactus Flower</p>
                    </a>
                    <h6>$10.99</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDetail;
