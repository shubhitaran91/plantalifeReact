import React, { Component } from "react";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import Footer from "../../../Footer/FooterLayout/Footer";
import { geolocated } from "react-geolocated";
import "./BillingForm.css";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker,
} from "react-google-maps";
import Autocomplete from "react-google-autocomplete";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyDzohfWArUDqrVJ-_S3DgPtXWyaFhDd9jY");
Geocode.enableDebug();

class BillingForm extends Component {
  state = {
    address: "",
    city: "",
    area: "",
    state: "",
    houseNo: "",
    landmark: "",
    mapPosition: {
      lat: this.props.center.lat,
      lng: this.props.center.lng,
    },
    markerPosition: {
      lat: this.props.center.lat,
      lng: this.props.center.lng,
    },
  };

  componentDidMount() {
    console.log("lat", this.props);
    Geocode.fromLatLng(
      this.state.mapPosition.lat,
      this.state.mapPosition.lng
    ).then(
      (response) => {
        console.log("response", response);
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);

        console.log("city", city, area, state);

        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.markerPosition.lat !== this.props.center.lat ||
      this.state.address !== nextState.address ||
      this.state.city !== nextState.city ||
      this.state.area !== nextState.area ||
      this.state.state !== nextState.state
    ) {
      return true;
    } else if (this.props.center.lat === nextProps.center.lat) {
      return false;
    }
  }

  getCity = (addressArray) => {
    let city = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (
        addressArray[i].types[0] &&
        "administrative_area_level_2" === addressArray[i].types[0]
      ) {
        city = addressArray[i].long_name;
        return city;
      }
    }
  };

  getArea = (addressArray) => {
    let area = "";
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if (
            "sublocality_level_1" === addressArray[i].types[j] ||
            "locality" === addressArray[i].types[j]
          ) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
  };

  getState = (addressArray) => {
    let state = "";
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (
          addressArray[i].types[0] &&
          "administrative_area_level_1" === addressArray[i].types[0]
        ) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = this.getCity(addressArray),
          area = this.getArea(addressArray),
          state = this.getState(addressArray);
        this.setState({
          address: address ? address : "",
          area: area ? area : "",
          city: city ? city : "",
          state: state ? state : "",
          markerPosition: {
            lat: newLat,
            lng: newLng,
          },
          mapPosition: {
            lat: newLat,
            lng: newLng,
          },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  onPlaceSelected = (place) => {
    console.log("plc", place);
    const address = place.formatted_address,
      addressArray = place.address_components,
      city = this.getCity(addressArray),
      area = this.getArea(addressArray),
      state = this.getState(addressArray),
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();
    // Set these values in the state.
    this.setState({
      address: address ? address : "",
      area: area ? area : "",
      city: city ? city : "",
      state: state ? state : "",
      markerPosition: {
        lat: latValue,
        lng: lngValue,
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue,
      },
    });
  };

  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          google={this.props.google}
          defaultZoom={this.props.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng,
          }}
        >
          <InfoWindow
            onClose={this.onInfoWindowClose}
            position={{
              lat: this.state.markerPosition.lat + 0.0018,
              lng: this.state.markerPosition.lng,
            }}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>
                {this.state.address}
              </span>
            </div>
          </InfoWindow>
          <Marker
            google={this.props.google}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng,
            }}
          />
          <Marker />
          <Autocomplete
            style={{
              width: "100%",
              height: "40px",
              paddingLeft: "16px",
              marginTop: "20px",
              marginBottom: "500px",
            }}
            onPlaceSelected={this.onPlaceSelected}
            types={["(regions)"]}
          />
        </GoogleMap>
      ))
    );

    let map;
    if (this.props.center.lat !== undefined) {
      map = (
        <div>
          <AsyncMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDzohfWArUDqrVJ-_S3DgPtXWyaFhDd9jY&libraries=places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: this.props.height }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />

          <div className="Billing" style={{ marginTop: "70px" }}>
            <label htmlFor="">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              onChange={this.onChange}
              readOnly="readOnly"
              value={this.state.city}
            />
            <label htmlFor="">Area</label>
            <input
              type="text"
              name="area"
              className="form-control"
              onChange={this.onChange}
              readOnly="readOnly"
              value={this.state.area}
            />
            <label htmlFor="">State</label>
            <input
              type="text"
              name="state"
              className="form-control"
              onChange={this.onChange}
              readOnly="readOnly"
              value={this.state.state}
            />
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              onChange={this.onChange}
              readOnly="readOnly"
              value={this.state.address}
            />
          </div>
        </div>
      );
    } else {
      map = <div style={{ height: this.props.height }} />;
    }

    return (
      <div>
        <div style={{ width: "50%", paddingLeft: 10 }}>{map}</div>
        <PlaceOrder {...this.props} />
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: Infinity,
  },
  watchPosition: true,
  userDecisionTimeout: null,
  suppressLocationOnMount: false,
  geolocationProvider: navigator.geolocation,
  isOptimisticGeolocationEnabled: true,
})(BillingForm);
