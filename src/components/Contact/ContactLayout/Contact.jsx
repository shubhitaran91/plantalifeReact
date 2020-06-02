import React from "react";
import Header from "../../Header/HeaderLayout/Header";
import PageHeader from "../../common/PageHeader/PageHeader";
import ContactContent from "../ContactContent/ContactContent";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../../Footer/FooterLayout/Footer";

const contact = (props) => {
  return (
    <div>
      <Header {...props} />
      <PageHeader pageName="Contact Us" />
      <ContactContent />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default contact;
