import React, { Component } from "react";
import Background from "../static/img/bg-img/24.jpg";
import Background1 from "../static/img/bg-img/Ficus.jpeg";
import queryString from "query-string";
import TabsHead from "./TabsHead";
import service from "../service/plantService";
import Header from "../components/Header";
import Footer from "./footer";
class ShopDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      param: "",
      getdata: "",
      myPlant:JSON.parse(sessionStorage.getItem("myPlant"))
    };
  }

  async componentDidMount() {
    var plant = queryString.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    }).plant_no;

    const getShoppingData = await service.getShoppingData({ plant_no: plant });
    let getdata = getShoppingData.data.message;
    console.log("getShopData", getdata);

    await this.setState({
      param: plant,
      getdata: getdata,
     
    });
    // console.log(this.state.param);
  }
  addToCart(photo, name, price) {
    let photos = photo;
    let names = name;
    let prices = price;
    let jsonObj = {
      photos,
      names,
      prices
    };
    this.state.myPlant.push(jsonObj);

    sessionStorage.setItem("myPlant", JSON.stringify(this.state.myPlant));

    window.location.assign("cart");
  }
  render() {
    if (this.state.myPlant == null) {
      this.state.myPlant = [];
    }
    const {
      plant_photo,
      plant_name,
      plant_price,
      plant_desc
    } = this.state.getdata;
    console.log("plant_data", this.state.getdata);
    return (
      <div>
        <Header />
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
                              src={`data:image/*;base64,${plant_photo}`}
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
                              src={`data:image/*;base64,${plant_photo}`}
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
                              src={`data:image/*;base64,${plant_photo}`}
                              alt="1"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="single_product_desc">
                    <h4 class="title">{plant_name}</h4>
                    <h4 class="price">{plant_price}</h4>
                    <div class="short_overview">
                      <p>{plant_desc}</p>
                    </div>

                    <div class="cart--area d-flex flex-wrap align-items-center">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          this.addToCart(plant_photo, plant_name, plant_price)
                        }
                      >
                        Add to cart
                      </button>
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
                      <img
                        src={require("../static/img/bg-img/Amaryllis.jpeg")}
                        alt=""
                      />
                    </a>

                    <div class="product-tag">
                      <a href="#">Hot</a>
                    </div>
                  </div>

                  <div class="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Amaryllis</p>
                    </a>
                    <h6>{`\u20B9200`}</h6>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-product-area mb-100">
                  <div class="product-img">
                    <a href="shop-details.html">
                      <img
                        src={require("../static/img/bg-img/Aricapalm.jpeg")}
                        alt=""
                      />
                    </a>
                  </div>

                  <div class="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Arica Palm</p>
                    </a>
                    <h6>{`\u20B9200`}</h6>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-product-area mb-100">
                  <div class="product-img">
                    <a href="shop-details.html">
                      <img
                        src={require("../static/img/bg-img/Alovera.jpeg")}
                        height={250}
                        width={100}
                        alt=""
                      />
                    </a>
                  </div>

                  <div class="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>Alovera</p>
                    </a>
                    <h6>{`\u20B9200`}</h6>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-lg-3">
                <div class="single-product-area mb-100">
                  <div class="product-img">
                    <a href="shop-details.html">
                      <img
                        src={require("../static/img/bg-img/Africanmarigold.jpeg")}
                        alt=""
                      />
                    </a>

                    <div class="product-tag sale-tag">
                      <a href="#">Hot</a>
                    </div>
                  </div>

                  <div class="product-info mt-15 text-center">
                    <a href="shop-details.html">
                      <p>African Marigold</p>
                    </a>
                    <h6>{`\u20B9340`}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ShopDetail;
