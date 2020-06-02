import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    messgae: "",
  };
  render() {
    return (
      <section class="contact-area">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-12 col-lg-5">
              <div class="section-heading">
                <h2>GET IN TOUCH</h2>
                <p>Send us a message, we will call back later</p>
              </div>
              <div class="contact-form-area mb-100">
                <form action="#" method="post">
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="contact-name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          id="contact-email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="contact-subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn plantalife-btn mt-15">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactForm;
