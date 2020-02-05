import React, { Component } from "react";

class Teams extends Component {
  render() {
    return (
      <div>
        <section className="team-area section-padding-100-0">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* <!-- Section Heading --> */}
                <div className="section-heading text-center">
                  <h2>OUR TEAM</h2>
                  <p>A team of dedicated experienced professionals.</p>
                </div>
              </div>
            </div>

            <div className="row">
              {/* <!-- Single Team Member Area --> */}
              <div className="col-12 col-sm-6 col-lg-6">
                <div className="single-team-member text-center mb-100">
                  {/* <!-- Team Member Thumb --> */}
                  <div className="team-member-thumb">
                    {/* <img src={require("img/bg-img/team1.png")} alt="" /> */}
                    {/* <!-- Social Info --> */}
                    <div className="team-member-social-info">
                      <a href="https://www.facebook.com/jatinhijatin">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="https://instagram.com/jatina997?igshid=1p6l8i04bhovf">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>

                      <a href="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Team Member Info --> */}
                  <div className="team-member-info mt-30">
                    <h5>Jatin Arora</h5>
                    <p>CEO &amp; Founder</p>
                  </div>
                </div>
              </div>

              {/* <!-- Single Team Member Area --> */}
              <div className="col-12 col-sm-6 col-lg-6">
                <div className="single-team-member text-center mb-100">
                  {/* <!-- Team Member Thumb --> */}
                  <div className="team-member-thumb">
                    {/* <img src="img/bg-img/team2.png" alt="" /> */}
                    {/* <!-- Social Info --> */}
                    <div className="team-member-social-info">
                      <a href="https://www.facebook.com/profile.php?id=100025533876430">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a href="https://www.instagram.com/gauravkeshwania/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>

                      <a href="https://www.linkedin.com/in/gaurav-sharma-2b213013a/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Team Member Info --> */}
                  <div className="team-member-info mt-30">
                    <h5>Gaurav Keshwania</h5>
                    <p>Garden Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Teams;
