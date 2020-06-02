import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
} from "mdbreact";

const carausal = () => {
  const carausalItem = [
    {
      itemId: "1",
      path: require("../../../static/img/bg-img/bg2.jpg"),
    },
    {
      itemId: "2",
      path: require("../../../static/img/bg-img/bg3.jpg"),
    },
    {
      itemId: "3",
      path: require("../../../static/img/bg-img/bg4.jpg"),
    },
  ];
  return (
    <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={false}
      className="z-depth-1"
      slide
    >
      <MDBCarouselInner>
        {carausalItem.map((value, index) => {
          return (
            <MDBCarouselItem itemId={value.itemId} key={index}>
              <MDBView>
                <img
                  className=" d-block w-100"
                  src={value.path}
                  height={500}
                  alt=""
                />
              </MDBView>
            </MDBCarouselItem>
          );
        })}
      </MDBCarouselInner>
    </MDBCarousel>
  );
};

export default carausal;
