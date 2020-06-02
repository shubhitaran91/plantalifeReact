import React from "react";
import Header from "../../Header/HeaderLayout/Header";
import PageHeader from "../../common/PageHeader/PageHeader";
import Footer from "../../Footer/FooterLayout/Footer";
import CartContent from "../CartContent/CartContent";
import CartCoupons from "../CartCoupons/CartCoupons";

const cart = (props) => {
  return (
    <div>
      <Header {...props} />
      <PageHeader pageName="Cart" />
      <CartContent />

      <CartCoupons />
      <Footer />
    </div>
  );
};

export default cart;
