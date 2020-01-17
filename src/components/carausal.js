import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, } from "mdbreact";



class carausal extends Component {
  render() {
    return (
      <div>

        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={false}
           showIndicators={true}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className= " d-block w-100  "
                  src={require('../static/img/bg-img/bg4.jpg')}

                  height={500}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100 "
                  src={require('../static/img/bg-img/bg2.jpg')}

                  height={500}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block  w-100"
                  src={require('../static/img/bg-img/bg3.jpg')}
                  height={500}
                 
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>

      </div>
    );
  }
}

export default carausal;