import React from "react";
import Header from "../../Header/HeaderLayout/Header";
import PageHeader from "../../common/PageHeader/PageHeader";
import Footer from "../../Footer/FooterLayout/Footer";
import BillingForm from "../CheckoutContent/BillingForm/BillingForm";
import PlaceOrder from "../CheckoutContent/PlaceOrder/PlaceOrder";

const checkout = (props) => {
  return (
    <div>
      <Header {...props} />
      <PageHeader pageName="Checkout" />
      <BillingForm
        center={{ lat: 18.5204, lng: 73.8567 }}
        height="200px"
        zoom={15}
        {...props}
      />
      <Footer />
    </div>
  );
};

export default checkout;
