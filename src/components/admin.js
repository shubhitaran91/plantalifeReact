import React, { Component } from "react";
import Footer from "./footer";
import service from "../service/plantService";
import Notiflix from "notiflix-react";
import queryString from "query-string";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plantdata: "",
      param: "",
      plant_type: "",
      plant_name: "",
      plant_price: "",
      plant_status: "",
      file: null,
      plant_desc: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    var plant = queryString.parse(this.props.location.search, {
      ignoreQueryPrefix: true
    }).plantno;

    this.setState({
      param: plant
    });
  }

  updateInputValue = async e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  async encyrpt() {}

  //  handleChange = async e => {
  // let files = e.target.files[0];
  // console.log("file",files)
  // let reader = new FileReader();

  // reader.onloadend = () => {
  //     var size = files.size;
  //     console.log(size)
  //     if(size<=80000){
  //      this.setState({
  //          image: files.name,
  //             imagePreviewUrl: reader.result
  //         });
  //     }else{
  //         Notiflix.Report.Warning( 'Image size exceeds the limit of 80 KB', 'Please Try Again', 'OK' );
  //     }

  // };
  // reader.readAsDataURL(files);
  //  };

  async onSubmit() {
    if (!this.state.param) {
      console.log("add", !this.state.param);
      var jsonObj = {
        plant_type: this.state.plant_type,
        plant_name: this.state.plant_name,
        plant_price: this.state.plant_price,
        plant_status: this.state.plant_status,
        plant_desc: this.state.plant_desc
      };
      var data = new FormData();
      for (let key in jsonObj) {
        data.append(key, jsonObj[key]);
      }

      data.append("file", this.state.file);

      const getAdminData = await service.getAdminData(data);

      console.log("getAdminData", getAdminData);
      window.location.assign("listofplant");
    } else {
      var plantInfo = await queryString.parse(this.props.location.search, {
        ignoreQueryPrefix: true
      }).plantInfo;
      this.setState({
        plantdata: JSON.parse(window.atob(plantInfo))
      });

      console.log("update", this.state.plantdata);
      var jsonObj = {
        plant_type: this.state.plantdata.plant_type,
        plant_name: this.state.plantdata.plant_name,
        plant_price: this.state.plant_price,
        plant_status: this.state.plant_status,
        plant_desc: this.state.plant_desc
      };
      var data = new FormData();
      for (let key in jsonObj) {
        data.append(key, jsonObj[key]);
      }
      data.append("file", this.state.file);
      const getUpdateData = await service.getUpdateData(this.state.data);

      console.log("getUpdateData", getUpdateData);
    }
  }
  render() {
    // this.encyrpt()

    var pageTitle;
    if (this.state.param) {
      pageTitle = <h2>Edit Product</h2>;
      var { plant_type, plant_name } = this.state.plantdata;
    } else {
      pageTitle = <h2>Add Product</h2>;
      var {
        plant_type,
        plant_name,
        plant_price,
        plant_status,
        // photo,
        plant_desc
      } = this.state;
    }

    return (
      <>
        <section className="contact-area">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 col-lg-12">
                <div className="section-heading">
                  <h2>{pageTitle}</h2>
                </div>

                <div className="contact-form-area mb-100">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <select
                          className="form-control"
                          name="plant_type"
                          value={plant_type}
                          onChange={this.updateInputValue.bind(this)}
                        >
                          <option value="0">Select Type</option>
                          <option value="Indoor">Indoor</option>
                          <option value="Outdoor">Outdoor</option>
                          <option value="seeds-grass">Seeds/grass</option>
                          <option value="pots">Pots</option>
                          <option value="homedecor">Home Decor</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="plant_name"
                          value={plant_name}
                          onChange={this.updateInputValue.bind(this)}
                          placeholder="Name Of Plant/Grass/Seed"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="plant_price"
                          value={plant_price}
                          onChange={this.updateInputValue.bind(this)}
                          placeholder="Price"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="plant_status"
                          value={plant_status}
                          onChange={this.updateInputValue.bind(this)}
                          placeholder="Status"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group" accept="static/img/*">
                        <input
                          type="file"
                          // name="photo"
                          // value={photo}
                          onChange={this.onChange.bind(this)}
                          className="form-control"
                          placeholder="Upload Image"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="plant_desc"
                          value={plant_desc}
                          onChange={this.updateInputValue.bind(this)}
                          className="form-control"
                          placeholder="Description for Plant/Seed/Grass"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12 col-md-12">
                      <button
                        type="submit"
                        className="btn plantalife-btn mt-15"
                        id="btnSubmit"
                        onClick={this.onSubmit}
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Admin;
