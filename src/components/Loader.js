import React, { Component } from "react";
// import Loaders from "react-loader-spinner";
import { EatLoading } from "react-loadingg";
import { green } from "@material-ui/core/colors";
class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <EatLoading color={"green"}/>
      </>
    );
  }
}

export default Loader;
