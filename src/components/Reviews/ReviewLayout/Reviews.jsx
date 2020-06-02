import React, { Component } from "react";
import { Tabs } from "@yazanaabed/react-tabs";
class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <Tabs
              activeTab={{
                id: "tab1",
              }}
            >
              <Tabs.Tab id="tab1" title="Description">
                <div class="description_area product_details_tab clearfix">
                  <p>
                    Sed a facilisis orci. Curabitur magna urna, varius placerat
                    placerat sodales, pretium vitae orci. Aliquam erat volutpat.
                    Cras sit amet suscipit magna. Quisque turpis odio, facilisis
                    vel eleifend eu, dignissim ac odio.
                  </p>
                  <p>
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. In scelerisque augue at the moment mattis. Proin
                    vitae arcu sit amet justo sollicitudin tincidunt sit amet ut
                    velit.Proin placerat vel augue eget euismod. Phasellus
                    cursus orci eu tellus vestibulum, vestibulum urna accumsan.
                    Vestibulum ut ullamcorper sapien. Pellentesque molestie, est
                    ac vestibulum eleifend, lorem ipsum mollis ipsum.
                  </p>
                </div>
              </Tabs.Tab>
              <Tabs.Tab id="tab2" title="Additional Information">
                <div class="additional_info_area">
                  <p>
                    What should I do if I receive a damaged parcel?
                    <br />{" "}
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit impedit similique qui, itaque delectus
                      labore.
                    </span>
                  </p>
                  <p>
                    I have received my order but the wrong item was delivered to
                    me.
                    <br />{" "}
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Facilis quam voluptatum beatae harum tempore, ab?
                    </span>
                  </p>
                  <p>
                    Product Receipt and Acceptance Confirmation Process
                    <br />{" "}
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum ducimus, temporibus soluta impedit minus rerum?
                    </span>
                  </p>
                  <p>
                    How do I cancel my order?
                    <br />{" "}
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nostrum eius eum, minima!
                    </span>
                  </p>
                </div>
              </Tabs.Tab>
              <Tabs.Tab id="tab3" title=" Reviews">
                <div class="reviews_area">
                  <ul>
                    <li>
                      <div class="single_user_review mb-15">
                        <div class="review-rating">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <span>for Quality</span>
                        </div>
                        <div class="review-details">
                          <p>
                            by <a href="#">Colorlib</a> on{" "}
                            <span>12 Sep 2018</span>
                          </p>
                        </div>
                      </div>
                      <div class="single_user_review mb-15">
                        <div class="review-rating">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <span>for Design</span>
                        </div>
                        <div class="review-details">
                          <p>
                            by <a href="#">Colorlib</a> on{" "}
                            <span>12 Sep 2018</span>
                          </p>
                        </div>
                      </div>
                      <div class="single_user_review">
                        <div class="review-rating">
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <i class="fa fa-star" aria-hidden="true"></i>
                          <span>for Value</span>
                        </div>
                        <div class="review-details">
                          <p>
                            by <a href="#">Colorlib</a> on{" "}
                            <span>12 Sep 2018</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div class="submit_a_review_area mt-50">
                  <h4>Submit A Review</h4>
                  <form action="#" method="post">
                    <div class="row">
                      <div class="col-12">
                        <div class="form-group d-flex align-items-center">
                          <span class="mr-15">Your Ratings:</span>
                          <div class="stars">
                            <input
                              type="radio"
                              name="star"
                              class="star-1"
                              id="star-1"
                            />
                            <label class="star-1" for="star-1">
                              1
                            </label>
                            <input
                              type="radio"
                              name="star"
                              class="star-2"
                              id="star-2"
                            />
                            <label class="star-2" for="star-2">
                              2
                            </label>
                            <input
                              type="radio"
                              name="star"
                              class="star-3"
                              id="star-3"
                            />
                            <label class="star-3" for="star-3">
                              3
                            </label>
                            <input
                              type="radio"
                              name="star"
                              class="star-4"
                              id="star-4"
                            />
                            <label class="star-4" for="star-4">
                              4
                            </label>
                            <input
                              type="radio"
                              name="star"
                              class="star-5"
                              id="star-5"
                            />
                            <label class="star-5" for="star-5">
                              5
                            </label>
                            <span></span>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label for="name">Nickname</label>
                          <input
                            type="email"
                            class="form-control"
                            id="name"
                            placeholder="Nazrul"
                          />
                        </div>
                      </div>
                      <div class="col-12 col-md-6">
                        <div class="form-group">
                          <label for="options">Reason for your rating</label>
                          <select class="form-control" id="options">
                            <option>Quality</option>
                            <option>Value</option>
                            <option>Design</option>
                            <option>Price</option>
                            <option>Others</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="comments">Comments</label>
                          <textarea
                            class="form-control"
                            id="comments"
                            rows="5"
                            data-max-length="150"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn plantalife-btn">
                          Submit Your Review
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Tabs.Tab>
            </Tabs>
          </div>
        </div>
      </>
    );
  }
}

export default Reviews;
