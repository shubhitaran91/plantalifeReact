import React, { Component } from "react";

class ListImages extends Component {
  state = {
    activeImage: this.props.listPlants.plant_photos[0],
  };
  clickActiveImageHandler = (event, image) => {
    console.log("image", image);
    this.setState({
      activeImage: image,
    });
  };
  render() {
    const images = this.props.listPlants.plant_photos.map((image, index) => {
      return (
        <li
          key={index}
          className="active"
          data-target="#product_details_slider"
          data-slide-to={index}
          style={{ backgroundImage: `url(${image})` }}
          onClick={(event) => this.clickActiveImageHandler(event, image)}
        ></li>
      );
    });
    return (
      <div className="col-12 col-md-6 col-lg-5">
        <div className="single_product_thumb">
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={this.state.activeImage}
                  alt={"1"}
                />
              </div>
            </div>
            <ol className="carousel-indicators">{images}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default ListImages;
